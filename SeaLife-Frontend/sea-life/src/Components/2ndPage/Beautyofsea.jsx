import { useState } from "react";
import "./Beautyofsea.css";

import FishDetails from "./FishDetails.jsx";
import { fishData } from "./FishData.js"; 

export default function Beautyofsea() {
  const [activeFish, setActiveFish] = useState(null);

  return (
    <div className="page">

      {/* Title */}
      <h2 className="section-title">Beauties of the Sea</h2>

      {/* Cards */}
      <section className="cards">
        <div
          className="card red"
          onClick={() => setActiveFish(fishData.seawrasse)}
        >
          <img src={fishData.seawrasse.image} alt={fishData.seawrasse.name} />
          <p>{fishData.seawrasse.name}</p>
        </div>

        <div
          className="card purple"
          onClick={() => setActiveFish(fishData.bluetang)}
        >
          <img src={fishData.bluetang.image} alt={fishData.bluetang.name} />
          <p>{fishData.bluetang.name}</p>
        </div>

        <div
          className="card green"
          onClick={() => setActiveFish(fishData.pipefish)}
        >
          <img src={fishData.pipefish.image} alt={fishData.pipefish.name} />
          <p>{fishData.pipefish.name}</p>
        </div>

        <div
          className="card brown"
          onClick={() => setActiveFish(fishData.lionfish)}
        >
          <img src={fishData.lionfish.image} alt={fishData.lionfish.name} />
          <p>{fishData.lionfish.name}</p>
        </div>
      </section>

      {/* Fish Details Modal */}
      {activeFish && (
        <FishDetails
          fish={activeFish}
          onClose={() => setActiveFish(null)}
        />
      )}
    </div>
  );
}
