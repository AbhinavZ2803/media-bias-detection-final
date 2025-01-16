// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Sample API Route for Analysis
// app.post("/api/analyze", (req, res) => {
//   const { article } = req.body;

//   // Mock analysis results (replace with actual model integration)
//   const analysisResults = {
//     biasType: "Political Bias",
//     score: "85%",
//   };

//   res.json(analysisResults);
// });

// app.listen(port, () => {
//   console.log(`Backend server running on http://localhost:${port}`);
// });

// =====================================================================================

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Route for Media Bias Detection in Text
app.post('/analyze-text', (req, res) => {
    const { text } = req.body;
    // Call the function to analyze text for media bias (implement the actual logic here)
    const result = mediaBiasDetectionInText(text);
    res.json({ result });
});

// Route for Media Bias Detection in Image
app.post('/analyze-image', (req, res) => {
    const { image } = req.body;
    // Call the function to analyze image for media bias (implement the actual logic here)
    const result = mediaBiasDetectionInImage(image);
    res.json({ result });
});

// Route for Text Fact Checker
app.post('/fact-check', (req, res) => {
    const { text } = req.body;
    // Call the function to perform fact-checking (implement the actual logic here)
    const result = textFactChecker(text);
    res.json({ result });
});

// Example implementations of functions (for demo; replace with actual logic)
function mediaBiasDetectionInText(text) {
    // Your text bias detection logic here
    return { bias: "Example Bias in Text", accuracy: 85 };
}

function mediaBiasDetectionInImage(image) {
    // Your image bias detection logic here
    return { bias: "Example Bias in Image", accuracy: 80 };
}

function textFactChecker(text) {
    // Your fact-checking logic here
    return { verified: true, accuracy: 90 };
}

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
