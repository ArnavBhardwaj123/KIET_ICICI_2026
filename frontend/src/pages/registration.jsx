import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

export default function Registration() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    { id: 1, backgroundImage: heroimage },
    { id: 2, backgroundImage: heroimage },
    { id: 3, backgroundImage: heroimage },
    { id: 4, backgroundImage: heroimage },
  ];

  useEffect(() => {
    let progressInterval;
    let slideInterval;

    const startProgress = () => {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
      }, 100);

      slideInterval = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        clearInterval(progressInterval);
      }, 5000);
    };

    startProgress();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideInterval);
    };
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const tableHeaderStyle = {
    backgroundColor: "#e2e8f0",
    padding: "0.75rem 0.5rem",
    textAlign: "left",
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#4a5568",
    borderBottom: "2px solid #cbd5e0",
  };

  const tableCellStyle = {
    padding: "0.75rem 0.5rem",
    borderBottom: "1px solid #e2e8f0",
    color: "#4a5568",
    fontSize: "0.85rem",
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section" style={{ width: "100%", height: "100vh", paddingTop: "90px" }}>
        {/* Top White Section */}
        <div
          style={{
            backgroundColor: "white",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 2rem",
            position: "relative",
          }}
        >
          {/* Left Content */}
          <div style={{ flex: 1, maxWidth: "60%", textAlign: "left" }}>
            <p
              style={{
                color: "#05B8A8",
                fontSize: "1.2rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                margin: "0 0 1rem 0",
                letterSpacing: "1px",
              }}
            >
              IEEE ICICI 2026
            </p>
            <h1
              style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "3.8rem",
                fontWeight: "bold",
                lineHeight: "1.1",
                margin: "0",
                textAlign: "left",
              }}
            >
              Registration
            </h1>
            <p
              style={{
                color: "#666",
                fontSize: "1.2rem",
                fontFamily: "Poppins",
                fontWeight: "500",
                margin: "1rem 0 0 0",
                letterSpacing: "0.5px",
                textAlign: "left",
              }}
            >
              Join the Global Community of Innovators
            </p>
          </div>

          {/* Right Content */}
          <div style={{
            position: "absolute",
            right: 0,
            flex: 1,
            maxWidth: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "4rem",
            paddingLeft: "2rem",
            paddingRight: "5rem",
          }}>
            <div
              style={{
                color: "#666",
                fontFamily: "Poppins",
                fontSize: "1.1rem",
                lineHeight: "1.7",
                margin: "0",
                textAlign: "left",
              }}
            >
              <div>Secure your spot at ICICI 2026 and connect with</div>
              <div>researchers and experts from around the world.</div>
            </div>
          </div>
        </div>

        {/* Bottom Blue Tech Section - Slider */}
        <div
          style={{
            position: "relative",
            height: "60%",
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
            backgroundSize: "120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            padding: "0 4rem",
            overflow: "hidden",
          }}
        >
          {/* Blue Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(0, 51, 152, 0.61), rgba(0, 100, 200, 0.8))",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2, color: "white", width: "100%" }}>
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <FaCalendarAlt style={{ color: "white" }} />
                <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", margin: "0" }}>
                  15th - 18th February, 2026
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FaMapMarkerAlt style={{ color: "white" }} />
                <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", margin: "0" }}>
                  KIET Group Of Institutions, Ghaziabad, India
                </p>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: "Poppins", fontSize: "2.5rem", fontWeight: "300", margin: "0", lineHeight: "1.3", textAlign: "left" }}>
                Register Now to be a Part of<br />
                ICICI 2026
              </h2>
            </div>
          </div>

          {/* Progress Points/Indicators */}
          <div className="progress-indicators">
            <div style={{ position: "absolute", top: "50%", left: "2rem", right: "2rem", height: "2px", backgroundColor: "rgba(255, 255, 255, 0.3)", transform: "translateY(-50%)", zIndex: 1 }} />
            <div style={{ position: "absolute", top: "50%", left: "2rem", height: "3px", backgroundColor: "white", transform: "translateY(-50%)", zIndex: 2, width: `calc((100% - 4rem) * ${(currentSlide + progress / 100) / slides.length})`, transition: progress === 0 ? "none" : "width 0.1s linear", boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)", borderRadius: "1px" }} />
            {slides.map((_, index) => {
              const isActive = index === currentSlide;
              return (
                <div key={index} onClick={() => goToSlide(index)} className={`progress-point ${isActive ? 'active' : ''}`} style={{ width: isActive ? "14px" : "10px", height: isActive ? "14px" : "10px", borderRadius: "50%", backgroundColor: "white", border: "2px solid rgba(255, 255, 255, 0.8)", position: "relative", zIndex: 3, transition: "all 0.3s ease", cursor: "pointer" }} />
              );
            })}
          </div>
        </div>
      </div>

      {/* Registration Content */}
      <div style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", minHeight: "100vh" }}>
        <div className="responsive-row" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "2rem" }}>
          {/* Left Sidebar */}
          <div className="sidebar" style={{ width: "300px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ backgroundColor: "#4a5568", borderRadius: "15px", padding: "1.5rem", color: "white" }}>
              <div style={{ backgroundColor: "#2d3748", borderRadius: "20px", padding: "0.5rem 1rem", fontSize: "0.8rem", fontFamily: "Poppins", fontWeight: "600", marginBottom: "1rem", textAlign: "center", letterSpacing: "1px" }}>
                IMPORTANT DATES
              </div>
              <div style={{ fontFamily: "Poppins", fontSize: "0.9rem", lineHeight: "1.6", color: "#e2e8f0" }}>
                <p style={{ margin: "0.5rem 0" }}>Paper Submission: 31st January, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Notification: 15th February, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Camera Ready: 20th February, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Conference: 15th-18th February, 2026</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#4a5568", borderRadius: "15px", padding: "1.5rem", color: "white" }}>
              <div style={{ backgroundColor: "#2d3748", borderRadius: "20px", padding: "0.5rem 1rem", fontSize: "0.8rem", fontFamily: "Poppins", fontWeight: "600", marginBottom: "1rem", textAlign: "center", letterSpacing: "1px" }}>
                CONFERENCE SECRETARIAT
              </div>
              <div style={{ fontFamily: "Poppins", fontSize: "0.9rem", lineHeight: "1.6", color: "#e2e8f0" }}>
                <p style={{ margin: "0.5rem 0" }}>KIET Group of Institutions</p>
                <p style={{ margin: "0.5rem 0" }}>Delhi-NCR, Ghaziabad</p>
                <p style={{ margin: "0.5rem 0" }}>Email: icici2026@kiet.edu</p>
                <p style={{ margin: "0.5rem 0" }}>Phone: +91-120-2844000</p>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div style={{ flex: 1, backgroundColor: "white", borderRadius: "15px", padding: "2rem", textAlign: "left" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{ fontFamily: "Poppins", fontSize: "2.5rem", color: "#333", margin: "0 0 1rem 0", fontWeight: "bold" }}>
                REGISTRATION
              </h1>
              <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                At least one author of an accepted paper must register and present his / her paper at the conference. Only accepted, registered, and presented papers will be considered for publication.
              </p>
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "Poppins", fontSize: "1.8rem", color: "#333", margin: "0 0 1.5rem 0", fontWeight: "600" }}>
                Registration Fees
              </h2>

              {/* Indian Authors Table */}
              <h3 style={{ fontFamily: "Poppins", fontSize: "1.4rem", color: "#4299e1", margin: "0 0 1rem 0", fontWeight: "600" }}>Indian Authors</h3>
              <div style={{ width: "100%", overflowX: "auto", marginBottom: "2rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Poppins" }}>
                  <thead>
                    <tr>
                      <th style={tableHeaderStyle}>Category</th>
                      <th style={tableHeaderStyle}>IEEE Members (INR)</th>
                      <th style={tableHeaderStyle}>Non-IEEE Members (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={tableCellStyle}>Academicians</td><td style={tableCellStyle}>7000</td><td style={tableCellStyle}>7500</td></tr>
                    <tr><td style={tableCellStyle}>UG/PG Scholars/Research Scholars</td><td style={tableCellStyle}>6000</td><td style={tableCellStyle}>6500</td></tr>
                    <tr><td style={tableCellStyle}>Industry Professionals</td><td style={tableCellStyle}>8000</td><td style={tableCellStyle}>8500</td></tr>
                    <tr><td style={tableCellStyle}>Co-Authors/Attendee</td><td style={tableCellStyle}>1000</td><td style={tableCellStyle}>2000</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Foreign Authors Table */}
              <h3 style={{ fontFamily: "Poppins", fontSize: "1.4rem", color: "#4299e1", margin: "2.5rem 0 1rem 0", fontWeight: "600" }}>Foreign Authors</h3>
              <div style={{ width: "100%", overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Poppins" }}>
                  <thead>
                    <tr>
                      <th style={tableHeaderStyle}>Category</th>
                      <th style={tableHeaderStyle}>IEEE Members (USD)</th>
                      <th style={tableHeaderStyle}>Non-IEEE Members (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={tableCellStyle}>Academicians</td><td style={tableCellStyle}>250</td><td style={tableCellStyle}>350</td></tr>
                    <tr><td style={tableCellStyle}>UG/PG Scholars/Research Scholars</td><td style={tableCellStyle}>150</td><td style={tableCellStyle}>200</td></tr>
                    <tr><td style={tableCellStyle}>Industry Professionals</td><td style={tableCellStyle}>400</td><td style={tableCellStyle}>500</td></tr>
                    <tr><td style={tableCellStyle}>Co-Authors/Attendee</td><td style={tableCellStyle}>80</td><td style={tableCellStyle}>120</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Accommodation Section */}
            <div>
              <h2 style={{ fontFamily: "Poppins", fontSize: "1.8rem", color: "#333", margin: "0 0 1.5rem 0", fontWeight: "600" }}>
                Accommodation
              </h2>
              <div style={{ backgroundColor: "#f8f9fa", borderRadius: "12px", padding: "1.5rem", border: "1px solid #e9ecef", textAlign: "center" }}>
                <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0 0 1rem 0" }}>
                  Limited Rooms are available for participants/Guests (on Payment basis). The availability of rooms will be First-Come First-Serve basis.
                </p>
                <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                  For more details, kindly contact the following Person:
                </p>
                <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #e9ecef", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <h4 style={{ fontFamily: "Poppins", fontSize: "1.2rem", color: "#333", margin: "0 0 0.5rem 0", fontWeight: "600" }}>Mr. Gagan Kumar Singh</h4>
                  <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "Poppins", color: "#666", margin: "0.5rem 0" }}>
                    <FaPhone /> +91-8318670117
                  </p>
                  <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "Poppins", color: "#666", margin: "0" }}>
                    <FaEnvelope /> gagan.singh@kiet.edu
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

