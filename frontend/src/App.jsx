import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import CallForPapers from "./pages/callforpapers.jsx";
import PaperSubmission from "./pages/papersubmission.jsx";
import Registration from "./pages/registration.jsx";
import Contact from "./pages/contact.jsx";
import Committee from "./pages/committee.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Speakers from "./pages/speakers.jsx";
import ImportantDates from "./pages/important_dates.jsx";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/important_dates" element={<ImportantDates />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
