import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Speakers from "./pages/speakers.jsx";
import CallForPapers from "./pages/callforpapers.jsx";
import PaperSubmission from "./pages/papersubmission.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/paper-submission" element={<PaperSubmission />} />
        <Route path="/committee" element={<div style={{padding: "6rem 2rem", textAlign: "center"}}><h1>Committee</h1><p>Coming Soon...</p></div>} />
        <Route path="/registration" element={<div style={{padding: "6rem 2rem", textAlign: "center"}}><h1>Registration</h1><p>Coming Soon...</p></div>} />
        <Route path="/contact" element={<div style={{padding: "6rem 2rem", textAlign: "center"}}><h1>Contact</h1><p>Coming Soon...</p></div>} />
      </Routes>
    </Router>
  );
}
