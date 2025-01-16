// import React, { useState } from 'react';

// const ModelAnalysis = () => {
//   const [article, setArticle] = useState('');
//   const [modelType, setModelType] = useState('ML');
//   const [result, setResult] = useState(null);

//   const handleAnalysis = () => {
//     // API call to backend for analysis
//     // Assuming backend is running and has an endpoint to handle this
//     fetch('http://localhost:5000/api/analyze', {
//       method: 'POST',
//       body: JSON.stringify({ article, modelType }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(response => response.json())
//       .then(data => setResult(data))
//       .catch(err => console.error(err));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 text-center">
//       <h2 className="text-3xl font-bold text-center mb-4">Model Analysis</h2>
//       <div className="flex justify-center">
//         <input
//           type="text"
//           className="p-2 rounded-md border border-gray-300 w-2/3 mb-4"
//           placeholder="Enter article URL or text"
//           value={article}
//           onChange={e => setArticle(e.target.value)}
//         />
//       </div>
//       <div className="flex justify-center mb-4">
//         <select
//           className="p-2 rounded-md border border-gray-300"
//           value={modelType}
//           onChange={e => setModelType(e.target.value)}
//         >
//           <option value="ML">Machine Learning</option>
//           <option value="LLM">Large Language Model</option>
//         </select>
//       </div>
//       <button onClick={handleAnalysis} className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg">Analyze</button>

//       {result && (
//         <div className="mt-6 bg-white p-6 rounded-md shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Analysis Result</h3>
//           <p><strong>Detected Bias:</strong> {result.bias}</p>
//           <p><strong>Model Used:</strong> {result.model}</p>
//           <p><strong>Accuracy:</strong> {result.accuracy}%</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModelAnalysis;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ModelAnalysis = () => {
//   const [article, setArticle] = useState('');
//   const [modelType, setModelType] = useState('ML');
//   const [result, setResult] = useState(null);

//   // Sample data for the chart (replace with real data from backend)
//   const chartData = {
//     labels: ['Deep Learning', 'Machine Learning', 'Lexicon-Based'],
//     datasets: [
//       {
//         label: 'Accuracy (%)',
//         data: [90, 80, 70], // Replace with real model accuracy
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         tension: 0.1
//       }
//     ]
//   };

//   // Handle analysis button click
//   const handleAnalysis = () => {
//     // API call to backend for analysis (mocked here)
//     // Replace with actual backend API for bias detection
//     fetch('http://localhost:5000/api/analyze', {
//       method: 'POST',
//       body: JSON.stringify({ article, modelType }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(response => response.json())
//       .then(data => setResult(data))
//       .catch(err => console.error(err));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 text-center"> 
        
//       <h2 className="text-3xl font-bold text-center mb-4">
//         Detection
//       </h2>

//       {/* Article input */}
//       <div className="flex justify-center">
//         <input
//           type="text"
//           className="p-2 rounded-md border border-gray-300 w-2/3 mb-4"
//           placeholder="Enter article URL or text"
//           value={article}
//           onChange={e => setArticle(e.target.value)}
//         />
//       </div>

//       {/* Model type selection */}
//       <div className="flex justify-center mb-4">
//         <select
//           className="p-2 rounded-md border border-gray-300"
//           value={modelType}
//           onChange={e => setModelType(e.target.value)}
//         >
//           <option value="ML">Machine Learning</option>
//           <option value="LLM">Large Language Model</option>
//         </select>
//       </div>

//       {/* Analyze Button */}
//       <button
//         onClick={handleAnalysis}
//         className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg"
//       >
//         Analyze
//       </button>

//       {/* Display Analysis Results */}
//       {result && (
//         <div className="mt-6 bg-white p-6 rounded-md shadow-lg">
//           {/* Text Results */}
//           <h3 className="text-xl font-bold mb-4">Analysis Result</h3>
//           <p>
//             <strong>Detected Bias:</strong> {result.bias}
//           </p>
//           <p>
//             <strong>Model Used:</strong> {result.model}
//           </p>
//           <p>
//             <strong>Accuracy:</strong> {result.accuracy}%
//           </p>

//           {/* Visual (Chart) Results */}
//           <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-lg">
//             <h3 className="text-xl text-gray-700 mb-4">Model Performance Comparison</h3>
//             <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
//               <Line data={chartData} options={{ responsive: true }} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModelAnalysis;

// ==========================================================================================

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ModelAnalysis = () => {
  const [input, setInput] = useState('');
  const [feature, setFeature] = useState('text');
  const [result, setResult] = useState(null);

  const chartData = {
    labels: ['Deep Learning', 'Machine Learning', 'Lexicon-Based'],
    datasets: [
      {
        label: 'Accuracy (%)',
        data: [90, 80, 70], 
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
      }
    ]
  };

  const handleAnalysis = () => {
    const endpoint = {
      text: 'http://localhost:5000/api/analyze-text',
      image: 'http://localhost:5000/api/analyze-image',
      fact: 'http://localhost:5000/api/fact-check'
    };

    fetch(endpoint[feature], {
      method: 'POST',
      body: JSON.stringify({ input }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      <h2 className="text-3xl font-bold text-center mb-4">
        Detection
      </h2>

      <div className="flex justify-center">
        <input
          type="text"
          className="p-2 rounded-md border border-gray-300 w-2/3 mb-4"
          placeholder={feature === 'image' ? "Enter image URL" : "Enter text or URL"}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>

      <div className="flex justify-center mb-4">
        <select
          className="p-2 rounded-md border border-gray-300"
          value={feature}
          onChange={e => setFeature(e.target.value)}
        >
          <option value="text">Media Bias Detection in Text</option>
          <option value="image">Media Bias Detection in Image</option>
          <option value="fact">Text Fact Checker</option>
        </select>
      </div>

      <button
        onClick={handleAnalysis}
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg"
      >
        Analyze
      </button>

      {result && (
        <div className="mt-6 bg-white p-6 rounded-md shadow-lg">
          <h3 className="text-xl font-bold mb-4">Analysis Result</h3>
          <p><strong>Result:</strong> {result.message}</p>
          {result.bias && <p><strong>Detected Bias:</strong> {result.bias}</p>}
          {result.accuracy && <p><strong>Accuracy:</strong> {result.accuracy}%</p>}

          <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-700 mb-4">Model Performance Comparison</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <Line data={chartData} options={{ responsive: true }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelAnalysis;

