import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-4">About the Project</h2>
      <p className="text-lg mb-4">The Media Bias Detection project uses Machine Learning and Large Language Models (LLMs) to detect bias in news articles. The goal is to provide insights into media bias and help readers understand the perspectives presented in the news.</p>
      
      <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
      <ul className="list-disc ml-6">
        <li>React</li>
        <li>Node.js</li>
        <li>Machine Learning</li>
        <li>Large Language Models (LLMs)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-4">Team</h3>
      <p>Abhinav Zilkawar, Ayush Shamkuwar, Madhura Gavate, Vishal Gosavi</p>
    </div>
  );
};

export default About;
