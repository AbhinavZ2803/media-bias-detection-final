import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Media Bias Detection | All rights reserved</p>
        <p className="mt-2">Follow us on social media:</p>
        <div className="mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl hover:text-blue-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl hover:text-blue-400">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl hover:text-blue-400">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
