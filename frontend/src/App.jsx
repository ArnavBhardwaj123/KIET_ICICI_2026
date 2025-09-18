import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import heroimage from "./assets/KIET.jpg";
import Footer from "./components/Footer";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./App.css";

export default function App() {
  const heroContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.fromTo(
        heroContentRef.current.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }, heroContentRef);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflowX: "hidden",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2,
          }}
        />
        {/* Blue Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: -1,
          }}
        />

        {/* Content */}
        <Navbar />
        <div
          ref={heroContentRef}
          style={{ textAlign: "center", padding: "0 2rem" }}
        >
          <p
            className="hero-kicker"
            style={{ color: "teal", fontSize: 25, fontFamily: "Poppins" }}
          >
            IEEE ICICI 2026
          </p>
          <p
            className="hero-title"
            style={{
              fontFamily: "Poppins",
              fontSize: 50,
              marginTop: "1rem",
            }}
          >
            Shaping the Future of Intelligent Computing
          </p>
          <p style={{ fontFamily: "Poppins", marginTop: "2rem" }}>
            Join global experts, researchers, and innovators for four days of
            groundbreaking research, collaboration, and learning.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "4rem",
            }}
          >
            <FaCalendarAlt />
            <p style={{ fontFamily: "Poppins" }}>15th - 18th February, 2026</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <FaMapMarkerAlt />
            <p style={{ fontFamily: "Poppins" }}>
              KIET Group Of Institutions, Ghaziabad, India
            </p>
          </div>
        </div>
      </div>

      {/* You can add other sections here */}
      <div
        style={{
          backgroundColor: "white",
          padding: "4rem 2rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
        className="responsive-row"
      >
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >
            Innovate. Collaborate. Lead.
          </p>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            About the Conference
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "1.2rem",
              marginTop: "1rem",
              color: "#555",
            }}
          >
            Exploring the future of computing and technology
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        {/* Right Column: Image */}
        <div style={{ flex: 1 }}>
          <img
            src={"path/to/your/image.jpg"} // Replace with your image path
            alt="Conference collaboration"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "4rem 2rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
        className="responsive-row"
      >
        <div style={{ flex: 1 }}>
          <img
            src={"path/to/your/image.jpg"} // Replace with your image path
            alt="Conference collaboration"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >
            Innovate. Collaborate. Lead.
          </p>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            About the Conference
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "1.2rem",
              marginTop: "1rem",
              color: "#555",
            }}
          >
            Exploring the future of computing and technology
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      {/* New Section with Video */}
      <div
        className="video-section responsive-row"
        style={{
          backgroundColor: "white",
          padding: "4rem 7rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, textAlign: "left" }}>
          <p
            style={{ color: "teal", fontFamily: "Poppins", fontSize: "1.5rem" }}
          >
            Innovate. Collaborate. Lead.
          </p>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            About the Conference
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "1rem",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <button
            style={{
              backgroundColor: "navy",
              color: "white",
              border: "none",
              borderRadius: "50px",
              padding: "1rem 2rem",
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "2rem",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right Column: Video and SVG */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <video
            src={"path/to/your/video.mp4"} // Replace with your video path
            controls
            style={{ width: "100%", height: "50vh", borderRadius: "8px" }}
          >
            Your browser does not support the video tag.
          </video>
          {/* svg */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "8px",
              marginTop: "16px",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
            }}
          >
            <svg width="10%" height="10">
              <rect
                x="0"
                y="0"
                width="100%"
                height="10"
                rx="5"
                ry="5"
                fill="navy"
              />
            </svg>
            <svg width="3%" height="10">
              <rect
                x="0"
                y="0"
                width="100%"
                height="10"
                rx="5"
                ry="5"
                fill="#e0e0e0"
              />
            </svg>
            <svg width="3%" height="10">
              <rect
                x="0"
                y="0"
                width="100%"
                height="10"
                rx="5"
                ry="5"
                fill="#e0e0e0"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* New Section with Two Photos */}
      <div
        style={{
          color: "white",
          display: "flex",
          gap: "2rem",
          padding: "2rem",
        }}
        className="two-photos"
      >
        {/* First Section */}
        <div
          style={{
            backgroundColor: "#314159",
            flex: 1,
            display: "flex",
            gap: "2rem",
          }}
          className="responsive-row"
        >
          <div style={{ width: "15vw" }}>
            <img
              src={heroimage} // Replace with your image path
              alt="First descriptive image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div style={{ flex: 1, padding: "2rem", boxSizing: "border-box" }}>
            <h3
              style={{
                color: "teal",
                fontFamily: "Poppins",
                fontSize: "1.5rem",
              }}
            >
              TRACK 1:
            </h3>
            <h4
              style={{
                fontFamily: "Poppins",
                fontSize: "2rem",
                marginTop: "0.5rem",
              }}
            >
              Data Science & Big Data Analytics
            </h4>
            <p
              style={{
                fontFamily: "Poppins",
                marginTop: "1rem",
                lineHeight: "1.6",
                color: "#ccc",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div
          style={{
            backgroundColor: "#314159",
            flex: 1,
            display: "flex",
            gap: "2rem",
          }}
          className="responsive-row"
        >
          <div style={{ width: "15vw" }}>
            <img
              src={heroimage} // Replace with your image path
              alt="Second descriptive image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div style={{ flex: 1, padding: "2rem", boxSizing: "border-box" }}>
            <h3
              style={{
                color: "teal",
                fontFamily: "Poppins",
                fontSize: "1.5rem",
              }}
            >
              TRACK 2:
            </h3>
            <h4
              style={{
                fontFamily: "Poppins",
                fontSize: "2rem",
                marginTop: "0.5rem",
              }}
            >
              Artificial Intelligence & Machine Learning
            </h4>
            <p
              style={{
                fontFamily: "Poppins",
                marginTop: "1rem",
                lineHeight: "1.6",
                color: "#ccc",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div
        style={{
          backgroundColor: "white",
          minHeight: "50vh",
          padding: "4rem",
        }}
      >
        {/* This section is intentionally left blank for now. */}
      </div>

      {/* New Section2 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "4rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333" }}>Lorem ipsum dolor sit amet</h2>
        <p
          style={{
            color: "gray",
            maxWidth: "600px",
            margin: "1rem auto 2rem auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          className="card-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#f0f0f0",
                width: "318px",
                height: "640px",
              }}
            ></div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}