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
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
