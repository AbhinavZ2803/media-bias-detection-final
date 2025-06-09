from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoFeatureExtractor, AutoModelForImageClassification
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load image model from HuggingFace
image_model_name = "ashish-001/deepfake-detection-using-ViT"
image_model = AutoModelForImageClassification.from_pretrained(image_model_name)
extractor = AutoFeatureExtractor.from_pretrained(image_model_name)

print("Image model loaded successfully!")

# Load text model from HuggingFace
text_model_name = "jy46604790/Fake-News-Bert-Detect"
tokenizer = AutoTokenizer.from_pretrained(text_model_name)
text_model = AutoModelForSequenceClassification.from_pretrained(
    text_model_name)

print("Text model loaded successfully!")

# Endpoint for image analysis


@app.route("/api/analyze-image", methods=["POST"])
def analyze_image():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files["image"]
    image = Image.open(io.BytesIO(image_file.read())).convert("RGB")

    # Preprocess the image
    inputs = extractor(images=image, return_tensors="pt")

    # Make prediction
    with torch.no_grad():
        outputs = image_model(**inputs)
        logits = outputs.logits
        predicted_class_idx = logits.argmax(-1).item()
        confidence = torch.softmax(logits, dim=1)[
            0][predicted_class_idx].item()

    # Convert prediction
    labels = image_model.config.id2label
    result = labels[predicted_class_idx]

    return jsonify({"result": result, "confidence": float(confidence)})

# New endpoint for text analysis


@app.route("/api/analyze-text", methods=["POST"])
def analyze_text():
    text = request.form.get("input")
    if not text:
        return jsonify({"error": "No text provided"}), 400

    inputs = tokenizer(text, return_tensors="pt",
                       truncation=True, padding=True)
    with torch.no_grad():
        outputs = text_model(**inputs)
        logits = outputs.logits
        probs = torch.softmax(logits, dim=1)
        confidence, predicted_class = torch.max(probs, dim=1)

    # Assuming class 0 = REAL, class 1 = FAKE — adjust if needed based on your model
    label_map = {0: "REAL", 1: "FAKE"}
    result = label_map.get(predicted_class.item(), "UNKNOWN")

    return jsonify({"result": result, "confidence": float(confidence.item())})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
