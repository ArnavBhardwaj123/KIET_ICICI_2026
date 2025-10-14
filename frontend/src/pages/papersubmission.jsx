import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

export default function PaperSubmission() {
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
              Paper Submission
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
              <div>Contribute Your Original, Unpublished Work</div>
              <div>And Be Part Of IEEE's Global Research And</div>
              <div>Innovation Community</div>
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
          <div
            style={{
              position: "relative",
              zIndex: 2,
              color: "white",
              width: "100%",
            }}
          >
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
                Contribute Your Original, Unpublished Work<br />
                And Be Part Of IEEE's Global Research And<br />
                Innovation Community
              </h2>
            </div>
          </div>
          {/* Progress Points/Indicators */}
          <div className="progress-indicators">
            <div style={{ position: "absolute", top: "50%", left: "2rem", right: "2rem", height: "2px", backgroundColor: "rgba(255, 255, 255, 0.3)", transform: "translateY(-50%)", zIndex: 1 }} />
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
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Paper Submission Content */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "4rem 2rem",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "2rem",
          }}
          className="responsive-row"
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
              textAlign: "left",
            }}
          >
            {/* Author Guidelines */}
            <div style={{ marginBottom: "3rem" }}>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2.5rem",
                  color: "#333",
                  margin: "0 0 1.5rem 0",
                  fontWeight: "bold",
                }}
              >
                Author Guidelines
              </h1>
              <ul
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.8",
                  paddingLeft: "1.5rem",
                }}
              >
                <li>Papers must be original, unpublished, and not under consideration elsewhere.</li>
                <li>Manuscripts should follow the IEEE conference format strictly.</li>
                <li>The plagiarism level must be below 10%, as per IEEE standards.</li>
                <li>Papers should be written in English, ensuring clarity and conciseness.</li>
                <li>The manuscript should be 6 pages, including figures, tables, and references.</li>
                <li>Each submission will undergo a double-blind peer-review process by three expert reviewers to ensure quality.</li>
                <li>Accepted and presented papers will be published in IEEE Xplore (Scopus Indexed).</li>
                <li>At least one author must register and present the paper at the conference for inclusion in the proceedings.</li>
              </ul>
            </div>

            {/* Submission Guidelines */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2rem",
                  color: "#333",
                  margin: "0 0 1.5rem 0",
                  fontWeight: "bold",
                }}
              >
                Submission Guidelines
              </h2>
              <ul
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.8",
                  paddingLeft: "1.5rem",
                }}
              >
                <li>Papers should be submitted in PDF format following the IEEE conference template.</li>
                <li>Any submission with plagiarism exceeding 10% will be automatically rejected.</li>
                <li>The peer-review process will be double-blind, meaning author names and affiliations should not appear in the manuscript.</li>
                <li>Authors should ensure proper formatting, citations, and adherence to IEEE standards.</li>
                <li>Only high-quality, accepted, and presented papers will be included in IEEE Xplore.</li>
                <li>Accepted papers will be presented at the conference, and all registered participants will receive a certificate of participation.</li>
                <li>Papers submitted to the conference should be written in English with the maximum paper length of Six (6) in IEEE format.</li>
                <li>However, the authors can extend maximum 1 page with an over length page charge, of Rs.1,000/-(for Indian participants) and US $50/-(for International participants) per page.</li>
                <li>The ”“Best Paper Awards”” will be given for each track of conference selected by the committee among the presented papers in ICICI- 2026.</li>
                <li>Submit your papers through the conference submission portal by <strong>15th November, 2025</strong>.</li>
              </ul>
              <div className="submission-box">
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "#333",
                    margin: "0",
                  }}
                >
                  Authors may download the IEEE paper template here.
                </p>
                <a href="https://www.kiet.edu/icici2026/images/Paper%20Template.docx" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      backgroundColor: "rgba(0,0,100,0.8)",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Download
                  </button>
                </a>
              </div>
            </div>

            {/* Where to Submit */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2rem",
                  color: "#333",
                  margin: "0 0 1.5rem 0",
                  fontWeight: "bold",
                }}
              >
                Where to Submit
              </h2>
              <ul
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.8",
                  paddingLeft: "1.5rem",
                }}
              >
                <li>All papers must be submitted via the Microsoft CMT Portal.</li>
                <li>Authors should create an account on the Microsoft CMT platform for submission.</li>
                <li>The submission link will be available under the Communication section on the conference website.</li>
              </ul>
               <div className="submission-box green">
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "#333",
                    margin: "0",
                  }}
                >
                  Submit your paper through the Microsoft CMT Portal.
                </p>
                <a href="https://cmt3.research.microsoft.com/ICICI2026" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      backgroundColor: "rgba(0,100,0,0.8)",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Submission Link
                  </button>
                </a>
              </div>
            </div>
            
            {/* How to Submit */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2rem",
                  color: "#333",
                  margin: "0 0 1.5rem 0",
                  fontWeight: "bold",
                }}
              >
                How to Submit
              </h2>
               <ol style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
                    <li><strong>Register/Login:</strong> Go to the Microsoft CMT Portal. Create an account if you are a new user or log in with existing credentials.</li>
                    <li><strong>Select the Conference:</strong> Search for ICICI-2026 in the conference list.</li>
                    <li><strong>Upload the Paper:</strong> Click on "Submit Paper" and fill in the required details. Upload the PDF manuscript following the IEEE conference format.</li>
                    <li><strong>Provide Author Details:</strong> Enter the full names, affiliations, and contact details of all authors.</li>
                    <li><strong>Confirm Submission:</strong> Review the uploaded manuscript and details for accuracy. Click Submit to complete the process.</li>
               </ol>
            </div>

            {/* Review Process & Notification */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2rem",
                  color: "#333",
                  margin: "0 0 1.5rem 0",
                  fontWeight: "bold",
                }}
              >
                Review Process & Notification
              </h2>
               <ul style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
                    <li>Each submission will be reviewed by three competent reviewers.</li>
                    <li>Authors will receive review feedback upon completion of the review process.</li>
                    <li>If accepted, authors must submit the camera-ready version within the specified deadline.</li>
               </ul>
            </div>
            
            {/* Publication and Indexing */}
            <div>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2rem",
                  color: "#333",
                  margin: "0 0 1.5rem 0",
                  fontWeight: "bold",
                }}
              >
                Publication and Indexing
              </h2>
               <ul style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
                    <li>The final accepted papers will be considered for presentation in hybrid mode.</li>
                    <li>All the accepted and presented papers will be submitted to IEEE Xplore (Scopus Indexed) for possible inclusion through IEEE CIS.</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}