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
    setIsClosing(true); // Start fade-out animation
    // After the animation, set isOpen to false to unmount the component
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false); // Reset isClosing state
    }, 300); // This duration should match the CSS transition-duration
  };

  const mobileNavRef = useRef(null); // Ref for the mobile nav overlay

  const items = [
    { name: "HOME", path: "/" },
    { name: "CALL FOR PAPERS", path: "/call-for-papers" },
    { name: "PAPER SUBMISSION", path: "/paper-submission" },
    { name: "COMMITTEE", path: "/committee" },
    { name: "REGISTRATION", path: "/registration" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0.5rem 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 2rem",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/KIET-LOGO.png"
            alt="KIET Logo"
            style={{
              height: "50px",
              width: "auto",
            }}
          />
        </div>

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
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "#333",
            fontSize: "1.5rem",
            cursor: "pointer",
            outline: "none",
            padding: "0.5rem",
            borderRadius: "4px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f0f0f0";
            e.target.style.color = "#40E0D0";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#333";
          }}
          onFocus={(e) => {
            e.target.style.backgroundColor = "#f0f0f0";
            e.target.style.color = "#40E0D0";
          }}
          onBlur={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#333";
          }}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile sidebar navigation */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="mobile-nav-backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 9998,
              opacity: isClosing ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
            onClick={closeMenu}
          />
          
          {/* Left sidebar */}
          <div
            className="mobile-nav-sidebar"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              width: "280px",
              backgroundColor: "#ffffff",
              zIndex: 9999,
              boxShadow: "4px 0 20px rgba(0,0,0,0.3)",
              transform: isClosing ? "translateX(-100%)" : "translateX(0)",
              transition: "transform 0.3s ease",
              display: "flex",
              flexDirection: "column",
              border: "none",
              opacity: 1,
            }}
          >
            {/* Sidebar header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 1.5rem",
                borderBottom: "1px solid #eee",
                backgroundColor: "#ffffff",
                opacity: 1,
              }}
            >
              <img
                src="/images/KIET-LOGO.png"
                alt="KIET Logo"
                style={{
                  height: "40px",
                  width: "auto",
                }}
              />
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#333",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  transition: "background-color 0.2s ease",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e9ecef";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = "#e9ecef";
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation links */}
            <nav style={{ flex: 1, padding: "1rem 0" }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      style={{
                        display: "block",
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        padding: "1rem 1.5rem",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#f8f9fa";
                        e.target.style.color = "#40E0D0";
                        e.target.style.borderLeftColor = "#40E0D0";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#333";
                        e.target.style.borderLeftColor = "transparent";
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer section in sidebar */}
            <div
              style={{
                padding: "1rem 1.5rem",
                borderTop: "1px solid #eee",
                backgroundColor: "#ffffff",
                fontSize: "0.8rem",
                color: "#666",
                textAlign: "center",
                opacity: 1,
              }}
            >
              <p style={{ margin: 0, fontFamily: "Poppins" }}>
                IEEE ICICI 2026
              </p>
              <p style={{ margin: "0.25rem 0 0 0", fontFamily: "Poppins" }}>
                KIET Group of Institutions
              </p>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
