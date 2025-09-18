// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "navy",
        color: "white",
        padding: "2rem",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <p style={{ fontFamily: "Poppins", fontSize: "1rem" }}>
        © {new Date().getFullYear()} KIET ICICI 2026. All Rights Reserved.
      </p>
    </footer>
  );
}
