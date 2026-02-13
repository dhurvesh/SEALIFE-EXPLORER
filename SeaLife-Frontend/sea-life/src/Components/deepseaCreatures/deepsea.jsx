import "./DeepSea.css";
import angler from "../../assets/DeepSea/angler.png";
import oar from "../../assets/DeepSea/oar.png";

export default function DeepSea() {
  return (
    <div className="deepsea-page">
      <h2 className="deepsea-title">Deep Sea Creatures</h2>

      <div className="deepsea-grid">
        {/* Angler Fish */}
        <div className="deepsea-card angler">
          <h1 className="fish-heading">Angler Fish</h1>

          <img
            src={angler}
            alt="Angler Fish"
            className="fish-img angler-img"
          />

          <p className="fish-desc">
The Anglerfish is a grotesque and fascinating deep-sea predator, known primarily for the unique hunting method of the large females. These fish are characterized by their bulbous, often dark-colored bodies, massive mouths, and sharp, inward-pointing teeth, which allow them to swallow prey larger than themselves. Their most famous feature is the illicium, a modified dorsal fin spine that extends over the mouth and ends in the esca, a glowing lure powered by bioluminescent bacteria. This light attracts unsuspecting fish and crustaceans in the perpetual darkness of the deep ocean (the Mesopelagic and Bathypelagic zones). Anglerfish also exhibit extreme sexual dimorphism; the males are tiny dwarfs that lack the lure and, in many species, use a bizarre reproductive strategy called sexual parasitism, permanently fusing to the female's body to secure a lifelong mate and a constant supply of sperm.
          </p>

          <span className="read-more">Read More</span>
        </div>

        {/* Oar Fish */}
        <div className="deepsea-card oar">
          <h1 className="fish-heading green">OAR Fish </h1>
          <img
            src={oar}
            alt="Oar Fish"
            className="fish-img oar-img"
          />

          <div className="fish-features">
            <h4>Physical Features</h4>
            <ul>
              <li>Longest bony fish in the world</li>
              <li>Ribbon-like silvery body</li>
              <li>Scarlet dorsal fin</li>
            </ul>
          </div>

          <span className="read-more">Read More</span>
        </div>
      </div>
    </div>
  );
}
