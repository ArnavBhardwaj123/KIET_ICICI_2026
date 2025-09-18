import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
                <a href="#">
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
          ref={mobileNavRef}
         // Add the "closing" class when isClosing is true
          style={{ background: "rgba(0,0,0,0.95)" }} // Keep background here for initial render
          className={`mobile-nav-overlay ${isClosing ? 'closing' : ''}`}
      >
          <button
            onClick={closeMenu} // Use the new closeMenu function
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              zIndex: 1200,
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
                  onClick={closeMenu} // Use the new closeMenu function
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
