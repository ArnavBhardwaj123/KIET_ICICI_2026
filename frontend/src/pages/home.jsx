import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";
// SPEAKERS DATA 🎤
const speakersData = [
  {
    id: 1,
    name: "Dr. [Speaker Name]",
    title: "AI Research Director",
    organization: "Leading Tech Institute",
    image: "/images/speaker_1.png",
    expertise: "Specializing in Artificial Intelligence and Machine Learning research with over 15 years of experience."
  },
  {
    id: 2,
    name: "Prof. [Speaker Name]",
    title: "Data Science Expert",
    organization: "Global University",
    image: "/images/speaker2.png",
    expertise: "Expert in Big Data Analytics and Computational Intelligence with numerous publications."
  },
  {
    id: 3,
    name: "Dr. [Speaker Name]",
    title: "Cybersecurity Specialist",
    organization: "Security Research Lab",
    image: "/images/speaker_3.png",
    expertise: "Leading researcher in Cybersecurity and Cryptography with focus on emerging threats."
  },
  {
    id: 4,
    name: "Prof. [Speaker Name]",
    title: "IoT Innovation Lead",
    organization: "Smart Systems Institute",
    image: "/images/speaker_4.png",
    expertise: "Pioneer in Internet of Things and Smart Systems development and implementation."
  }
];

