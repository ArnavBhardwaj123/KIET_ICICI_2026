import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaTag } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

export default function Contact() {
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
              Contact Us
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
              Get in Touch with the ICICI 2026 Team
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
              <div>We're here to help with any questions you may</div>
              <div>have about submissions, registration, or the event.</div>
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
              background: "linear-gradient(135deg, rgba(0, 50, 150, 0.9), rgba(0, 100, 200, 0.8))",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2, color: "white", width: "100%" }}>
            <div style={{ marginBottom: "5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <FaCalendarAlt style={{ color: "white" }} />
                <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", margin: "0" }}>
                  Conference Dates: 15th - 18th February, 2026
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
                We Look Forward to<br />
                Hearing From You
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

      {/* Contact Content */}
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
                <p style={{ margin: "0.5rem 0" }}>Email: icici2026@kiet.edu</p><p style={{ margin: "0.5rem 0" }}>Phone: +91-120-2844000</p>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div style={{ flex: 1, backgroundColor: "white", borderRadius: "15px", padding: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{ fontFamily: "Poppins", fontSize: "2.5rem", color: "#333", margin: "0 0 1rem 0", fontWeight: "bold" }}>
                Get In Touch
              </h1>
              <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                We welcome your questions, comments, and feedback. Please feel free to reach out to us using the contact details below or by filling out the contact form. Our team will get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "250px" }}>
                <h3 style={{ fontFamily: "Poppins", fontSize: "1.2rem", color: "#4299e1", marginBottom: "1rem" }}>
                  <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} /> Address
                </h3>
                <p style={{ fontFamily: "Poppins", color: "#666", lineHeight: "1.6" }}>
                  KIET Group of Institutions<br />
                  Ghaziabad-Meerut Highway (NH-58)<br />
                  Muradnagar, Ghaziabad, Uttar Pradesh, India - 201206
                </p>
              </div>
              <div style={{ flex: 1, minWidth: "250px" }}>
                <h3 style={{ fontFamily: "Poppins", fontSize: "1.2rem", color: "#4299e1", marginBottom: "1rem" }}>
                  <FaPhone style={{ marginRight: "0.5rem" }} /> Phone
                </h3>
                <p style={{ fontFamily: "Poppins", color: "#666", lineHeight: "1.6" }}>
                  +91-120-2844000
                </p>
                <h3 style={{ fontFamily: "Poppins", fontSize: "1.2rem", color: "#4299e1", marginTop: "1.5rem", marginBottom: "1rem" }}>
                  <FaEnvelope style={{ marginRight: "0.5rem" }} /> Email
                </h3>
                <p style={{ fontFamily: "Poppins", color: "#666", lineHeight: "1.6" }}>
                  icici2026@kiet.edu
                </p>
              </div>
            </div>

            {/* Map */}
            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "Poppins", fontSize: "1.8rem", color: "#333", margin: "0 0 1.5rem 0", fontWeight: "600" }}>
                Our Location
              </h2>
              <div style={{ height: "300px", borderRadius: "10px", overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.782084227301!2d77.49841877479717!3d28.694600175620984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf250d4f10731%3A0x6a0a09e0807b539c!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1717255906232!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KIET Group of Institutions location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ fontFamily: "Poppins", fontSize: "1.8rem", color: "#333", margin: "0 0 1.5rem 0", fontWeight: "600" }}>
                Send Us a Message
              </h2>
              <form>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                  <input type="text" placeholder="Your Name" style={{ width: "50%", padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", fontFamily: "Poppins" }} />
                  <input type="email" placeholder="Your Email" style={{ width: "50%", padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", fontFamily: "Poppins" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <input type="text" placeholder="Subject" style={{ width: "100%", padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", fontFamily: "Poppins" }} />
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <textarea placeholder="Your Message" rows="6" style={{ width: "100%", padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", fontFamily: "Poppins", resize: "vertical" }}></textarea>
                </div>
                <button type="submit" style={{
                  backgroundColor: "#4299e1",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  padding: "0.8rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background-color 0.3s"
                }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
