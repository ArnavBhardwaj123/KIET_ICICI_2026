import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope, FaAngleUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/kiet.edu/?ref=br_rs", label: "Facebook", color: "#1877F2" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/kiet-group-of-institutions/", label: "LinkedIn", color: "#0077B5" },
  { icon: <FaXTwitter />, href: "https://twitter.com/kiet_edu", label: "X/Twitter", color: "#000000" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/kiet_edu/", label: "Instagram", color: "#000000" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/@KietEduGzb", label: "YouTube", color: "#FF0000" },
  { icon: <FaEnvelope />, href: "mailto:icici2026@kiet.edu", label: "Email", color: "#D44638" }
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const circumference = 2 * Math.PI * 23; // Radius of SVG circle is 23

  const handleScroll = () => {
    // Toggle button visibility
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Calculate scroll progress
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="new-footer-container">
        <div className="footer-socials-section">
          <div className="social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                style={{ backgroundColor: link.color }}
                className="social-icon-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom-bar">
          <p>
            KIET Group of institutions © All Rights Reserved 2025-26
          </p>
        </div>
      </footer>

      {/* Upgraded Scroll to Top Button with Progress Indicator */}
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-progress" aria-label="Go to top">
          <svg className="progress-ring" width="50" height="50">
            <circle className="progress-ring__circle-bg" strokeWidth="4" fill="transparent" r="23" cx="25" cy="25" />
            <circle
              className="progress-ring__circle"
              strokeWidth="4"
              fill="transparent"
              r="23"
              cx="25"
              cy="25"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: circumference - (scrollProgress / 100) * circumference,
              }}
            />
          </svg>
          <FaAngleUp className="progress-arrow" />
        </button>
      )}
    </>
  );
}