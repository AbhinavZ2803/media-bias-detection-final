// import React, { useState } from "react";
// import axios from "axios";

// function Homepage() {
//   const [article, setArticle] = useState("");
//   const [results, setResults] = useState(null);

//   const handleAnalysis = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/analyze", {
//         article: article,
//       });
//       setResults(response.data);
//     } catch (error) {
//       console.error("Error fetching analysis", error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">Media Bias Detection</h1>
//       <textarea
//         className="w-full p-4 border rounded-lg mb-4"
//         placeholder="Paste your article here..."
//         value={article}
//         onChange={(e) => setArticle(e.target.value)}
//       ></textarea>
//       <button
//         onClick={handleAnalysis}
//         className="w-full bg-blue-600 text-white py-2 rounded-lg"
//       >
//         Analyze Article
//       </button>

//       {results && (
//         <div className="mt-6">
//           <h2 className="text-xl font-bold">Analysis Results</h2>
//           <p><strong>Bias Type:</strong> {results.biasType}</p>
//           <p><strong>Score:</strong> {results.score}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Homepage;

// ===========================================================================

// import React from 'react';

// const Homepage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
//       <h1 className="text-4xl font-bold mb-4">Media Bias Detection using ML & LLMs</h1>
//       <p className="text-lg mb-6">Our project detects media bias in news articles using Machine Learning and Large Language Models (LLMs).</p>
//       <a href="/model-analysis" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg">Start Analysis</a>
//     </div>
//   );
// };

// export default Homepage;
// =================================================================================

// import React from 'react';

// const Homepage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
//       <div className="text-center space-y-6">
//         <h1 className="text-5xl font-extrabold tracking-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
//           Media Bias Detection using Machine Learning & Large Language Models
//         </h1>
//         <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
//           Our cutting-edge project leverages Machine Learning and Large Language Models (LLMs) to detect bias in media content, offering deep insights into the portrayal of news.
//         </p>

//         <div className="space-y-4">
//           <p className="text-xl font-semibold animate__animated animate__fadeIn animate__delay-3s">
//             With our tool, you can:
//           </p>
//           <ul className="list-disc list-inside text-lg space-y-2 animate__animated animate__fadeIn animate__delay-4s">
//             <li>Identify political bias, emotional tone, and framing of news articles.</li>
//             <li>Analyze news articles using advanced algorithms and models.</li>
//             <li>Access real-time insights with easy-to-understand results.</li>
//           </ul>
//         </div>

//         <div className="mt-8 animate__animated animate__fadeIn animate__delay-5s">
//           <a
//             href="/model-analysis"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//           >
//             Start Analysis
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homepage;

// ==============================================================================================

// import React, { useState, useEffect } from 'react';
// import 'animate.css'; // Import Animate.css for animations

// const Homepage = () => {
//   // Loading state: Set initial loading state as true
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate a delay in loading the content (you can replace this with actual API data fetching logic)
//   useEffect(() => {
//     const loadData = () => {
//       setTimeout(() => {
//         setIsLoading(false); // After 2 seconds, stop loading (can be adjusted)
//       }, 1500);
//     };
//     loadData();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
//       {/* Show loading animation initially */}
//       {isLoading ? (
//         <div className="animate__animated animate__fadeIn animate__delay-1s">
//           <div className="spinner-border animate__animated animate__fadeIn" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center space-y-6">
//           <h1 className="text-5xl font-extrabold tracking-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
//             Media Bias Detection using Machine Learning & Large Language Models
//           </h1>
//           <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
//             Our cutting-edge project leverages Machine Learning and Large Language Models (LLMs) to detect bias in media content, offering deep insights into the portrayal of news.
//           </p>

//           <div className="space-y-4">
//             <p className="text-xl font-semibold animate__animated animate__fadeIn animate__delay-3s">
//               With our tool, you can:
//             </p>
//             <ul className="list-disc list-inside text-lg space-y-2 animate__animated animate__fadeIn animate__delay-4s">
//               <li>Identify political bias, emotional tone, and framing of news articles.</li>
//               <li>Analyze news articles using advanced algorithms and models.</li>
//               <li>Access real-time insights with easy-to-understand results.</li>
//             </ul>
//           </div>

//           <div className="mt-8 animate__animated animate__fadeIn animate__delay-5s">
//             <a
//               href="/model-analysis"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             >
//               Start Analysis
//             </a>
//           </div>
//         </div>
//       )}

//       {/* Footer Section */}
//       <footer className="absolute bottom-0 left-0 w-full py-4 bg-black text-center text-gray-300 mt-8">
//         <p className="text-sm">
//           Developed by the Media Bias Detection Team | &copy; 2024 All Rights Reserved
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Homepage;

// =========================================================================================

// import React, { useState, useEffect } from 'react';

