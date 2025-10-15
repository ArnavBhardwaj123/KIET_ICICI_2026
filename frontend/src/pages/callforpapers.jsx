import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp, FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

// Tracks Data Structure
const tracksData = [
  {
    title: "Track 1: Artificial Intelligence and Machine Learning",
    description: "This track will focus on the latest developments in AI and machine learning algorithms, methodologies, and applications.",
    topics: [
      "Deep Learning and Neural Networks",
      "Reinforcement Learning",
      "AI in Healthcare",
      "Transfer Learning",
      "Machine Learning for Autonomous Systems",
      "Explainable AI",
      "AI for Natural Language Processing",
      "Ethical AI and Fairness",
      "AI in Robotics",
      "AI for Edge and Cloud Computing",
    ],
  },
  {
    title: "Track 2: Data Science and Big Data Analytics",
    description: "This track explores methods and technologies that help analyze, manage, and extract insights from large datasets. Relevant topics include:",
    topics: [
        "Predictive Modeling",
        "Big Data Frameworks and Platforms (Hadoop, Spark)",
        "Data Visualization Techniques",
        "Data Mining and Knowledge Discovery",
        "Big Data in Healthcare",
        "Real-time Data Processing",
        "Sentiment Analysis and Opinion Mining",
        "Data Cleaning and Preprocessing",
        "Data Privacy and Security in Big Data",
        "Machine Learning on Large-scale Data",
    ],
  },
  {
    title: "Track 3: Internet of Things (IoT) and Smart Systems",
    description: "With the increasing integration of IoT in everyday life, this track will focus on smart systems and IoT applications across various industries.",
    topics: [
        "IoT Architectures and Frameworks",
        "Smart Cities and Infrastructure",
        "Edge Computing and IoT",
        "Sensor Networks and Data Management",
        "IoT for Healthcare and Wearables",
        "Industrial IoT Applications",
        "Security in IoT Networks",
        "AI in IoT Systems",
        "Smart Agriculture and Environment Monitoring",
        "Connected Vehicles and Autonomous Systems",
    ],
  },
  {
    title: "Track 4: Cyber-security and Cryptography",
    description: "This track will address the emerging challenges and techniques in ensuring data security, privacy, and integrity in modern computational environments.",
    topics: [
        "Cryptography and Encryption Techniques",
        "Intrusion Detection and Prevention Systems",
        "AI and Machine Learning for Cyber-security",
        "Block-chain and Distributed Ledger Technologies",
        "Security in Cloud Computing",
        "Cyber-security in IoT Systems",
        "Threat Modeling and Risk Analysis",
        "Post-Quantum Cryptography",
        "Secure Software Development Lifecycle (SSDLC)",
        "Cyber-Physical System Security",
    ],
  },
  {
    title: "Track 5: Natural Language Processing (NLP) and Speech Recognition",
    description: "This track focuses on techniques and applications related to NLP, speech processing, and human-computer interaction.",
    topics: [
        "Language Models and Transformers",
        "Machine Translation",
        "Text Summarization and Sentiment Analysis",
        "Speech Recognition and Synthesis",
        "Information Retrieval and Extraction",
        "AI in Conversational Agents and Chat-bots",
        "Multimodal Language Processing",
        "Low-Resource Language Processing",
        "NLP for Healthcare and Social Media",
        "Ethics in NLP",
    ],
  },
    {
    title: "Track 6: Computer Vision and Image Processing",
    description: "This track will highlight the latest research in computer vision, image processing, and related AI applications in visual data.",
    topics: [
        "Image Classification and Segmentation",
        "Object Detection and Tracking",
        "Facial Recognition Systems",
        "Deep Learning for Computer Vision",
        "3D Vision and Reconstruction",
        "Image and Video Enhancement",
        "Medical Image Processing",
        "AI in Autonomous Vehicles",
        "Augmented Reality and Virtual Reality",
        "Scene Understanding and Semantic Segmentation",
    ],
  },
  {
    title: "Track 7: Computational Intelligence",
    description: "This track showcases the latest advancements in computational intelligence methods and their applications in solving complex, real-world problems. Emphasis is placed on innovative algorithms, hybrid models, and intelligent system design.",
    topics: [
        "Artificial Neural Networks and Deep Learning",
        "Fuzzy Logic and Soft Computing",
        "Evolutionary and Genetic Algorithms",
        "Swarm Intelligence and Nature-Inspired Optimization",
        "Hybrid Computational Intelligence Systems",
        "Reinforcement Learning and Adaptive Systems",
        "Bio-Inspired Computing Models",
        "Computational Intelligence in Robotics and Automation",
        "Intelligent Decision Support Systems in Healthcare, Finance, and Security",
        "Explainable and Interpretable Computational Intelligence",
    ],
  },
    {
    title: "Track 8: Interdisciplinary Research",
    description: "This track is dedicated to promoting collaboration across multiple disciplines, exploring how computational techniques can integrate with fields outside traditional computer science.",
    topics: [
        "AI in Healthcare and Bioinformatics",
        "Computational Social Sciences",
        "AI in Education and E-learning",
        "AI in Finance and FinTech Innovations",
        "Computational Techniques in Environmental Science",
        "AI for Drug Discovery and Development",
        "Computational Models in Psychology and Cognitive Science",
        "AI in Art, Music, and Creative Industries",
        "AI and Ethics in Interdisciplinary Contexts",
        "AI in Legal Tech and Governance",
    ],
  },
];

