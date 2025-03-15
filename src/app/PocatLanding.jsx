import React from "react";
import ThreeScene from "../components/ThreeScene";

const PocatLanding = () => {
  return (
    <div className="bg-black">
      {/* Other landing page content */}
      <section style={{ height: "100vh" }}>
        <h1 style={{ textAlign: "center", color: "#00c278", padding: "2rem 0" }} className="text-3xl font-bold">
          Explore Our 3D Model
        </h1>
        <ThreeScene />
      </section>
      {/* Other sections */}
    </div>
  );
};

export default PocatLanding;
