import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

export default function CallForPapers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Slider data - Same as home page
  const slides = [
    {
      id: 1,
      backgroundImage: heroimage,
    },
    {
      id: 2,
      backgroundImage: heroimage,
    },
    {
      id: 3,
      backgroundImage: heroimage,
    },
    {
      id: 4,
      backgroundImage: heroimage,
    }
  ];

  // Auto-slide functionality with progress tracking
  useEffect(() => {
    let progressInterval;
    let slideInterval;

    const startProgress = () => {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 100;
          }
          return prev + 2;
        });
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
      <div className="hero-section" style={{ width: "100%", height: "100vh", paddingTop: "90px" }}>

        {/* Top White Section */}
        <div
          style={{
            backgroundColor: "white",
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 4rem",
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
              Call for Papers
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
              Be Part of IEEE’s Global Research Community
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
              <div>Share your unpublished work with IEEE and gain</div>
              <div>visibility among leading researchers, experts, and</div>
              <div>innovators.</div>
            </div>
          </div>
        </div>

        {/* Bottom Blue Tech Section - Slider */}
        <div
          style={{
            position: "relative",
            height: "75%",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <FaCalendarAlt style={{ color: "white" }} />
                <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", margin: "0" }}>
                  Submission Deadline: 31st January, 2026
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaMapMarkerAlt style={{ color: "white" }} />
                <p style={{ fontFamily: "Poppins", fontSize: "1.1rem", margin: "0" }}>
                  KIET Group Of Institutions, Ghaziabad, India
                </p>
              </div>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2.5rem",
                  fontWeight: "300",
                  margin: "0",
                  lineHeight: "1.3",
                  textAlign: "left",
                }}
              >
                Share Your Research<br />
                With The World
              </h2>
            </div>
          </div>

          {/* Progress Points/Indicators */}
          <div className="progress-indicators">
            {/* Connecting Line Background */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2rem",
                right: "2rem",
                height: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />

            {/* Progress Line */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2rem",
                height: "3px",
                backgroundColor: "white",
                transform: "translateY(-50%)",
                zIndex: 2,
                width: `calc((100% - 4rem) * ${(currentSlide + progress / 100) / slides.length})`,
                transition: progress === 0 ? "none" : "width 0.1s linear",
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
                borderRadius: "1px",
              }}
            />

            {slides.map((_, index) => {
              const isActive = index === currentSlide;

              return (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`progress-point ${isActive ? 'active' : ''}`}
                  style={{
                    width: isActive ? "14px" : "10px",
                    height: isActive ? "14px" : "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    border: "2px solid rgba(255, 255, 255, 0.8)",
                    position: "relative",
                    zIndex: 3,
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Call for Papers Content */}
      <div style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "12rem",
        minHeight: "100vh"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "2rem"
        }} className="page-container">
          
          {/* Left Sidebar */}
          <div style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }} className="page-sidebar">
            
            {/* Important Dates Card */}
            <div style={{
              backgroundColor: "#4a5568",
              borderRadius: "15px",
              padding: "1.5rem",
              color: "white"
            }} className="sidebar-card">
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
                <p style={{ margin: "0.5rem 0" }}>Paper Submission: 31st January, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Notification: 15th February, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Camera Ready: 20th February, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Conference: 15th-18th February, 2026</p>
              </div>
            </div>

            {/* Conference Secretariat Card */}
            <div style={{
              backgroundColor: "#4a5568",
              borderRadius: "15px",
              padding: "1.5rem",
              color: "white"
            }} className="sidebar-card">
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
                CONFERENCE SECRETARIAT
              </div>
              <div style={{
                fontFamily: "Poppins",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                color: "#e2e8f0"
              }}>
                <p style={{ margin: "0.5rem 0" }}>KIET Group of Institutions</p>
                <p style={{ margin: "0.5rem 0" }}>Delhi-NCR, Ghaziabad</p>
                <p style={{ margin: "0.5rem 0" }}>Email: icici2026@kiet.edu</p>
                <p style={{ margin: "0.5rem 0" }}>Phone: +91-120-2844000</p>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "2rem"
          }} className="page-main-content">
            
            {/* Header */}
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{
                fontFamily: "Poppins",
                fontSize: "2.5rem",
                color: "#333",
                margin: "0 0 1rem 0",
                fontWeight: "bold"
              }}>
                CALL FOR PAPERS
              </h1>
              <p style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6",
                margin: "0"
              }}>
                The International Conference on Innovations in Computational Intelligence (ICICI-2026) invites researchers, academicians, industry professionals, and practitioners from across the globe to submit their original and unpublished research papers. The conference will focus on advancements in computational techniques with a particular emphasis on artificial intelligence, machine learning, and other cutting-edge technologies. All the accepted, registered, and presented papers will be sent to IEEE Xplore (Scopus Indexed) for possible inclusion through IEEE CPS.
              </p>
              <br />
              <p style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6",
                margin: "0"
              }}>
                ICICI-2026 offers a platform for the exchange of ideas and dissemination of innovative research across a variety of tracks. Contributors are invited to submit their work under the following broad tracks:
              </p>
            </div>

            {/* Track 1 */}
            <div style={{ marginBottom: "3rem" }}>
              <div style={{
                color: "#4299e1",
                fontSize: "0.9rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                marginBottom: "0.5rem",
                letterSpacing: "1px"
              }}>
                TRACK 1:
              </div>
              <h2 style={{
                fontFamily: "Poppins",
                fontSize: "1.8rem",
                color: "#333",
                margin: "0 0 1rem 0",
                fontWeight: "600"
              }}>
                Artificial Intelligence and Machine Learning
              </h2>
              <p style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "1rem"
              }}>
                This track will focus on the latest developments in AI and machine learning algorithms, methodologies, and applications. Submissions are encouraged in areas such as:
              </p>
              <ul style={{
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                color: "#666",
                lineHeight: "1.8",
                paddingLeft: "1.5rem"
              }}>
                <li>Deep Learning and Neural Networks</li>
                <li>Reinforcement Learning</li>
                <li>AI in Healthcare</li>
                <li>Transfer Learning</li>
                <li>Machine Learning for Autonomous Systems</li>
                <li>Explainable AI</li>
                <li>AI for Natural Language Processing</li>
                <li>Ethical AI and Fairness</li>
                <li>AI in Robotics</li>
                <li>AI for Edge and Cloud Computing</li>
              </ul>
            </div>

            {/* Track 2 */}
            <div style={{ marginBottom: "3rem" }}>
              <div style={{
                color: "#4299e1",
                fontSize: "0.9rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                marginBottom: "0.5rem",
                letterSpacing: "1px"
              }}>
                TRACK 2:
              </div>
              <h2 style={{
                fontFamily: "Poppins",
                fontSize: "1.8rem",
                color: "#333",
                margin: "0 0 1rem 0",
                fontWeight: "600"
              }}>
                Data Science & Big Data Analytics
              </h2>
              <p style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "1rem"
              }}>
                This track focuses on methods and technologies for analyzing large datasets. Submissions are encouraged in areas such as:
              </p>
              <ul style={{
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                color: "#666",
                lineHeight: "1.8",
                paddingLeft: "1.5rem"
              }}>
                <li>Predictive Modeling and Analytics</li>
                <li>Big Data Frameworks and Tools</li>
                <li>Data Visualization and Mining</li>
                <li>Real-time Data Processing</li>
                <li>Statistical Learning Methods</li>
                <li>Data Privacy and Security</li>
                <li>Business Intelligence</li>
                <li>Social Media Analytics</li>
                <li>Healthcare Data Analytics</li>
                <li>Financial Data Analysis</li>
              </ul>
            </div>

            {/* Additional Tracks Info */}
            <div style={{
              backgroundColor: "#f7fafc",
              padding: "1.5rem",
              borderRadius: "10px",
              marginTop: "2rem"
            }}>
              <p style={{
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                color: "#666",
                lineHeight: "1.6",
                margin: "0",
                fontStyle: "italic"
              }}>
                Additional tracks include Internet of Things & Smart Systems, Cybersecurity & Cryptography, Natural Language Processing, Computer Vision, Computational Intelligence, and Interdisciplinary Research. For complete track details and submission guidelines, please visit our conference website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}