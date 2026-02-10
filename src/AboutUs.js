import React from "react";
import { Store, Calendar, GraduationCap, Truck } from "lucide-react";

const AboutUs = () => {
  return (
    <div style={{ padding: "48px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>About Us</h1>

      <p
        style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "24px" }}
      >
        Welcome to TulipTrays! We are dedicated to providing the best experience
        for our community. Our platform is designed to help you find exactly
        what you need with ease and confidence.
      </p>

      <section style={{ marginBottom: "32px" }}>
        <h2>Our Mission</h2>
        <p style={{ lineHeight: "1.6" }}>
          To streamline the process of organizing and serving, ensuring that
          enthusiasts and professionals alike have access to the best trays and
          resources available.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2>For Business</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Store size={24} color="#57534e" />
            <span style={{ fontSize: "1.1rem" }}>Retailers</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Calendar size={24} color="#57534e" />
            <span style={{ fontSize: "1.1rem" }}>Event Planners</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <GraduationCap size={24} color="#57534e" />
            <span style={{ fontSize: "1.1rem" }}>Schools</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Truck size={24} color="#57534e" />
            <span style={{ fontSize: "1.1rem" }}>Distributors</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to our team at{" "}
          <a href="mailto:support@tuliptrays.com">support@tuliptrays.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
