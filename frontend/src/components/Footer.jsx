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
              <a href="#">
                <FaFacebook size={24} color="white" />
              </a>
              <a href="#">
                <FaInstagram size={24} color="white" />
              </a>
              <a href="#">
                <FaLinkedin size={24} color="white" />
              </a>
              <a href="#">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.782084227301!2d77.49841877479717!3d28.694600175620984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf250d4f10731%3A0x6a0a09e0807b539c!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1717255906232!5m2!1sen!2sin"
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