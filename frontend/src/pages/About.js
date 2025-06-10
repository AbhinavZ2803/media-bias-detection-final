// import React from 'react';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-3xl font-bold text-center mb-4">About the Project</h2>
//       <p className="text-lg mb-4">The Media Bias Detection project uses Machine Learning and Large Language Models (LLMs) to detect bias in news articles. The goal is to provide insights into media bias and help readers understand the perspectives presented in the news.</p>
      
//       <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
//       <ul className="list-disc ml-6">
//         <li>React</li>
//         <li>Node.js</li>
//         <li>Machine Learning</li>
//         <li>Large Language Models (LLMs)</li>
//       </ul>

//       <h3 className="text-2xl font-semibold mt-6 mb-4">Team</h3>
//       <p>Abhinav Zilkawar, Ayush Shamkuwar, Madhura Gavate, Vishal Gosavi</p>
//     </div>
//   );
// };

// export default About;

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img/AYUSH_FINAL.jpg';
import img2 from '../assets/img/abhinav.jpg';
import img3 from '../assets/img/vishal.jpg';
import img4 from '../assets/img/madhura.jpg';

const teamMembers = [
  {
    name: 'Abhinav Zilkarwar',
    contribution: 'Backend Developer & API Integration',
    image: img2, // replace with actual image URL
  },
  {
    name: 'Ayush Shamkuwar',
    contribution: 'Frontend Developer & UI/UX',
    image: img1,
  },
  {
    name: 'Madhura Gavate',
    contribution: 'Data Scientist & ML Specialist',
    image: img4,
  },
  {
    name: 'Vishal Gosavi',
    contribution: 'DevOps & Deployment',
    image: img3,
  },
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <div className="animate__animated animate__fadeInDown">
        <h2 className="text-4xl font-bold text-center mb-6">About the Project</h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          The Media Bias Detection project leverages Machine Learning and Large Language Models (LLMs) to detect bias in news articles.
          Our goal is to provide transparent insights into media bias and empower readers to understand the diverse perspectives in today's news.
        </p>
      </div>

      <div className="animate__animated animate__fadeInUp">
        <h3 className="text-3xl font-semibold text-center mb-4">Technologies Used</h3>
        <ul className="list-disc text-lg max-w-md mx-auto">
          <li>React</li>
          <li>Node.js</li>
          <li>Machine Learning</li>
          <li>Large Language Models (LLMs)</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>

      <div className="animate__animated animate__fadeInUp">
        <h3 className="text-3xl font-semibold text-center mt-6 mb-8">Meet Our Team</h3>
        <div className="max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="w-full h-60 flex justify-center items-center bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                    <p className="text-gray-600">{member.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;

