import { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

// SPEAKERS DATA
const speakersData = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    title: "AI Research Director",
    organization: "Indian Institute of Technology, Delhi",
    image: "/images/speaker_1.png",
    expertise: "Artificial Intelligence and Machine Learning"
  },
  {
    id: 2,
    name: "Prof. Priya Sharma",
    title: "Data Science Expert",
    organization: "Stanford University, USA",
    image: "/images/speaker2.png",
    expertise: "Big Data Analytics and Computational Intelligence"
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    title: "Cybersecurity Specialist",
    organization: "MIT, USA",
    image: "/images/speaker_3.png",
    expertise: "Cybersecurity and Cryptography"
  },
  {
    id: 4,
    name: "Prof. Sarah Johnson",
    title: "IoT Innovation Lead",
    organization: "Oxford University, UK",
    image: "/images/speaker_4.png",
    expertise: "Internet of Things and Smart Systems"
  },
  {
    id: 5,
    name: "Dr. Ahmed Hassan",
    title: "Blockchain Expert",
    organization: "University of Toronto, Canada",
    image: "/images/speaker_1.png",
    expertise: "Blockchain Technology and Distributed Systems"
  },
  {
    id: 6,
    name: "Prof. Lisa Wang",
    title: "Computer Vision Researcher",
    organization: "Carnegie Mellon University, USA",
    image: "/images/speaker2.png",
    expertise: "Computer Vision and Image Processing"
  }
];

export default function Speakers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Slider data - Same as other pages
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
    },
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
      <div className="hero-section" style={{ width: "100%", height: "100vh" }}>
        
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
              ICICI 2026
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
              Keynote Speakers
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
              Learn From Leading Experts and Researchers
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
              <div>Join us to hear from distinguished speakers sharing</div>
              <div>cutting-edge research and insights from leading</div>
              <div>institutions worldwide.</div>
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
                  Conference Date: April 24-25, 2026
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
                Learn From The Best<br />
                Minds In Technology
              </h2>
            </div>
          </div>

          {/* Progress Points/Indicators */}
          <div className="progress-indicators">
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

      {/* Speakers Content - blue overlay background behind the details (not footer) */}
      <div style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
        padding: "4rem 2rem",
        minHeight: "100vh",
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Full-area overlay that sits above all speakers content (not footer) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 900, // below navbar (which uses 1000)
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          pointerEvents: 'none' // don't block interactions
        }}>
          <div style={{
            fontFamily: 'Poppins',
            fontSize: '2.25rem',
            fontWeight: 900,
            color: '#000',
            textAlign: 'center',
            padding: '0.5rem 1rem',
            // background: 'rgba(255,255,255,0.9)',
            borderRadius: '8px',
            // boxShadow: '0 6px 18px rgba(2,6,23,0.08)'
          }}>
            Soon to be updated
          </div>
        </div>

        <div className="responsive-row" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* Left Sidebar */}
          <div className="sidebar" style={{ width: "300px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            
            {/* Important Dates Card */}
            <div style={{
              backgroundColor: "#4a5568",
              borderRadius: "15px",
              padding: "1.5rem",
              color: "white",
              position: 'relative',
              zIndex: 910
              
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
              color: "white",
              position: 'relative',
              zIndex: 910
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
          <div style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "2rem"
          }}>
            
            {/* Header */}
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{
                fontFamily: "Poppins",
                fontSize: "2.5rem",
                color: "#333",
                margin: "0 0 1rem 0",
                fontWeight: "bold"
              }}>
                KEYNOTE SPEAKERS
              </h1>
              <p style={{
                fontFamily: "Poppins",
                fontSize: "1.1rem",
                color: "#666",
                lineHeight: "1.6",
                margin: "0"
              }}>
                We are honored to have distinguished speakers from leading institutions around the world who will share their expertise and insights in various domains of computational intelligence.
              </p>
            </div>

            {/* Speakers Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              marginTop: "2rem"
            }}>
              
              {speakersData.map((speaker) => (
                <div
                  key={speaker.id}
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    textAlign: "center",
                    border: "1px solid #e9ecef",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                  }}
                >
                  {/* Speaker Image */}
                  <div style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 1rem auto",
                    border: "3px solid #05B8A8"
                  }}>
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  
                  <h3 style={{
                    fontFamily: "Poppins",
                    fontSize: "1.3rem",
                    color: "#333",
                    margin: "0 0 0.5rem 0",
                    fontWeight: "600"
                  }}>
                    {speaker.name}
                  </h3>
                  <p style={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "#05B8A8",
                    margin: "0 0 0.5rem 0",
                    fontWeight: "500"
                  }}>
                    {speaker.title}
                  </p>
                  <p style={{
                    fontFamily: "Poppins",
                    fontSize: "0.9rem",
                    color: "#666",
                    margin: "0 0 1rem 0"
                  }}>
                    {speaker.organization}
                  </p>
                  <p style={{
                    fontFamily: "Poppins",
                    fontSize: "0.85rem",
                    color: "#555",
                    lineHeight: "1.5"
                  }}>
                    <strong>Expertise:</strong> {speaker.expertise}
                  </p>
                </div>
              ))}

            </div>

            {/* Additional Information */}
            <div style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "12px",
              padding: "1.5rem",
              marginTop: "2rem",
              border: "1px solid #e2e8f0"
            }}>
              <h3 style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "1.3rem",
                fontWeight: "600",
                margin: "0 0 1rem 0"
              }}>
                Session Information
              </h3>
              <p style={{
                color: "#666",
                fontFamily: "Poppins",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                margin: "0"
              }}>
                Each keynote session will be approximately 45 minutes long, including a 35-minute presentation followed by a 10-minute Q&A session. 
                Sessions will be held in the main auditorium and will also be available via live streaming for remote participants. 
                All registered attendees will have access to session recordings for 30 days after the conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}