import "./ApexPredators.css";

import whaleShark from "../../assets/ApexPredators/whale-shark.png";
import hammerhead from "../../assets/ApexPredators/hammerhead.png";
import megalodon from "../../assets/ApexPredators/megalodon.png";

export default function ApexPredators() {
  return (
    <section className="apex-section">
      <h2 className="apex-title">The Apex Predators</h2>

      <div className="apex-grid">
        {/* WHALE SHARK */}
        <div
          className="apex-card"
          style={{ backgroundImage: `url(${whaleShark})` }}
        >
          <div className="apex-overlay">
            <h3>★ WHALE SHARK ★</h3>
            <p>
              Whale sharks are filter feeders and the largest fish in the ocean.
              Despite their massive size, they feed on plankton and small fish.
            </p>
          </div>
        </div>

        {/* HAMMERHEAD */}
        <div
          className="apex-card"
          style={{ backgroundImage: `url(${hammerhead})` }}
        >
          <div className="apex-overlay">
            <h3>“THE HAMMERHEAD”</h3>
            <p>
              The hammerhead’s unique head shape enhances vision and
              electro-reception, making it a precise hunter.
            </p>
          </div>
        </div>

        {/* MEGALODON */}
        <div
          className="apex-card"
          style={{ backgroundImage: `url(${megalodon})` }}
        >
          <div className="apex-overlay">
            <h3>“THE MEGALODON”</h3>
            <p>
              The extinct megalodon possessed an estimated bite force strong
              enough to crush whales.
            </p>

            <div className="apex-meta">
              <p><strong>Body Length:</strong> 45–60 ft</p>
              <p><strong>Tooth Height:</strong> 5.7 in</p>
              <p><strong>Status:</strong> Extinct</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
