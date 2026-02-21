import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us 🌊</h1>
      <p className="contact-subtitle">
        Have questions or want to support ocean conservation? Reach out!
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: oceanexplore@gmail.com</p>
          <p>Phone: +91 89760 38705</p>
          <p>
            Location:{" "}
            <a
              href="https://maps.app.goo.gl/w83AALug6nFd75LW6?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              View My Location on Google Maps
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* ===== GOOGLE MAP SECTION ===== */}
      <div
        className="map-section"
        onClick={() =>
          window.open(
            "https://maps.app.goo.gl/w83AALug6nFd75LW6?g_st=aw",
            "_blank"
          )
        }
      >
        <iframe
          title="Ocean Explore Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3609.574446284823!2d73.013305!3d19.035711999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzA4LjYiTiA3M8KwMDAnNDcuOSJF!5e1!3m2!1sen!2sin!4v1771507599423!5m2!1sen!2sin" 
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
}
