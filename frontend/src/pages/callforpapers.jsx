import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CallForPapers() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "6rem 2rem", textAlign: "center" }}>
        <h1>Call for Papers</h1>
        <p>Coming Soon...</p>
      </div>
      <Footer />
    </div>
  );
}