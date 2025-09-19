import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Speakers from "./pages/speakers.jsx";
import CallForPapers from "./pages/callforpapers.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
      </Routes>
    </Router>
  );
}
