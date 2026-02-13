import "./MarineCards.css";

import beardedSeal from "../../assets/seals/Bearded-seal.png";
import elephantSeal from "../../assets/seals/Elephant-Seal.png";
import greySeal from "../../assets/seals/Grey-Seal.png";
import harpSeal from "../../assets/seals/Harp-Seal.png";

import atlanticStingray from "../../assets/stingrays/Atlantic-Stingray.png";
import yellowStingray from "../../assets/stingrays/Yellow-Stingray.png";
import xinguRay from "../../assets/stingrays/Xingu-River-Ray.png";
import blueSpottedRay from "../../assets/stingrays/Blue-spotted-Ray.png";

export default function MarineCards() {
  return (
    <div className="marine-wrapper">

      {/* SEALS */}
      <section className="marine-section">
        <h2 className="marine-title">SEALS</h2>

        <div className="marine-grid">
          <Card title="Bearded Seal" img={beardedSeal} bg="purple" />
          <Card title="Northern Elephant Seal" img={elephantSeal} bg="blue" />
          <Card title="Grey Seal" img={greySeal} bg="green" />
          <Card title="Harp Seal" img={harpSeal} bg="cyan" />
        </div>
      </section>

      {/* STINGRAYS */}
      <section className="marine-section">
        <h2 className="marine-title">STINGRAYS</h2>

        <div className="marine-grid">
          <Card title="Atlantic Stingray" img={atlanticStingray} />
          <Card title="Yellow Stingray" img={yellowStingray} />
          <Card title="Xingu River Ray" img={xinguRay} />
          <Card title="Blue Spotted Ray" img={blueSpottedRay} />
        </div>
      </section>

    </div>
  );
}

function Card({ title, img, bg }) {
  return (
    <div className={`marine-card ${bg || ""}`}>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <span>read more...</span>
    </div>
  );
}
