import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    }, 300); // Faster animation
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
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1.2rem 2rem",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
        }}
      >
        {/* Logo Container */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            src="/images/KIET-LOGO.png"
            alt="KIET Logo"
            style={{
              height: "50px",
              width: "auto",
            }}
          />
           <img
            src="/images/IEEE-CIS-logo-RGB-300ppi.png"
            alt="SCS Logo"
            style={{
              height: "40px",
              width: "auto",
            }}
          />
          <img
            src="/images/IEEE-SB-LOGO.png"
            alt="IEEE Logo"
            style={{
              height: "40px",
              width: "auto",
            }}
          />
         
          <img
            src="/images/IEEE-STUDENT-CHAPTER.png"
            alt="UP Section Logo"
            style={{
              height: "40px",
              width: "auto",
            }}
          />
        </div>

        {/* Links Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Desktop Navigation */}
          <ul
            className="nav-links"
            style={{
              display: "flex",
              listStyle: "none",
              gap: "2rem",
              margin: 0,
              padding: 0,
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
                  fontSize: "0.9rem",
                  fontFamily: "Poppins",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s ease",
                  padding: "0.5rem 0",
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
              transition: "all 0.3s ease",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(0,0,0,0.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in nav menu */}
      {isOpen && (
        <div
          className={`mobile-nav-overlay ${isClosing ? 'closing' : ''}`}
          style={{
            position: "fixed",
            top: "70px", // Below navbar
            right: 0,
            width: "280px",
            height: "calc(100vh - 70px)",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.15)",
            zIndex: 999,
            transform: isClosing ? "translateX(100%)" : "translateX(0)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
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
                  transform: isClosing ? "translateX(20px)" : "translateX(0)",
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
                    e.target.style.transform = "translateX(4px)";
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
              IEEE ICICI 2026
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
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: "280px",
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