export default function CallForPapers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [openSection, setOpenSection] = useState(null);

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

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
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
          <div
            style={{
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
            }}
          >
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
      {/* Call for Papers Content */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "4rem 2rem",
          minHeight: "100vh",
        }}
      >
        <div
          className="responsive-row"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "2rem",
          }}
        >
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                <p style={{ margin: 0 }}>Dr. Puneet Garg <br />(+91-9996091999)</p>
                <p style={{ margin: 0 }}>Dr. Manish Bhardwaj <br /> (+91-9457966671)</p>
                <br />
                <p style={{ margin: 0 }}>Email : icici@kiet.edu</p>
                </div>
                </div>
              </div>
            </div>

          </div>
          {/* Right Content Area */}
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "2rem",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: "2rem", textAlign: "justify" }}>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2.5rem",
                  color: "#333",
                  margin: "0 0 1rem 0",
                  fontWeight: "bold",
                }}
              >
                CALL FOR PAPERS
              </h1>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                The International Conference on Innovations in Computational Intelligence (ICICI-2026) invites researchers, scholars, industry professionals, and practitioners from across the globe to submit their original and unpublished research papers. The conference will focus on advancements in computational techniques with a particular emphasis on artificial intelligence, machine learning, and other cutting-edge technologies. The final accepted papers will be considered for presentation in hybrid mode. All the accepted and presented papers will be submitted to IEEE Xplore (Scopus Indexed) for possible inclusion through IEEE CIS.
                <br /><br />
                ICICI-2026 offers a platform for the exchange of ideas and dissemination of innovative research across a variety of tracks. Contributors are invited to submit their work under the following seven tracks:
              </p>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
              {tracksData.map((track, index) => (
                <div key={index} style={{ borderBottom: index === tracksData.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                  <div
                    onClick={() => toggleSection(index)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "1rem 1.5rem",
                      backgroundColor: openSection === index ? "#f7fafc" : "white",
                      transition: "background-color 0.2s ease-in-out",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = openSection === index ? '#f7fafc' : 'white'}
                  >
                    <h2
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "1.2rem",
                        color: "#2d3748",
                        margin: "0",
                        fontWeight: "600",
                      }}
                    >
                      {track.title}
                    </h2>
                    {openSection === index ? (
                      <FaAngleUp style={{ fontSize: "1.2rem", color: "#4a5568" }} />
                    ) : (
                      <FaAngleDown style={{ fontSize: "1.2rem", color: "#718096" }} />
                    )}
                  </div>
                  <div
                    style={{
                      maxHeight: openSection === index ? `${track.topics.length * 40 + 100}px` : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease-in-out",
                      backgroundColor: "#fdfdff",
                      textAlign: "left",
                    }}
                  >
                    <p style={{
                      fontFamily: "Poppins",
                      fontSize: "1rem",
                      color: "#666",
                      lineHeight: "1.6",
                      margin: "0",
                      padding: "1rem 1.5rem 1rem 1.5rem",
                    }}>{track.description}</p>
                    <ul
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "0.95rem",
                        color: "#4a5568",
                        lineHeight: "1.8",
                        padding: "0rem 1.5rem 1.5rem 2.5rem",
                        margin: 0,
                      }}
                    >
                      {track.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} style={{ marginBottom: '0.25rem' }}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}