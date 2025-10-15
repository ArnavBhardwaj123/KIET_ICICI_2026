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
      /* responsive update: changed max-width to 1024px to include tablets */
      setIsMobile(window.innerWidth <= 1024);
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
        {!isMobile && (
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
        )}


        {/* Mobile menu button */}
        {isMobile && (
          <button
            className="mobile-menu-icon"
            onClick={isOpen ? closeMenu : openMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={{
              display: "block",
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
        )}
      </nav>

      {/* Mobile slide-in nav menu - Upper Half */}
      {isOpen && isMobile && (
        <div
          className={`mobile-nav-overlay ${isClosing ? 'closing' : ''}`}
          style={{
            position: "fixed",
            top: "80px", // Start below the navbar
            right: 0, // Positioned at right edge
            width: "100vw", // Full width
            height: "60vh", // Extended height to show all buttons
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)",
            zIndex: 1001, // Higher z-index to be above everything
            transform: isClosing ? "translateY(-100%)" : "translateY(0)", // Slide from top
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
            overflow: "hidden",
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
              gap: "0.3rem",
              alignItems: "center", // Center align the menu items
              flex: 1,
              justifyContent: "center",
            }}
          >
            {items.map((item, index) => (
              <li
                key={item.name}
                style={{
                  opacity: isClosing ? 0 : 1,
                  transform: isClosing ? "translateY(-10px)" : "translateY(0)", // Slide up animation
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
                    fontSize: "0.9rem",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "8px",
                    display: "block",
                    position: "relative",
                    border: "1px solid transparent",
                    textAlign: "center", // Center align text
                    width: "200px",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#40E0D0";
                    e.target.style.backgroundColor = "rgba(64, 224, 208, 0.08)";
                    e.target.style.borderColor = "rgba(64, 224, 208, 0.2)";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#334155";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "transparent";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>


        </div>
      )}
      {/* Backdrop for mobile menu - Lower Half */}
      {isOpen && isMobile &&(
        <div
          style={{
            position: "fixed",
            top: "calc(80px + 60vh)", // Start below the extended menu
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(2px)",
            zIndex: 1000,
            opacity: isClosing ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
          onClick={closeMenu}
        />
      )}
    </>
  );
}