import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Home Section */}
      <section className="home-section">
        <div className="banner">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Banner"
            className="banner-image"
          />
        </div>
        <div className="banner-text">
          <h1>Welcome to Our Website</h1>
          <p>We offer the best services to our clients with a dedicated team.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are a passionate team committed to delivering high-quality products
          and solutions that meet our clients’ needs.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +123-456-7890</p>
      </section>
    </div>
  );
}

export default App;
