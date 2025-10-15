import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const posterHeight = isMobile ? 150 : 200; // Approximate poster height
      setIsScrolled(scrollTop > posterHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openMenu = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const mobileNavRef = useRef(null);

  const items = [
    { name: "HOME", path: "/" },
    { name: "CALL FOR PAPERS", path: "/call-for-papers" },
    { name: "PAPER SUBMISSION", path: "/paper-submission" },
    { name: "COMMITTEE", path: "/committee" },
    { name: "IMPORTANT DATES", path: "/important_dates" },
    { name: "SPEAKERS", path: "/speakers" },
    { name: "REGISTRATION", path: "/registration" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* Poster Section - Static at top */}
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={isMobile ? "/images/POSTER.png" : "/images/POSTER-1.png"}
            alt="Conference Poster"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: isMobile ? "150px" : "200px",
              objectFit: isMobile ? "contain" : "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Navigation Section - Becomes sticky */}
      <nav
        style={{
          position: isScrolled ? "fixed" : "relative",
          top: isScrolled ? 0 : "auto",
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "1rem 2rem",
          transition: "all 0.3s ease",
        }}
      >
          {/* Desktop Navigation */}
          <ul
            className="nav-links"
            style={{
              display: "flex",
              listStyle: "none",
              gap: "0.8rem", // Reduced from 1.5rem to 0.8rem for more compact spacing
              margin: 0,
              padding: 0,
              flexWrap: "nowrap", // Changed to nowrap to keep buttons in one row
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "0.85rem",
                    fontFamily: "Poppins",
                    letterSpacing: "0.3px",
                    transition: "color 0.3s ease",
                    padding: "0.5rem 0.7rem", // Reduced horizontal padding from 1rem to 0.7rem
                    display: "block",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#40E0D0";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#333";
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-icon"
            onClick={isOpen ? closeMenu : openMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#333",
              fontSize: "1.4rem",
              cursor: "pointer",
              padding: "0.5rem",
              zIndex: 1001,
              borderRadius: "4px",
              position: "absolute",
              right: "2rem",
              outline: "none", // Remove focus outline
            }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

      {/* Mobile slide-in nav menu - Left Side */}
      {isOpen && (
        <div
          className={`mobile-nav-overlay ${isClosing ? 'closing' : ''}`}
          style={{
            position: "fixed",
            top: isScrolled ? 0 : (isMobile ? "150px" : "200px"), // Adjust based on scroll and poster height
            left: 0, // Changed from right to left
            width: "50%", // Half screen width
            height: isScrolled ? "100vh" : `calc(100vh - ${isMobile ? "150px" : "200px"})`, // Adjust height
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "5px 0 25px rgba(0, 0, 0, 0.15)", // Changed shadow direction
            zIndex: 999,
            transform: isClosing ? "translateX(-100%)" : "translateX(0)", // Changed direction
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            borderRight: "1px solid rgba(0, 0, 0, 0.1)", // Changed from borderLeft to borderRight
            display: "flex",
            flexDirection: "column",
            paddingTop: "2rem",
          }}
        >
          {/* Navigation Links */}
          <ul
            style={{
              listStyle: "none",
              padding: "0 1.5rem",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {items.map((item, index) => (
              <li 
                key={item.name} 
                style={{ 
                  opacity: isClosing ? 0 : 1,
                  transform: isClosing ? "translateX(-20px)" : "translateX(0)", // Changed direction for left slide
                  transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
                  transitionDelay: isClosing ? `${(items.length - index) * 0.03}s` : `${index * 0.05}s`,
                }}
              >
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  style={{
                    color: "#334155",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    padding: "1rem 1.2rem",
                    borderRadius: "12px",
                    display: "block",
                    position: "relative",
                    border: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#40E0D0";
                    e.target.style.backgroundColor = "rgba(64, 224, 208, 0.08)";
                    e.target.style.borderColor = "rgba(64, 224, 208, 0.2)";
                    e.target.style.transform = "translateX(-4px)"; // Changed direction for left menu
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#334155";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "transparent";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Decorative bottom element */}
          <div
            style={{
              marginTop: "auto",
              padding: "2rem 1.5rem",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#64748b",
                fontSize: "0.85rem",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              ICICI 2026
            </div>
            <div
              style={{
                width: "40px",
                height: "3px",
                background: "linear-gradient(90deg, #40E0D0, #64ffda)",
                borderRadius: "2px",
                margin: "0.5rem auto 0",
              }}
            />
          </div>
        </div>
      )}
      {/* Backdrop for mobile menu - Right Half */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: isScrolled ? 0 : (isMobile ? "150px" : "200px"),
            left: "50%", // Cover right half of screen (menu is on left)
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(2px)",
            zIndex: 998,
            opacity: isClosing ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
          onClick={closeMenu}
        />
      )}
    </>
  );
}
