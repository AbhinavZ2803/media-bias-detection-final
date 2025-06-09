import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ModelAnalysis from "./pages/ModelAnalysis";
import Information from "./pages/Information";
// import Dataset from "./pages/Dataset";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import 'animate.css';
import './App.css';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/information" element={<Information />} />
//         <Route path="/model-analysis" element={<ModelAnalysis />} />
//         <Route path="/dataset" element={<Dataset />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
function App() {
  return (
    <Router>
      <div className="flex flex-col h-100% bg-gray-100">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/information" element={<Information />} />
            <Route path="/model-analysis" element={<ModelAnalysis />} />
            {/* <Route path="/dataset" element={<Dataset />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
