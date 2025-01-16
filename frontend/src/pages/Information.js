// import React from 'react';
// import { Link } from 'react-router-dom';

// const modelCards = [
//   {
//     title: 'Deep Learning Model',
//     description: 'Achieves high accuracy for complex bias detection in media.',
//     link: '/deep-learning-details',
//   },
//   {
//     title: 'Machine Learning',
//     description: 'Balanced accuracy, suitable for mid-scale applications.',
//     link: '/machine-learning-details',
//   },
//   {
//     title: 'Lexicon-Based Approach',
//     description: 'Simple approach for detecting bias, with moderate accuracy.',
//     link: '/lexicon-based-details',
//   },
//   {
//     title: 'Sentiment Analysis',
//     description: 'Evaluates the emotional tone of articles to identify bias.',
//     link: '/sentiment-analysis',
//   },
//   {
//     title: 'Topic Detection',
//     description: 'Classifies articles by topic to determine potential bias areas.',
//     link: '/topic-detection',
//   },
// ];

// const Information = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
//         {modelCards.map((card, index) => (
//           <div key={index} className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//             <h2 className="text-2xl font-semibold text-blue-500 mb-4">{card.title}</h2>
//             <p className="text-lg text-gray-700">{card.description}</p>
//             <div className="mt-4">
//               <Link to={card.link} className="text-blue-500 hover:text-blue-700 underline">
//                 View More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Information;

// ===================================================================================================

import React from 'react';

const modelCards = [
    {
              title: "Media Bias Detection in Text",
              description: "Understand how to detect bias in textual media using natural language processing techniques.",
              link: "https://arxiv.org/pdf/2112.13352v1"
            },
            {
              title: "Media Bias Detection in Image",
              description: "Learn about analyzing images for potential biases in media portrayal.",
              link: "https://www.cambridge.org/core/journals/memory-mind-and-media/article/identifying-and-minimising-the-impact-of-fake-visual-media-current-and-future-directions/05238C440ED9F72B2761542EB542B9CB"
            },
            {
              title: "Text Fact Checker",
              description: "Explore tools for verifying the factual accuracy of textual information.",
              link: "https://utopia.ut.edu/FakeNews/factcheck"
            },
            {
              title: "Machine Learning in Bias Detection",
              description: "Learn about using machine learning models to improve media bias detection.",
              link: "https://www.semanticscholar.org/paper/Machine-learning-media-bias-D'Alonzo-Tegmark/be12c2da4f9912f413feb310bbf84e6f480ecd91"
            },
            {
              title: "Large Language Models in Media Analysis",
              description: "Explore the role of large language models in analyzing media content.",
              link: "https://arxiv.org/html/2403.14896v1"
            }
];

const Information = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {modelCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">{card.title}</h2>
            <p className="text-lg text-gray-700">{card.description}</p>
            <div className="mt-4">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;

// ==========================================================================

