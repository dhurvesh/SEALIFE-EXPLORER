import "./ContactUs.css";
import { useState } from "react";
import API from "../../../api/axiox";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      await API.post(
        `/contact/submit?name=${form.name}&email=${form.email}&message=${form.message}`
      );

      toast.success("Thank you for the message 🌊");

      // Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* GOOGLE MAP */}
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