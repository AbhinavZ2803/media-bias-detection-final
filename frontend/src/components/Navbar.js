// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto">
//         <ul className="flex justify-around text-white">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/model-analysis">Model Analysis</Link>
//           </li>
//           <li>
//             <Link to="/dataset">Dataset</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Media Bias Detection</Link>
        <div>
          <Link to="/information" className="mx-4">Information</Link>
          <Link to="/model-analysis" className="mx-4">Detection</Link>
          <Link to="/dataset" className="mx-4">Dataset</Link>
          <Link to="/about" className="mx-4">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

