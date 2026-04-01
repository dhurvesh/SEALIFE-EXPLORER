// import "./AboutUs.css";

// export default function AboutUs() {
//   return (
//     <div className="about-page">
//       <h1 className="about-title">About Us 🌊</h1>
//       <p className="about-subtitle">
//         Exploring, understanding, and protecting our oceans
//       </p>

//       <div className="about-content">
//         <section className="about-card">
//           <h2>🌍 Our Mission</h2>
//           <p>
//             Ocean Explore is dedicated to spreading awareness about marine life,
//             ocean conservation, and the beauty of underwater ecosystems. We aim
//             to inspire people to protect our oceans for future generations.
//           </p>
//         </section>

//         <section className="about-card">
//           <h2>🐠 What We Do</h2>
//           <p>
//             We provide educational content about sea creatures, highlight
//             conservation efforts, support NGOs, and promote sustainable ocean
//             practices through interactive learning.
//           </p>
//         </section>

//         <section className="about-card">
//           <h2>💙 Why Oceans Matter</h2>
//           <p>
//             Oceans regulate climate, produce oxygen, and support biodiversity.
//             Protecting them is essential for life on Earth and for maintaining
//             ecological balance.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }


import "./AboutUs.css";
import { useNavigate } from "react-router-dom";


export default function About() {
   const navigate = useNavigate();
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Ocean Explorer 🌊</h1>
        <p>
          Exploring the mysteries of the ocean and spreading awareness about
          marine life and conservation.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-section">
        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            To educate people about marine biodiversity and inspire action
            toward protecting ocean ecosystems worldwide.
          </p>
        </div>

        <div className="about-card">
          <h2>🌍 Our Vision</h2>
          <p>
            A world where oceans are clean, thriving, and protected for future
            generations.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <h2>💙 Our Core Values</h2>

        <div className="values-grid">
          <div className="value-box">
            <h3>🌱 Sustainability</h3>
            <p>Promoting eco-friendly practices and marine protection.</p>
          </div>

          <div className="value-box">
            <h3>📚 Education</h3>
            <p>Spreading awareness about ocean life and biodiversity.</p>
          </div>

          <div className="value-box">
            <h3>🤝 Community</h3>
            <p>Building a global network of ocean lovers and conservationists.</p>
          </div>

          <div className="value-box">
            <h3>🔬 Research</h3>
            <p>Encouraging scientific discovery of marine species.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stat">
          <h2>70%</h2>
          <p>Of Earth Covered by Oceans</p>
        </div>

        <div className="stat">
          <h2>1M+</h2>
          <p>Marine Species</p>
        </div>

        <div className="stat">
          <h2>8M Tons</h2>
          <p>Plastic Entering Oceans Each Year</p>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <h2>👨‍🚀 Meet Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h3>Dhurvesh</h3>
            <p>Founder & Frontend Developer</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h3>Marine Biologist</h3>
            <p>Research & Content Specialist</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h3>Designer</h3>
            <p>UI / UX Expert</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Join Us in Protecting the Oceans 🌊</h2>
        {/* <button>Explore Marine Life</button> */}
        <button onClick={() => navigate("/")}>
      Explore Marine Life
    </button>
      </section>

    </div>
  );
}
