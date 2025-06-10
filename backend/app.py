from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoFeatureExtractor, AutoModelForImageClassification
from PIL import Image
import torch
import io
import os
import logging
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# --- Load Deepfake Detection Model ---
image_model_name = "dima806/deepfake_vs_real_image_detection"
image_model = AutoModelForImageClassification.from_pretrained(image_model_name)
extractor = AutoFeatureExtractor.from_pretrained(image_model_name)
print("Deepfake detection model loaded successfully!")

# --- Set Gemini API Key ---
os.environ["GOOGLE_API_KEY"] = "AIzaSyDyOEyG60Nx8p-xh5waMAYq-3HTDpdId5I"
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

# --- Load Gemini model ---
model = genai.GenerativeModel("gemini-2.0-flash")

# --- Analyze Image Route ---
@app.route("/api/analyze-image", methods=["POST"])
def analyze_image():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files["image"]
    image = Image.open(io.BytesIO(image_file.read())).convert("RGB")

    inputs = extractor(images=image, return_tensors="pt")
    with torch.no_grad():
        outputs = image_model(**inputs)
        logits = outputs.logits
        predicted_class_idx = logits.argmax(-1).item()
        confidence = torch.softmax(logits, dim=1)[0][predicted_class_idx].item()

    # Map model label to 'REAL' or 'FAKE'
    labels = image_model.config.id2label
    raw_label = labels[predicted_class_idx].lower()

    if "real" in raw_label:
        standardized_label = "REAL"
    elif "fake" in raw_label or "deepfake" in raw_label:
        standardized_label = "FAKE"
    else:
        standardized_label = "UNKNOWN"

    return jsonify({
        "result": standardized_label,
        "confidence": float(confidence)
    })

# --- Analyze Text Route (Gemini) ---
@app.route("/api/analyze-text", methods=["POST"])
def analyze_text():
    text = request.form.get("input")
    if not text:
        return jsonify({"error": "No text provided"}), 400

    prompt = (
        f"Classify the following news text as REAL or FAKE. "
        f"Only respond with 'REAL' or 'FAKE'.\n\n"
        f"News: \"{text}\""
    )

    try:
        response = model.generate_content(prompt)
        reply = getattr(response, 'text', '').strip().upper()

        logging.info(f"Gemini response text: {reply}")

        if "REAL" in reply:
            result = "REAL"
        elif "FAKE" in reply:
            result = "FAKE"
        else:
            result = "UNKNOWN"

        return jsonify({"result": result, "confidence": 0.90})

    except Exception as e:
        logging.error(f"Error calling Gemini model: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
