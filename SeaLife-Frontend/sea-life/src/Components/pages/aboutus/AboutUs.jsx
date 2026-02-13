import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us 🌊</h1>
      <p className="about-subtitle">
        Exploring, understanding, and protecting our oceans
      </p>

      <div className="about-content">
        <section className="about-card">
          <h2>🌍 Our Mission</h2>
          <p>
            Ocean Explore is dedicated to spreading awareness about marine life,
            ocean conservation, and the beauty of underwater ecosystems. We aim
            to inspire people to protect our oceans for future generations.
          </p>
        </section>

        <section className="about-card">
          <h2>🐠 What We Do</h2>
          <p>
            We provide educational content about sea creatures, highlight
            conservation efforts, support NGOs, and promote sustainable ocean
            practices through interactive learning.
          </p>
        </section>

        <section className="about-card">
          <h2>💙 Why Oceans Matter</h2>
          <p>
            Oceans regulate climate, produce oxygen, and support biodiversity.
            Protecting them is essential for life on Earth and for maintaining
            ecological balance.
          </p>
        </section>
      </div>
    </div>
  );
}
