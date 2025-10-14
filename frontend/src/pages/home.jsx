import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
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

//TRACKS ORBIT COMPONENT!
function TracksOrbitSection() {
  const [activeTrack, setActiveTrack] = useState(0);
  const orbitRadius = 250; // Radius of the orbit in pixels

  const handleTrackClick = (index) => {
    setActiveTrack(index);
  };

  // Calculate position for each track node on the orbit
  // src/pages/home.jsx -> Inside TracksOrbitSection function

  // Calculate position for each track node on the orbit
  const getPosition = (index) => {
    const angle = (index / tracksData.length) * 2 * Math.PI - Math.PI / 2; // Start from top
    const x = orbitRadius * Math.cos(angle);
    const y = orbitRadius * Math.sin(angle);
    // Use CSS custom properties (variables) to set the position
    return {
      '--x-pos': `${x}px`,
      '--y-pos': `${y}px`,
    };
  };

  return (
    <div className="tracks-section">
      {/* Left Content */}
      <div className="tracks-left-content">
        <p className="tracks-kicker">SHAPING THE FUTURE WITH IDEAS</p>
        <h1 className="tracks-title">
          Explore the Frontiers of
          <br />
          Computational
          <br />
          Intelligence
        </h1>
        <p className="tracks-subtitle">
          Diverse Tracks Showcasing Cutting-Edge Research and Innovation
        </p>

        <div className="tracks-info-box">
          <div className="tracks-count-container">
            <div className="tracks-count">08</div>
            <p className="tracks-count-text">
              TRACKS TO
              <br />
              TRANSFORM THE
              <br />
              WORLD
            </p>
          </div>
          <div className="active-track-info">
            <h3>{tracksData[activeTrack].title}</h3>
            <p>Select the track you want to explore by clicking on the icons.</p>
          </div>
        </div>
      </div>

      {/* Right Content - The Orbit */}
      <div className="tracks-right-content">
        <div className="orbit-container">
          {/* Central Hub with Image */}
          <div className="central-hub">
            <img
              src="/images/robotic-hand.png" // IMPORTANT: Add your robotic hand image here
              alt="Computational Intelligence"
              className="central-hub-image"
            />
          </div>

          {/* Dotted line for the orbit path */}
          <div className="orbit-path"></div>

          {/* Track Nodes */}
          {tracksData.map((track, index) => (
            <div
              key={track.id}
              className={`track-node ${activeTrack === index ? "active" : ""}`}
              style={getPosition(index)}
              onClick={() => handleTrackClick(index)}
            >
              <div className="track-node-icon" style={{ backgroundColor: track.color }}>
                {track.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  // Show the premium loader on first mount for a short splash
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(t);
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
          paddingTop: "12rem",
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
            Exploring the Future of Computing and Technology
          </p>
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

        {/* Right Column: Image */}
        <div style={{ flex: 1, alignSelf: 'flex-start' }}>
          <img
            src={"/images/IMG1.jpg"} // Replace with your image path
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
            src={"/images/IMG2.jpg"} // Replace with your image path
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
      </div>

      {/* New Section with Video */}
      <div
        className="video-section responsive-row"
        style={{
          backgroundColor: "white",
          padding: "4rem 2rem",
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
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "1.7rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            Exploring ICICI–2026

          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            ICICI-2026 is not just an academic conference but a vibrant platform for networking, collaboration, and knowledge exchange. It brings together researchers, academicians, industry professionals, and students to explore emerging trends and practical applications in AI and computational intelligence. The event encourages meaningful discussions, fosters research partnerships, and provides valuable insights into the future of AI, machine learning, and intelligent systems, making it a must-attend gathering for innovators and technology enthusiasts worldwide .
          </p>
          <br></br>
           <div style={{
              backgroundColor: '#f0edffff',
              color: '#1f2937',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #ffedd5',
              maxWidth: '900px',
              textAlign: 'justify',
              fontFamily: 'Poppins',
              fontSize: '1rem',
              fontWeight: 600
            }}>
            All the accepted, registered, and presented papers will be submitted to IEEE Xplore (Scopus Indexed) through IEEE Computational Intelligence Society (CIS) for possible inclusion.
            </div>
          
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
          <img
            src={"/images/IMG2.jpg"} // Replace with the image you want to use in place of the video
            alt="Exploring ICICI-2026"
            style={{ width: "100%", height: "50vh", objectFit: "cover", borderRadius: "8px" }}
          />
          {/* Indexing note - highlighted and centered */}
          <div style={{
            marginTop: '1rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
           
          </div>

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



    </div>
  );
}