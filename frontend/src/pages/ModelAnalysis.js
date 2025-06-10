import React, { useState } from "react";
import { motion } from "framer-motion";

const ModelAnalysis = () => {
  const [input, setInput] = useState(""); // For text & URL
  const [file, setFile] = useState(null); // For image upload
  const [feature, setFeature] = useState("image");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // For loading animation

  // Simplified for Gemini response
  const getLabelText = (label) => {
    if (!label) return "Unknown";
    const normalized = label.toString().toUpperCase();
    if (normalized === "REAL") return "REAL";
    if (normalized === "FAKE") return "FAKE";
    return "Unknown";
  };

  const getLabelColor = (label) => {
    if (!label) return "text-gray-600";
    const normalized = label.toString().toUpperCase();
    if (normalized === "REAL") return "text-green-600";
    if (normalized === "FAKE") return "text-red-600";
    return "text-gray-600";
  };

  const handleAnalysis = async () => {
    const formData = new FormData();
    let endpoint = "";

    if (feature === "image" && file) {
      endpoint = "http://localhost:5000/api/analyze-image";
      formData.append("image", file);
    } else if (feature === "text" && input.trim() !== "") {
      endpoint = "http://localhost:5000/api/analyze-text";
      formData.append("input", input); // Gemini-backed endpoint
    } else {
      alert("Please provide valid input.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        alert(`Server error: ${data.error}`);
        setResult(null);
      } else if (
        typeof data === "object" &&
        "result" in data &&
        "confidence" in data
      ) {
        setResult(data);
      } else {
        alert("Invalid response format from server.");
        setResult(null);
      }
    } catch (err) {
      console.error("Error analyzing input:", err);
      alert("An error occurred during analysis.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-blue-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.h2>

      {/* Feature Selection */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <select
          className="p-3 rounded-lg border border-gray-300 shadow-md"
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
        >
          <option value="text">Detect Bias in Text</option>
          <option value="image">Detect Bias in Image</option>
        </select>
      </motion.div>

      {/* Input Fields */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {feature === "image" ? (
          <label className="cursor-pointer w-2/3 bg-white text-center py-3 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file ? file.name : "Upload an Image"}
          </label>
        ) : (
          <input
            type="text"
            className="p-3 rounded-lg border border-gray-300 w-2/3 shadow-md"
            placeholder="Enter text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
      </motion.div>

      {/* Analyze Button */}
      <motion.button
        onClick={handleAnalysis}
        className="bg-blue-600 text-white px-6 py-3 mt-5 rounded-lg text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </motion.button>

      {/* Display Analysis Result */}
      {result && (
        <motion.div
          className="mt-6 bg-white p-6 rounded-xl shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Analysis Result
          </h3>
          <motion.p
            className="text-lg font-medium text-gray-600"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <strong>Result:</strong>{" "}
            <span className={getLabelColor(result.result)}>
              {getLabelText(result.result)}
            </span>
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 mt-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <strong>Confidence:</strong>{" "}
            {typeof result.confidence === "number"
              ? result.confidence.toFixed(2)
              : "N/A"}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default ModelAnalysis;
