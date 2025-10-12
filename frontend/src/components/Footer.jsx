import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        {/* Top Section: Three Columns */}
        <div className="footer-top-section">
          {/* Column 1: Explore */}
          <div className="footer-section explore">
            <h3>Explore</h3>
            <p>KIET Group Of Institutions</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>

          {/* Column 2: Placeholder Text */}
          <div className="footer-section middle-text">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>

          {/* Column 3: Socials and Contact */}
          <div className="footer-section contact-socials">
            <div className="social-icons">
              <a href="https://www.facebook.com/kiet.edu/?ref=br_rs" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} color="white" />
              </a>
              <a href="https://www.instagram.com/kiet_edu/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} color="white" />
              </a>
              <a href="https://www.linkedin.com/company/kiet-group-of-institutions/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} color="white" />
              </a>
              <a href="https://www.youtube.com/@KietEduGzb" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} color="white" />
              </a>
            </div>
            <p className="email-text">
              Write us at: <a href="mailto:support@kiet.edu">support@kiet.edu</a>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8932140537333!2d77.49580101501783!3d28.75254258237105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204124251%3A0xf5c6d6eefa89a5df!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1676882822910!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KIET Group of Institutions location"
          ></iframe>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="logo">LOGO</span>
          <p className="copyright-text">© 2025 IEEE KIET - Developed by KIET</p>
        </div>
      </div>
    </footer>
  );
}