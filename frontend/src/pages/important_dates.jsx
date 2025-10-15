import { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

export default function ImportantDates() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Slider data
  const slides = [
    { id: 1, backgroundImage: heroimage },
    { id: 2, backgroundImage: heroimage },
    { id: 3, backgroundImage: heroimage },
    { id: 4, backgroundImage: heroimage },
  ];

  // Auto-slide functionality
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
      {/* Hero Section */}
      <div className="hero-section" style={{ width: "100%", height: "100vh" }}>
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
            <p style={{ color: "#05B8A8", fontSize: "1.2rem", fontFamily: "Poppins", fontWeight: "600", margin: "0 0 1rem 0", letterSpacing: "1px" }}>
              ICICI 2026
            </p>
            <h1 style={{ color: "#333", fontFamily: "Poppins", fontSize: "3.8rem", fontWeight: "bold", lineHeight: "1.1", margin: "0", textAlign: "left" }}>
              Important Dates
            </h1>
            <p style={{ color: "#666", fontSize: "1.2rem", fontFamily: "Poppins", fontWeight: "500", margin: "1rem 0 0 0", letterSpacing: "0.5px", textAlign: "left" }}>
              Key Deadlines and Conference Schedule
            </p>
          </div>
          {/* Right Content */}
          <div style={{ position: "absolute", right: 0, flex: 1, maxWidth: "45%", display: "flex", alignItems: "center", justifyContent: "flex-start", paddingTop: "4rem", paddingLeft: "2rem", paddingRight: "5rem" }}>
            <div style={{ color: "#666", fontFamily: "Poppins", fontSize: "1.1rem", lineHeight: "1.7", margin: "0", textAlign: "left" }}>
              <div>Stay updated with all important conference</div>
              <div>deadlines and events. Mark your calendar</div>
              <div>to ensure timely submissions.</div>
            </div>
          </div>
        </div>
        {/* Bottom Blue Tech Section - Slider */}
        <div style={{ position: "relative", height: "60%", backgroundImage: `url(${slides[currentSlide].backgroundImage})`, backgroundSize: "120%", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "flex", alignItems: "center", padding: "0 4rem", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, rgba(0, 51, 152, 0.61), rgba(0, 100, 200, 0.8))", zIndex: 1 }} />
          <div style={{ position: "relative", zIndex: 2, color: "white", width: "100%" }}>
            <div style={{ marginBottom: "5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <FaCalendarAlt style={{ color: "white" }} />
                <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", margin: "0" }}>Conference Dates: April 24-25, 2026</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FaMapMarkerAlt style={{ color: "white" }} />
                <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", margin: "0" }}>KIET Group Of Institutions, Ghaziabad, India</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: "Poppins", fontSize: "2.5rem", fontWeight: "300", margin: "0", lineHeight: "1.3", textAlign: "left" }}>
                Plan Ahead For<br />Conference Success
              </h2>
            </div>
          </div>
          <div className="progress-indicators">
            <div style={{ position: "absolute", top: "50%", left: "2rem", right: "2rem", height: "2px", backgroundColor: "rgba(255, 255, 255, 0.3)", transform: "translateY(-50%)", zIndex: 1 }} />
            <div style={{ position: "absolute", top: "50%", left: "2rem", height: "3px", backgroundColor: "white", transform: "translateY(-50%)", zIndex: 2, width: `calc((100% - 4rem) * ${(currentSlide + progress / 100) / slides.length})`, transition: progress === 0 ? "none" : "width 0.1s linear", boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)", borderRadius: "1px" }} />
            {slides.map((_, index) => {
              const isActive = index === currentSlide;
              return <div key={index} onClick={() => goToSlide(index)} className={`progress-point ${isActive ? 'active' : ''}`} style={{ width: isActive ? "14px" : "10px", height: isActive ? "14px" : "10px", borderRadius: "50%", backgroundColor: "white", border: "2px solid rgba(255, 255, 255, 0.8)", position: "relative", zIndex: 3, transition: "all 0.3s ease", cursor: "pointer" }} />;
            })}
          </div>
        </div>
      </div>

      {/* Important Dates Content */}
      <div style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", minHeight: "100vh" }}>
        <div className="responsive-row" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "2rem" }}>
          {/* Left Sidebar */}
          <div className="sidebar" style={{ width: "300px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            
            {/* Important Dates Card */}
            <div style={{
              backgroundColor: "#4a5568",
              borderRadius: "15px",
              padding: "1.5rem",
              color: "white"
            }}>
              <div style={{
                backgroundColor: "#2d3748",
                borderRadius: "20px",
                padding: "0.5rem 1rem",
                fontSize: "0.8rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                marginBottom: "1rem",
                textAlign: "center",
                letterSpacing: "1px"
              }}>
                IMPORTANT DATES
              </div>
              <div style={{
                fontFamily: "Poppins",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                color: "#e2e8f0"
              }}>
                <p style={{ margin: "0.5rem 0" }}>Paper Submission: November 15, 2025</p>
                <p style={{ margin: "0.5rem 0" }}>Notification: February 15, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Camera Ready & Registration: March 15, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Conference: April 24-25, 2026</p>
              </div>
            </div>

            {/* Contact Us Card */}
            <div style={{
              backgroundColor: "#4a5568",
              borderRadius: "15px",
              padding: "1.5rem",
              color: "white"
            }}>
              <div style={{
                backgroundColor: "#2d3748",
                borderRadius: "20px",
                padding: "0.5rem 1rem",
                fontSize: "0.8rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                marginBottom: "1rem",
                textAlign: "center",
                letterSpacing: "1px"
              }}>
                CONTACT US
              </div>
              <div style={{
                fontFamily: "Poppins",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                color: "#e2e8f0",
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  
                  <div>
                    <p style={{ margin: 0 }}>Phone : Dr. Puneet Garg (+91-9996091999)</p>
                    <p style={{ margin: 0 }}>Dr. Manish Bhardwaj (+91-9457966671)</p>
                    <br />
                    <p style={{ margin: 0 }}>Email : icici@kiet.edu</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content Area */}
          <div style={{ flex: 1, backgroundColor: "white", borderRadius: "15px", padding: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{ fontFamily: "Poppins", fontSize: "2.5rem", color: "#333", margin: "0 0 1rem 0", fontWeight: "bold" }}>
                IMPORTANT DATES
              </h1>
              <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                Please note all the important deadlines for ICICI 2026. All deadlines are at 11:59 PM anywhere on earth (AoE).
              </p>
            </div>
            {/* Dates Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2rem" }}>
              <div style={{ backgroundColor: "#f8f9fa", borderRadius: "12px", padding: "2rem", border: "1px solid #e9ecef", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <h3 style={{ fontFamily: "Poppins", fontSize: "1.4rem", color: "#333", margin: "0", fontWeight: "600" }}>
                    Paper Submission Deadline
                  </h3>
                  <div style={{ backgroundColor: "#05B8A8", color: "white", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.9rem", fontFamily: "Poppins", fontWeight: "600" }}>
                    November 15, 2025
                  </div>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                  Submit your research papers through the conference submission system. All papers must be in IEEE format and should not exceed 6 pages including references.
                </p>
              </div>
              <div style={{ backgroundColor: "#f8f9fa", borderRadius: "12px", padding: "2rem", border: "1px solid #e9ecef", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <h3 style={{ fontFamily: "Poppins", fontSize: "1.4rem", color: "#333", margin: "0", fontWeight: "600" }}>
                    Acceptance Notification
                  </h3>
                  <div style={{ backgroundColor: "#4a5568", color: "white", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.9rem", fontFamily: "Poppins", fontWeight: "600" }}>
                    February 15, 2026
                  </div>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                  Authors will receive notification about the acceptance or rejection of their papers via email. Detailed reviewer comments will be provided for accepted papers.
                </p>
              </div>
              <div style={{ backgroundColor: "#f8f9fa", borderRadius: "12px", padding: "2rem", border: "1px solid #e9ecef", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <h3 style={{ fontFamily: "Poppins", fontSize: "1.4rem", color: "#333", margin: "0", fontWeight: "600" }}>
                    Camera Ready & Last Date of Registration
                  </h3>
                  <div style={{ backgroundColor: "#6366f1", color: "white", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.9rem", fontFamily: "Poppins", fontWeight: "600" }}>
                    March 15, 2026
                  </div>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                  Final versions of accepted papers must be submitted along with the signed copyright transfer form. Authors must also complete their conference registration by this date.
                </p>
              </div>
              <div style={{ backgroundColor: "#f8f9fa", borderRadius: "12px", padding: "2rem", border: "1px solid #e9ecef", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <h3 style={{ fontFamily: "Poppins", fontSize: "1.4rem", color: "#333", margin: "0", fontWeight: "600" }}>
                    Conference Dates
                  </h3>
                  <div style={{ backgroundColor: "#dc2626", color: "white", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.9rem", fontFamily: "Poppins", fontWeight: "600" }}>
                    April 24-25, 2026
                  </div>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                  The main conference will be held over two days featuring keynote speeches, technical sessions, poster presentations, and networking opportunities.
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: "#f8f9fa", borderRadius: "12px", padding: "1.5rem", marginTop: "2rem", border: "1px solid #e2e8f0" }}>
              <h3 style={{ color: "#333", fontFamily: "Poppins", fontSize: "1.3rem", fontWeight: "600", margin: "0 0 1rem 0" }}>
                Important Notes
              </h3>
              <ul style={{ color: "#666", fontFamily: "Poppins", fontSize: "0.95rem", lineHeight: "1.6", margin: "0", paddingLeft: "1.5rem",textAlign: "left" }}>
                <li>All times are in Anywhere on Earth (AoE) timezone</li>
                <li>Late submissions will not be considered</li>
                <li>At least one author must register for the conference to present the paper</li>
                <li>Papers not presented at the conference will be withdrawn from IEEE Xplore</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}