// const Homepage = () => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 2000); // Simulate loading time (2.0 seconds)

//         return () => clearTimeout(timer); // Cleanup timer on component unmount
//     }, []);

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6 relative">
//             {/* GIF loading animation */}
//             {loading && (
//                 <div
//                     className={`absolute inset-0 flex justify-center items-center z-10 transition-opacity duration-1500 ease-out ${loading ? 'opacity-100' : 'opacity-0'}`}
//                 >
//                     <img
//                         src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVucnl0M2RiZ202NDRwN2N1N2tjYWl3N3N2eXoyajF1d29mc3l0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eEjf3t9MeTXZM0d91u/giphy.gif"
//                         alt="AI loading animation"
//                         className="w-[100%] h-[830px] object-cover opacity-80 transition-opacity duration-2000 ease-in-out"
//                     />

//                 </div>
//             )}

//             {/* Main content with fade-in animation */}
//             <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 ease-in`}>
//                 <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Media Bias Detection using ML & LLMs</h1>
//                 <p className="text-lg mb-6 animate-fadeIn">
//                     Our project detects media bias in news articles using Machine Learning and Large Language Models (LLMs).
//                 </p>
//                 <a
//                     href="/model-analysis"
//                     className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg animate-fadeIn"
//                 >
//                     Start Analysis
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Homepage;
// import React, { useState, useEffect } from 'react';

// const Homepage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500); // Simulate loading time (2.0 seconds)

//     return () => clearTimeout(timer); // Cleanup timer on component unmount
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6 relative">
//       {/* GIF loading animation */}
//       {loading && (
//         <div
//           className={`absolute inset-0 flex justify-center items-center z-10 transition-opacity duration-1500 ease-out ${loading ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <img
//             src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVucnl0M2RiZ202NDRwN2N1N2tjYWl3N3N2eXoyajF1d29mc3l0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eEjf3t9MeTXZM0d91u/giphy.gif"
//             alt="AI loading animation"
//             className="w-[100%] h-[840px] object-cover opacity-80 transition-opacity duration-2000 ease-in-out"
//           />
//         </div>
//       )}

//       {/* Main content with fade-in animation */}
//       <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 ease-in`}>
//         <div className="text-center space-y-6">
//           <h1 className="text-5xl font-extrabold tracking-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
//             Media Bias Detection using Machine Learning & Large Language Models
//           </h1>
//           <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
//             Our cutting-edge project leverages Machine Learning and Large Language Models (LLMs) to detect bias in media content, offering deep insights into the portrayal of news.
//           </p>

//           <div className="space-y-4">
//             <p className="text-xl font-semibold animate__animated animate__fadeIn animate__delay-3s">
//               With our tool, you can:
//             </p>
//             <ul className="list-disc list-inside text-lg space-y-2 animate__animated animate__fadeIn animate__delay-4s">
//               <li>Identify political bias, emotional tone, and framing of news articles.</li>
//               <li>Analyze news articles using advanced algorithms and models.</li>
//               <li>Access real-time insights with easy-to-understand results.</li>
//             </ul>
//           </div>

//           <div className="mt-8 animate__animated animate__fadeIn animate__delay-5s">
//             <a
//               href="/model-analysis"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             >
//               Start Analysis
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// 
// export default Homepage;

import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time (2.0 seconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6 relative">
      {/* GIF loading animation */}
      {loading && (
        <div
          className={`absolute  top-12 inset-0 flex justify-center items-center z-10 transition-opacity duration-1500 ease-out ${loading ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVucnl0M2RiZ202NDRwN2N1N2tjYWl3N3N2eXoyajF1d29mc3l0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eEjf3t9MeTXZM0d91u/giphy.gif"
            alt="AI loading animation"
            className="w-[100%] h-[840px] object-cover opacity-80 transition-opacity duration-2000 ease-in-out"
          />
        </div>
      )}

      {/* Main content with fade-in animation */}
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 ease-in`}>
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Media Bias Detection using Machine Learning & Large Language Models
          </h1>
          <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Our cutting-edge project leverages Machine Learning and Large Language Models (LLMs) to detect bias in media content, offering deep insights into the portrayal of news.
          </p>

          <div className="space-y-4 pb-6">
            <p className="text-xl font-semibold animate__animated animate__fadeIn animate__delay-3s">
              With our tool, you can:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2 animate__animated animate__fadeIn animate__delay-4s">
              <li>Identify political bias, emotional tone, and framing of news articles.</li>
              <li>Analyze news articles using advanced algorithms and models.</li>
              <li>Access real-time insights with easy-to-understand results.</li>
            </ul>
          </div>

          <div className="mt-8 animate__animated animate__fadeIn animate__delay-5s">
            <a
              href="/model-analysis"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              Start Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