// SPEAKERS SECTION COMPONENT 🎤
function SpeakersSection() {
  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      paddingTop: "0rem",
      paddingBottom: "2rem",
      paddingLeft: "2rem",  
      paddingRight: "2rem",
      minHeight: "80vh"
    }}>
      {/* Section Header */}
      <div style={{
        textAlign: "center",
        marginBottom: "3rem"
      }}>
        <h1 style={{
          color: "#333",
          fontFamily: "Poppins",
          fontSize: "2.5rem",
          fontWeight: "bold",
          margin: "0 0 1rem 0",
        }}>
          Our Speakers
        </h1>
        <p style={{
          color: "#666",
          fontFamily: "Poppins",
          fontSize: "1.1rem",
          margin: "0"
        }}>
          Meet our distinguished keynote speakers
        </p>
      </div>

      {/* Speakers Grid - 2x2 Layout */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "2rem",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {speakersData.map((speaker) => (
          <div
            key={speaker.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              display: "flex",
              height: "180px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Left - Image */}
            <div style={{
              width: "35%",
              overflow: "hidden"
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

            {/* Right - Info */}
            <div style={{
              width: "65%",
              padding: "1.2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <h3 style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "600",
                margin: "0 0 0.5rem 0"
              }}>
                {speaker.name}
              </h3>
              <p style={{
                color: "#666",
                fontFamily: "Poppins",
                fontSize: "0.9rem",
                fontWeight: "500",
                margin: "0 0 0.3rem 0"
              }}>
                {speaker.title}
              </p>
              <p style={{
                color: "#888",
                fontFamily: "Poppins",
                fontSize: "0.8rem",
                margin: "0 0 0.5rem 0"
              }}>
                {speaker.organization}
              </p>
              <p style={{
                color: "#999",
                fontFamily: "Poppins",
                fontSize: "0.75rem",
                lineHeight: "1.3",
                margin: "0"
              }}>
                {speaker.expertise.substring(0, 80)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// EPIC TRACKS DATA - 8 REVOLUTIONARY TRACKS! 🚀
const tracksData = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    description: "Latest developments in AI and ML algorithms, methodologies, and applications including Deep Learning, Neural Networks, Reinforcement Learning, AI in Healthcare, and Ethical AI.",
    icon: "🤖",
    color: "#4A90E2"
  },
  {
    id: 2,
    title: "Data Science & Big Data Analytics",
    description: "Methods and technologies for analyzing large datasets including Predictive Modeling, Big Data Frameworks, Data Visualization, and Real-time Data Processing.",
    icon: "📊",
    color: "#7ED321"
  },
  {
    id: 3,
    title: "Internet of Things (IoT) & Smart Systems",
    description: "Smart systems and IoT applications across industries including Smart Cities, Industrial IoT, Wearable Technology, and IoT Security.",
    icon: "🌐",
    color: "#F5A623"
  },
  {
    id: 4,
    title: "Cyber-Security & Cryptography",
    description: "Emerging challenges in data security including Cryptography, Intrusion Detection, AI for Cyber-security, Blockchain, and Post-Quantum Cryptography.",
    icon: "🔒",
    color: "#D0021B"
  },
  {
    id: 5,
    title: "Natural Language Processing & Speech Recognition",
    description: "NLP techniques and applications including Language Models, Machine Translation, Speech Recognition, and Conversational AI.",
    icon: "💬",
    color: "#9013FE"
  },
  {
    id: 6,
    title: "Computer Vision & Image Processing",
    description: "Latest research in computer vision including Image Classification, Object Detection, Facial Recognition, and Medical Image Processing.",
    icon: "👁️",
    color: "#50E3C2"
  },
  {
    id: 7,
    title: "Computational Intelligence",
    description: "Advanced computational methods including Neural Networks, Fuzzy Logic, Evolutionary Algorithms, and Bio-Inspired Computing.",
    icon: "🧠",
    color: "#BD10E0"
  },
  {
    id: 8,
    title: "Interdisciplinary Research",
    description: "Cross-disciplinary applications including AI in Healthcare, Computational Social Sciences, AI in Education, and AI Ethics.",
    icon: "🔬",
    color: "#B8E986"
  }
];

// REVOLUTIONARY TRACKS ORBIT COMPONENT! 🌟
function TracksOrbitSection() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [showTrackCard, setShowTrackCard] = useState(false);

  const rotateToNext = () => {
    if (isRotating) return;
    setIsRotating(true);
    setShowTrackCard(false);
    setCurrentTrack((prev) => (prev + 1) % tracksData.length);
    setTimeout(() => {
      setIsRotating(false);
      setShowTrackCard(true);
    }, 800);
  };

  const rotateToPrev = () => {
    if (isRotating) return;
    setIsRotating(true);
    setShowTrackCard(false);
    setCurrentTrack((prev) => (prev - 1 + tracksData.length) % tracksData.length);
    setTimeout(() => {
      setIsRotating(false);
      setShowTrackCard(true);
    }, 800);
  };

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "4rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* LEFT CONTENT - SIMPLIFIED */}
      <div style={{ flex: 1, maxWidth: "500px", paddingRight: "4rem" }}>
        <p style={{
          color: "#4A90E2",
          fontSize: "1.2rem",
          fontFamily: "Poppins",
          fontWeight: "600",
          margin: "0 0 1rem 0",
          letterSpacing: "1px",
        }}>
          SHAPING THE FUTURE WITH IDEAS
        </p>

        <h1 style={{
          color: "#333",
          fontFamily: "Poppins",
          fontSize: "3.5rem",
          fontWeight: "bold",
          lineHeight: "1.1",
          margin: "0 0 2rem 0",
        }}>
          Explore the Frontiers of<br />
          Computational<br />
          Intelligence
        </h1>

        <p style={{
          color: "#666",
          fontFamily: "Poppins",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          margin: "0 0 3rem 0",
        }}>
          Diverse Tracks Showcasing<br />
          Cutting-Edge Research<br />
          and Innovation
        </p>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          <div style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#4A90E2",
            fontFamily: "Poppins"
          }}>
            08
          </div>
          <div>
            <p style={{
              color: "#666",
              fontFamily: "Poppins",
              fontSize: "1.1rem",
              fontWeight: "600",
              margin: 0,
              lineHeight: "1.2"
            }}>
              TRACKS TO<br />
              TRANSFORM THE<br />
              WORLD
            </p>
          </div>
        </div>

        {/* NAVIGATION BUTTONS MOVED HERE */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem"
        }}>
          <button
            onClick={rotateToPrev}
            disabled={isRotating}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "2px solid #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: isRotating ? "not-allowed" : "pointer",
              fontSize: "1.5rem",
              color: "#666",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              opacity: isRotating ? 0.5 : 1
            }}
          >
            ↑
          </button>

          <div style={{
            color: "#666",
            fontFamily: "Poppins",
            fontSize: "0.9rem",
            textAlign: "center"
          }}>
            Track {currentTrack + 1}:<br />
            <strong>{tracksData[currentTrack].title}</strong>
          </div>

          <button
            onClick={rotateToNext}
            disabled={isRotating}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "2px solid #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: isRotating ? "not-allowed" : "pointer",
              fontSize: "1.5rem",
              color: "#666",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              opacity: isRotating ? 0.5 : 1
            }}
          >
            ↓
          </button>
        </div>

        <p style={{
          color: "#999",
          fontFamily: "Poppins",
          fontSize: "0.9rem",
          margin: 0
        }}>
          Select the track you want to explore by<br />
          clicking on the arrows
        </p>
      </div>

      {/* RIGHT SIDE - HALF CIRCLE ATTACHED TO RIGHT EDGE! */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
      }}>

        {/* HALF CIRCLE PATH ATTACHED TO RIGHT EDGE */}
        <div style={{
          position: "relative",
          width: "400px",
          height: "400px",
          border: "3px solid rgba(0,0,0,0.2)",
          borderRadius: "50%",
          borderRight: "none", // Remove right border to attach to edge
          marginRight: "-200px", // Push half of it off screen
          transform: `rotate(${currentTrack * 45}deg)`,
          transition: isRotating ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
        }}>

          {/* TRACK CIRCLE THAT APPEARS ON PATH */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: tracksData[currentTrack].color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            border: "4px solid white",
            transform: `translate(-50%, -50%) rotate(${-currentTrack * 45}deg)`,
            transition: isRotating ? "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "all 0.3s ease",
            zIndex: 10,
            animation: showTrackCard ? "trackCircleAppear 0.6s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
          }}>
            {tracksData[currentTrack].icon}
          </div>

          {/* PATH DOTS */}
          <div style={{
            position: "absolute",
            top: "-6px",
            left: "50%",
            transform: `translateX(-50%) rotate(${-currentTrack * 45}deg)`,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#666",
            transition: isRotating ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
          }} />

          <div style={{
            position: "absolute",
            bottom: "-6px",
            left: "50%",
            transform: `translateX(-50%) rotate(${-currentTrack * 45}deg)`,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#666",
            transition: isRotating ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
          }} />

          <div style={{
            position: "absolute",
            top: "50%",
            left: "-6px",
            transform: `translateY(-50%) rotate(${-currentTrack * 45}deg)`,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#666",
            transition: isRotating ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
          }} />
        </div>

        {/* TRACK INFO CARD - SLIDES IN FROM RIGHT */}
        {showTrackCard && (
          <div style={{
            position: "absolute",
            right: "220px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "15px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            maxWidth: "280px",
            zIndex: 20,
            animation: "slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            border: `3px solid ${tracksData[currentTrack].color}`
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: tracksData[currentTrack].color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem"
              }}>
                {tracksData[currentTrack].icon}
              </div>
              <div>
                <p style={{
                  color: tracksData[currentTrack].color,
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  margin: 0
                }}>
                  Track {currentTrack + 1}:
                </p>
                <h3 style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  margin: 0,
                  lineHeight: "1.2"
                }}>
                  {tracksData[currentTrack].title}
                </h3>
              </div>
            </div>
            <p style={{
              color: "#666",
              fontFamily: "Poppins",
              fontSize: "0.85rem",
              lineHeight: "1.4",
              margin: 0
            }}>
              {tracksData[currentTrack].description.substring(0, 120)}...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Slider data - Only background images change, content stays the same
  const slides = [
    {
      id: 1,
      backgroundImage: heroimage, // You can replace this with your first image
    },
    {
      id: 2,
      backgroundImage: heroimage, // You can replace this with your second image
    },
    {
      id: 3,
      backgroundImage: heroimage, // You can replace this with your third image
    },
    {
      id: 4,
      backgroundImage: heroimage, // You can replace this with your fourth image
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
          return prev + 2; // Increase by 2% every 100ms (5000ms / 50 steps = 100ms per step)
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
      <Navbar />
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
              Shaping the Future of<br />
              Intelligent<br />
              Computing
            </h1>
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
            paddingRight: "5rem",
            paddingTop: "10rem",
            paddingLeft: "2rem",
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
              <div>Join global experts, researchers, and innovators</div>
              <div>for four days of groundbreaking research,</div>
              <div>collaboration, and learning.</div>
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

          {/* Content - Same text for all slides, only background changes */}
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
                  15th - 18th February, 2026
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
                Exploring The Future Of Computing
                <br />
                And Technology
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

            {/* Progress Line that moves along the connecting line */}
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
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* You can add other sections here */}
      <div
        style={{
          backgroundColor: "white",
          paddingTop: "12rem",
          paddingBottom: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
        className="responsive-row"
      >
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >
            Innovate. Collaborate. Lead.
          </p>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            About the Conference
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "1.2rem",
              marginTop: "1rem",
              color: "#555",
            }}
          >
            Exploring the future of computing and technology
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            The International Conference on Innovations in Computational Intelligence (ICICI-2026), organized by KIET Group of Institutions, Delhi NCR, Ghaziabad, India is a prestigious academic event scheduled for April 24-25, 2026. This international conference aims to provide a global platform for researchers, academicians, industry professionals, and students to present and discuss their innovative ideas and cutting-edge research in the rapidly evolving fields of computational techniques, artificial intelligence, and machine learning.
          </p>
        </div>

        {/* Right Column: Image */}
        <div style={{ flex: 1 }}>
          <img
            src={"/images/IMG1.jpg"} // Replace with your image path
            alt="Conference collaboration"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "4rem 2rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
        className="responsive-row"
      >
        <div style={{ flex: 1 }}>
          <img
            src={"/images/IMG2.jpg"} // Replace with your image path
            alt="Conference collaboration"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >
            Innovate. Collaborate. Lead.
          </p>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            About the Conference
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "1.2rem",
              marginTop: "1rem",
              color: "#555",
            }}
          >
            Exploring the future of computing and technology
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            ICICI-2026 is dedicated to exploring the latest trends and developments in computational sciences, with a special focus on AI, machine learning, data science, and other emerging technologies. The conference will cover a wide range of topics, including deep learning, natural language processing, computer vision, big data analytics, IoT, Cyber Security, and AI applications across various industries. By providing an interdisciplinary platform, ICICI-2026 aims to bring together thought leaders from academia and industry to share their insights and foster collaboration.
          </p>
        </div>
      </div>

      {/* New Section with Video */}
      <div
        className="video-section responsive-row"
        style={{
          backgroundColor: "white",
          padding: "4rem 7rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >
            Innovate. Collaborate. Lead.
          </p>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            About the Conference
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            A key highlight of the conference will be the keynote addresses delivered by globally recognized experts in artificial intelligence and computational techniques. These keynote sessions will offer attendees a unique opportunity to gain valuable perspectives on the latest advancements and future directions in AI and machine learning. In addition to the keynote addresses, ICICI-2026 will feature technical paper presentations, panel discussions, and interactive workshops designed to provide hands-on experience in areas like deep learning, AI-driven decision-making, and big data analytics.
          </p>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: "navy",
                color: "white",
                border: "none",
                borderRadius: "50px",
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "2rem",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Column: Video and SVG */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <video
            src={"path/to/your/video.mp4"} // Replace with your video path
            controls
            style={{ width: "100%", height: "50vh", borderRadius: "8px" }}
          >
            Your browser does not support the video tag.
          </video>
          {/* svg */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "8px",
              marginTop: "16px",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
            }}
          >
            <svg width="10%" height="10">
              <rect
                x="0"
                y="0"
                width="100%"
                height="10"
                rx="5"
                ry="5"
                fill="navy"
              />
            </svg>
            <svg width="3%" height="10">
              <rect
                x="0"
                y="0"
                width="100%"
                height="10"
                rx="5"
                ry="5"
                fill="#e0e0e0"
              />
            </svg>
            <svg width="3%" height="10">
              <rect
                x="0"
                y="0"
                width="100%"
                height="10"
                rx="5"
                ry="5"
                fill="#e0e0e0"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* REVOLUTIONARY ROTATING TRACKS SECTION */}
      <TracksOrbitSection />

 
     
      {/* Speakers Section */}
      <SpeakersSection />
      
      <Footer />
    </div>
  );
}