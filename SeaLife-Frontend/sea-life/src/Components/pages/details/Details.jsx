import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Details.css";
import TurtlesAndTortoise from "../../Detailspages/TurtlesAndTortoise";
import MarineCards from "../../Detailspages/MarineCards";

import { useParams } from "react-router-dom";
import { animalDetails } from "../../Slider/Data.js";

export default function Details() {
const { id } = useParams();
const location = useLocation();  
 const whale =
    location.state ||
    animalDetails.find(item => item.id === Number(id));

  // const whale = location.state; // may be undefined
  const heroRef = useRef(null);

  

  // Scroll ONLY when whale exists
  useEffect(() => {
    if (whale && heroRef.current) {
      const timer = setTimeout(() => {
        heroRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [whale]);

  return (
    <div className="details-page">

      {/* GENERAL INFO – ALWAYS VISIBLE */}
      <section className="details-content">
        <h1 className="details-title">Ocean Details 🌊</h1>
        <p className="details-subtitle">
          Learn more about marine life and ocean conservation
        </p>

        <div className="details-grid">
          <div className="details-card">
            <h2>🐟 Marine Life</h2>
            <p>
              Oceans host millions of species—from coral reefs to deep-sea
              giants—many still undiscovered.
            </p>
          </div>

          <div className="details-card">
            <h2>🌍 Ocean Importance</h2>
            <p>
              Oceans generate over half of Earth’s oxygen and regulate climate,
              weather, and temperature.
            </p>
          </div>

          <div className="details-card">
            <h2>⚠️ Threats</h2>
            <p>
              Plastic pollution, climate change, and overfishing are rapidly
              damaging marine ecosystems.
            </p>
          </div>

          <div className="details-card">
            <h2>💙 Conservation</h2>
            <p>
              Ocean conservation protects biodiversity and ensures a sustainable
              future for all life.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WHALE – ONLY IF STATE EXISTS */}
      {whale && (
        <section className="selected-whale-hero" ref={heroRef}>
          <div className="whale-hero-layout">



            {/* LEFT INFO */}
            <div className="whale-hero-info">
              <h1>{whale.name}</h1>

              {whale.scientificName && (
                <p><strong>Scientific Name:</strong> {whale.scientificName}</p>
              )}

              {whale.family && (
                <p><strong>Family:</strong> {whale.family}</p>
              )}

              {whale.sections &&
                Object.entries(whale.sections).map(([title, items]) => (
                  <div className="info-section" key={title}>
                    <h3>{title}</h3>
                    <ul>
                      {items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            {/* RIGHT IMAGE */}
            <div className="whale-hero-image">
              <img src={whale.image} alt={whale.name} />
            </div>

          </div>
        </section>
      )}
      < TurtlesAndTortoise />
      < MarineCards />
    </div>
  );
}
