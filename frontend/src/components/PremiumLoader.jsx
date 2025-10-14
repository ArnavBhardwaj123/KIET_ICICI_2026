import React from "react";

export default function IEEELoader() {
  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* IEEE Diamond Loader */}
        <div
          style={{
            width: "100px",
            height: "100px",
            position: "relative",
            animation: "spin 2s linear infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: "rotate(45deg)",
              border: "6px solid #0B4189",
              borderRadius: "8px",
            }}
          ></div>

          {/* Inner arrows to mimic IEEE symbol */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "45%",
              height: "6px",
              backgroundColor: "#0B4189",
              transform: "translate(-50%, -50%) rotate(45deg)",
              borderRadius: "3px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "45%",
              height: "6px",
              backgroundColor: "#0B4189",
              transform: "translate(-50%, -50%) rotate(-45deg)",
              borderRadius: "3px",
            }}
          ></div>
        </div>

        {/* Loading Text */}
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            color: "#0B4189",
            fontWeight: 600,
            letterSpacing: "0.15em",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          IEEE LOADING...
        </div>
      </div>
    </>
  );
}
