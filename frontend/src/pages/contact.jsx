import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

// Contact Data
const contactData = [
   {
    name: "Dr. Puneet Garg",
    title: "For General inquiries",
    phone: "+91-9996091999",
    email: "puneet.garg@kiet.edu",
  },
  {
    name: "Dr. Manish Bhardwaj",
    title: "For General inquiries",
    phone: "+91-8700600273",
    email: "manish.bhardwaj@kiet.edu",
  },
  {
    name: "Mr. Satyam Shivam Sunderam",
    title: "For Conference fee related inquiries",
    phone: "+91-9927294522",
    email: "satyam.sunderam@kiet.edu",
  },
  {
    name: "Mr. Rajeev Kumar Singh",
    title: "For Paper Presentation related inquiries",
    phone: "+91-7376495623",
    email: "rajeev.singh@kiet.edu",
  },
  {
    name: "Mr. Gagan Kumar",
    title: "For Accommodation facility",
    phone: "+91-8318670117",
    email: "gagan.kumar@kiet.edu",
  },
];

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
              background: "linear-gradient(135deg, rgba(0, 51, 152, 0.61), rgba(0, 100, 200, 0.8))",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2, color: "white", width: "100%" }}>
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
          <div style={{ flex: 1, backgroundColor: "white", borderRadius: "15px", padding: "2rem", textAlign: "left" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{ fontFamily: "Poppins", fontSize: "2.5rem", color: "#333", margin: "0 0 1rem 0", fontWeight: "bold" }}>
                Get In Touch
              </h1>
              <p style={{ fontFamily: "Poppins", fontSize: "1rem", color: "#666", lineHeight: "1.6", margin: "0" }}>
                We welcome your questions, comments, and feedback. Please feel free to reach out to us using the contact details below. Our team will get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact-grid">
              {contactData.map((contact, index) => (
                <div key={index} className="contact-person-card">
                  <h3 className="contact-person-name">
                    {contact.name}
                  </h3>
                  <p style={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "#05B8A8",
                    margin: "0 0 1rem 0",
                    fontWeight: "500"
                  }}>
                    {contact.title}
                  </p>
                  {contact.institution && (
                    <p style={{
                      fontFamily: "Poppins",
                      fontSize: "0.9rem",
                      color: "#666",
                      margin: "0 0 1rem 0"
                    }}>
                      {contact.institution}
                    </p>
                  )}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    borderTop: "1px solid #e9ecef",
                    paddingTop: "1rem"
                  }}>
                    {contact.phone && (
                      <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "Poppins", color: "#666", margin: 0 }}>
                        <FaPhone /> {contact.phone}
                      </p>
                    )}
                    {contact.email && (
                      <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "Poppins", color: "#666", margin: 0 }}>
                        <FaEnvelope /> {contact.email}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* --- NEW MAP SECTION --- */}
            <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <h2 style={{ fontFamily: "Poppins", fontSize: "1.8rem", color: "#333", margin: "0 0 1.5rem 0", fontWeight: "600" }}>
                    Our Location
                </h2>
                <div style={{
                    width: '100%',
                    height: '350px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.892415198929!2d77.49580127536387!3d28.75256227560134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204124251%3A0xf5c6d6eefa89a5df!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1728950058287!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="KIET Group of Institutions Location"
                    ></iframe>
                </div>
            </div>

            {/* For Authors Section */}
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ fontFamily: "Poppins", fontSize: "1.8rem", color: "#333", margin: "0 0 1.5rem 0", fontWeight: "600" }}>
                For Authors
              </h2>
              <div
                style={{
                  backgroundColor: "rgba(0,0,100,0.8)",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem"
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Authors may contact us for any queries regarding paper submission.
                </p>
                <button
                  onClick={() => window.location.href = '/paper-submission'}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "5px",
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Submission Guidelines
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}