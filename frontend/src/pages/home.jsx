import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../App.css";
import PremiumLoader from "../components/PremiumLoader";

const heroimage = "/images/KIET1.jpg";

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
    title: "Cyber-Security & Cry-ptography",
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
    icon: "👁",
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

// RESEARCH TRACKS CAROUSEL COMPONENT
function ResearchTracksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const researchTracks = [
    { name: "Artificial Intelligence", role: "AI & ML", icon: "🤖", image: "/images/AI.jpg", color: "#4A90E2" },
    { name: "Data Science", role: "Big Data Analytics", icon: "📊", image: "/images/Data-science.jpg", color: "#7ED321" },
    { name: "Internet of Things", role: "IoT & Smart Systems", icon: "🌐", image: "/images/IOT.jpg", color: "#F5A623" },
    { name: "Cybersecurity", role: "Cryptography", icon: "🔒", image: "/images/Cyber-security.jpg", color: "#D0021B" },
    { name: "Natural Language", role: "NLP & Speech", icon: "💬", image: "/images/Natural.jpg", color: "#9013FE" },
    { name: "Computer Vision", role: "Image Processing", icon: "👁️", image: "/images/Computervision.jpg", color: "#50E3C2" },
    { name: "Interdisciplinary Research", role: "Distributed Tech", icon: "⛓️", image: "/images/Research.jpg", color: "#F8E71C" },
    { name: "Computational Intelligence", role: "Emerging Tech", icon: "⚛️", image: "/images/Intelligence.jpg", color: "#BD10E0" }
  ];

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + researchTracks.length) % researchTracks.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const getCardPosition = (index) => {
    const offset = (index - currentIndex + researchTracks.length) % researchTracks.length;
    if (offset === 0) return "center";
    if (offset === 1) return "right-1";
    if (offset === 2) return "right-2";
    if (offset === researchTracks.length - 1) return "left-1";
    if (offset === researchTracks.length - 2) return "left-2";
    return "hidden";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div style={{
      // minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      overflow: "hidden",
      padding: "2rem 1rem",
      position: "relative"
    }}>
      {/* Title */}
      <h1 style={{
        position: "absolute",
        top: "1.5rem",
        fontSize: "clamp(3rem, 8vw, 6rem)",
        fontFamily: "Poppins",
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        backgroundImage: "linear-gradient(to bottom, rgba(8, 42, 123, 0.35) 30%, rgba(255, 255, 255, 0) 76%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        textAlign: "center"
      }}
      className="research-tracks-title">
        RESEARCH TRACKS
      </h1>

      {/* Carousel Container */}
      <div style={{
        width: "100%",
        maxWidth: "80rem",
        height: "24rem",
        position: "relative",
        marginTop: "6rem"
      }} className="carousel-perspective carousel-container-spacing">
        {/* Navigation Arrows */}
        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          style={{
            position: "absolute",
            left: "clamp(0.5rem, 2vw, 1.25rem)",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            backgroundColor: "rgba(8, 42, 123, 0.7)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
            outline: "none"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#000";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(8, 42, 123, 0.7)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          style={{
            position: "absolute",
            right: "clamp(0.5rem, 2vw, 1.25rem)",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            backgroundColor: "rgba(8, 42, 123, 0.7)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
            outline: "none"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#000";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(8, 42, 123, 0.7)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <FaChevronRight size={20} />
        </button>

        {/* Cards */}
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}>
          {researchTracks.map((track, i) => {
            const position = getCardPosition(i);
            const isCenter = position === "center";
            
            let transformStyle = {};
            let zIndex = 1;
            let opacity = 0;
            let pointerEvents = "none";

            if (position === "center") {
              transformStyle = { transform: "translateX(0) scale(1.1)", zIndex: 10, opacity: 1 };
              zIndex = 10;
              opacity = 1;
              pointerEvents = "auto";
            } else if (position === "left-1") {
              transformStyle = { transform: "translateX(-12rem) scale(0.9)", zIndex: 5, opacity: 0.9 };
              zIndex = 5;
              opacity = 0.9;
              pointerEvents = "auto";
            } else if (position === "left-2") {
              transformStyle = { transform: "translateX(-24rem) scale(0.8)", zIndex: 1, opacity: 0.7 };
              zIndex = 1;
              opacity = 0.7;
              pointerEvents = "auto";
            } else if (position === "right-1") {
              transformStyle = { transform: "translateX(12rem) scale(0.9)", zIndex: 5, opacity: 0.9 };
              zIndex = 5;
              opacity = 0.9;
              pointerEvents = "auto";
            } else if (position === "right-2") {
              transformStyle = { transform: "translateX(24rem) scale(0.8)", zIndex: 1, opacity: 0.7 };
              zIndex = 1;
              opacity = 0.7;
              pointerEvents = "auto";
            }

            return (
              <div
                key={i}
                onClick={() => updateCarousel(i)}
                className="track-card"
                style={{
                  position: "absolute",
                  width: "14rem",
                  height: "20rem",
                  backgroundColor: "white",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: track.image ? "flex-end" : "center",
                  padding: track.image ? "0" : "1.5rem",
                  ...transformStyle,
                  zIndex,
                  opacity,
                  pointerEvents,
                  filter: isCenter ? "grayscale(0%)" : "grayscale(80%)"
                }}
              >
                {track.image ? (
                  <>
                    {/* Image taking top half */}
                    <div style={{
                      width: "100%",
                      height: "50%",
                      backgroundImage: `url(${track.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}></div>
                    {/* Content area taking bottom half */}
                    <div style={{
                      width: "100%",
                      height: "50%",
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white"
                    }}>
                      <h3 style={{
                        fontFamily: "Poppins",
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        color: "#082A7B",
                        marginBottom: "0.5rem",
                        textAlign: "center"
                      }}>
                        {track.name}
                      </h3>
                      <p style={{
                        fontFamily: "Poppins",
                        fontSize: "0.85rem",
                        color: "#666",
                        textAlign: "center",
                        opacity: 0.8
                      }}>
                        {track.role}
                      </p>
                      <div style={{
                        width: "3rem",
                        height: "0.25rem",
                        backgroundColor: track.color,
                        marginTop: "0.75rem",
                        borderRadius: "0.125rem"
                      }}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{
                      fontSize: "4rem",
                      marginBottom: "1rem",
                      transition: "transform 0.3s"
                    }}>
                      {track.icon}
                    </div>
                    <h3 style={{
                      fontFamily: "Poppins",
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: "#082A7B",
                      marginBottom: "0.5rem",
                      textAlign: "center"
                    }}>
                      {track.name}
                    </h3>
                    <p style={{
                      fontFamily: "Poppins",
                      fontSize: "0.85rem",
                      color: "#666",
                      textAlign: "center",
                      opacity: 0.8
                    }}>
                      {track.role}
                    </p>
                    <div style={{
                      width: "3rem",
                      height: "0.25rem",
                      backgroundColor: track.color,
                      marginTop: "1rem",
                      borderRadius: "0.125rem"
                    }}></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Track Info */}
      <div style={{
        textAlign: "center",
        marginTop: "2rem",
        transition: "all 0.5s"
      }}>
        <h2 style={{
          fontFamily: "Poppins",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "700",
          color: "#082A7B",
          marginBottom: "0.5rem",
          position: "relative",
          display: "inline-block"
        }}>
          {researchTracks[currentIndex].name}
        </h2>
        <p style={{
          fontFamily: "Poppins",
          fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
          color: "#666",
          fontWeight: "500",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginTop: "0.5rem",
          opacity: 0.8
        }}>
          {researchTracks[currentIndex].role}
        </p>
      </div>

      {/* Dots */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.75rem",
        marginTop: "1.5rem",
        flexWrap: "wrap"
      }}>
        {researchTracks.map((_, i) => (
          <button
            key={i}
            onClick={() => updateCarousel(i)}
            style={{
              width: "0.75rem",
              height: "0.75rem",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              transition: "all 0.3s",
              cursor: "pointer",
              border: "none",
              backgroundColor: i === currentIndex ? "#082A7B" : "rgba(8, 42, 123, 0.2)",
              transform: i === currentIndex ? "scale(1.25)" : "scale(1)",
              padding: 0,
              flexShrink: 0
            }}
          />
        ))}
      </div>
    </div>
  );
}

//TRACKS SECTION COMPONENT!
// Old TracksSection removed - replaced with ResearchTracksCarousel

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  // Show the premium loader on first mount for a short splash
  const [showLoader, setShowLoader] = useState(true);
  const [kietImageSlide, setKietImageSlide] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(t);
  }, []);

  // Auto-slide for KIET images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKietImageSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Fullscreen overlay for the premium loader */}
      {showLoader && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg,#7c3aed 0%,#6d28d9 50%,#4f46e5 100%)',
          pointerEvents: 'auto'
        }}>
          <PremiumLoader />
        </div>
      )}
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
            {/* Join global experts - visible on mobile only */}
            <div
              className="mobile-only-text"
              style={{
                color: "#666",
                fontFamily: "Poppins",
                fontSize: "1.1rem",
                fontWeight: "700",
                lineHeight: "1.7",
                margin: "0 0 1.5rem 0",
                textAlign: "left",
              }}
            >
              <div>Join global experts, researchers, and innovators</div>
              <div>for groundbreaking research, collaboration,</div>
              <div>and learning.</div>
            </div>
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
              Intelligent Computing
            </h1>
          </div>

          {/* Right Content - visible on desktop only */}
          <div className="desktop-only-text" style={{
            position: "absolute",
            right: 0,
            flex: 1,
            maxWidth: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingRight: "5rem",
            paddingTop: "4rem",
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
              <div>for groundbreaking research, collaboration,</div>
              <div>and learning.</div>
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
                  24th - 25th April, 2026
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
          paddingTop: "6rem",
          paddingBottom: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          display: "flex",
          alignItems: "flex",
          gap: "2rem",
        }}
        className="responsive-row"
      >
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "justify" }}>

          {/* Moved: About Conference content into the first slot (below Innovate) */}
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
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "1rem",
              color: "#555",
            }}
          >
            International Conference on Innovations in Computational Intelligence (ICICI–2026)
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            The International Conference on Innovations in Computational Intelligence (ICICI-2026), organized by KIET Group of Institutions, Delhi-NCR, Ghaziabad, India, will be held on April 24–25, 2026. This prestigious event aims to bring together researchers, academicians, industry professionals, and students to share innovative ideas and research in artificial intelligence, machine learning, and computational intelligence. The conference will feature keynote sessions by global experts, technical paper presentations, panel discussions, and hands-on workshops covering emerging areas such as deep learning, NLP, computer vision, big data analytics, IoT, and cyber security. ICICI-2026 provides a global platform to explore advancements, foster collaboration, and inspire innovation in the rapidly evolving world of AI and computational sciences.</p>

        </div>

        {/* Right Column: Image */}
        <div style={{ flex: 1, alignSelf: 'flex-start' }}>
          <img
            src={"/images/ABOUT-CONFERENCE.JPG"} // Replace with your image path
            alt="Conference collaboration"
            style={{ width: "100%", height: "50vh", objectFit: "cover", borderRadius: "8px", marginTop: '3.5rem' }}
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
        <div style={{ flex: 1 }} className="about-section-image">
          <img
            src={"/images/EXPLORING-ICICI_2026.JPG"} // Replace with your image path
            alt="Conference collaboration"
            style={{ width: "100%", height: "50vh", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "justify" }} className="about-section-text">
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >

          </p>
          {/* Moved: Exploring ICICI content into the second slot */}
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            Exploring ICICI–2026
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "1.2rem",
              marginTop: "1rem",
              color: "#555",
            }}
          >
            ICICI-2026 is not just an academic conference but a vibrant platform for networking, collaboration, and knowledge exchange.

          </p>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            ICICI-2026 brings together researchers, academicians, industry professionals, and students to explore emerging trends and practical applications in AI and computational intelligence. The event encourages meaningful discussions, fosters research partnerships, and provides valuable insights into the future of AI, machine learning, and intelligent systems.
          </p>
          <br></br>
          <div style={{
            backgroundColor: '#f0edffff',
            color: '#1f2937',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: '1px solid #ffedd5',
            maxWidth: '900px',
            textAlign: 'left',
            fontFamily: 'Poppins',
            fontSize: '1rem',
            fontWeight: 600
          }}>
            All the accepted, registered, and presented papers will be submitted to IEEE Xplore (Scopus Indexed) through IEEE Computational Intelligence Society (CIS) for possible inclusion.
          </div>
        </div>
      </div>

      {/* New Section with Video */}
      <div
        className="video-section responsive-row"
        style={{
          backgroundColor: "white",
          paddingTop: "4rem",
          paddingBottom: "0rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "justify" }}>
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >
          </p>
          {/* Moved: About KIET content into the third slot (above the indexing box) */}
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            About KIET Group of Institutions

          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "1rem",
              color: "#555",
            }}
          >
            Exploring the Future of Computing and Technology        </p>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            KIET Group of Institutions, established in 1998 by the Krishna Charitable Society, is recognized as one of the leading engineering colleges in Delhi-NCR and a pioneer in the field of technical education. Beginning with just 180 students, the institute has grown remarkably to a strength of over 7,500 students, supported by a vibrant alumni network of 20,000+ professionals across the globe. Guided by its vision of skill-oriented and value-based education, KIET focuses on nurturing young minds to become competent and responsible professionals. The institute’s commitment to innovation, academic excellence, and holistic development has earned it numerous Education Excellence Awards and a distinct reputation among technical institutions in Uttar Pradesh. Accredited by NAAC with Grade ‘A+’, and with several programs including CSE, CSIT, CS, ECE, EEE, IT, ME, CE, MCA, MBA, and Pharmacy accredited by NBA, KIET continues to uphold its legacy of “Achieving High” through quality education, strong industry connect, and outstanding placement records. </p>


        </div>


        {/* Right Column: Image Slider */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Image Slider Container */}
          <div className="image-slider-height" style={{ position: 'relative', width: '100%', height: '50vh', borderRadius: '8px', overflow: 'hidden' }}>
            {/* First Image */}
            <img
              src={"/images/ABOUT-KIET-1.jpg"}
              alt="About KIET - Image 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: kietImageSlide === 0 ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            />
            {/* Second Image */}
            <img
              src={"/images/ABOUT-KIET.JPG"}
              alt="About KIET - Image 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: kietImageSlide === 1 ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            />
            {/* Navigation Dots */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px',
              zIndex: 10
            }}>
              <div
                onClick={() => setKietImageSlide(0)}
                style={{
                  width: kietImageSlide === 0 ? '12px' : '10px',
                  height: kietImageSlide === 0 ? '12px' : '10px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}
              />
              <div
                onClick={() => setKietImageSlide(1)}
                style={{
                  width: kietImageSlide === 1 ? '12px' : '10px',
                  height: kietImageSlide === 1 ? '12px' : '10px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </div>
          {/* Indexing note - highlighted and centered */}
          <div style={{
            marginTop: '1rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>

          </div>

          {/* svg */}
          {/* <div
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
          </div> */}
        </div>
      </div>

      {/* RESEARCH TRACKS CAROUSEL */}
      <ResearchTracksCarousel />



    </div>
  );
}