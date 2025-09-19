import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const items = [
    "HOME",
    "CALL FOR PAPERS",
    "PAPER SUBMISSION",
    "COMMITTEE",
    "REGISTRATION",
    "CONTACT",
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
            <li key={item}>
              <a
                href="#"
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
                {item}
              </a>
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
          }}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile full-screen nav overlay */}
      {isOpen && (
        <div
          className="mobile-nav-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            zIndex: 1100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Mobile header with logo and close button */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 2rem",
              borderBottom: "1px solid #eee",
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
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              style={{
                background: "transparent",
                border: "none",
                color: "#333",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              <FaTimes />
            </button>
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#40E0D0";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#333";
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
