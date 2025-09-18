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
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          padding: "1rem 2rem",
          margin: "0 4vh",
        }}
      >
        <ul
          className="nav-links"
          style={{
            display: "flex",
            listStyle: "none",
            gap: "3rem",
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((item) => (
            <li key={item}>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile icon (hidden on desktop via CSS) */}
        <button
          className="mobile-menu-icon"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          style={{
            marginLeft: "auto",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "1.25rem",
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
            background: "rgba(0,0,0,0.95)",
            zIndex: 1100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            <FaTimes />
          </button>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    fontFamily: "Poppins",
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
