import "./MarineCards.css";

import { useState } from "react";

import beardedSeal from "../../assets/seals/Bearded-seal.png";
import elephantSeal from "../../assets/seals/Elephant-Seal.png";
import greySeal from "../../assets/seals/Grey-Seal.png";
import harpSeal from "../../assets/seals/Harp-Seal.png";

import atlanticStingray from "../../assets/stingrays/Atlantic-Stingray.png";
import yellowStingray from "../../assets/stingrays/Yellow-Stingray.png";
import xinguRay from "../../assets/stingrays/Xingu-River-Ray.png";
import blueSpottedRay from "../../assets/stingrays/Blue-spotted-Ray.png";

export default function MarineCards() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="marine-wrapper">

      {/* SEALS */}
      <section className="marine-section">
        <h2 className="marine-title">SEALS</h2>

        <div className="marine-grid">
          {/* <Card title="Bearded Seal" img={beardedSeal} bg="purple" /> */}
          <Card
            title="Bearded Seal"
            img={beardedSeal}
            bg="purple"
            onClick={() =>
              setSelected({
                title: "Bearded Seal",
                img: beardedSeal,
                bg: "purple",
                details: {
                  "Body & Size": [
                    "Length: 2.1 to 2.7 m",
                    "Weight: 200 to 430 kg"
                  ],
                  Habitat: [
                    "Arctic waters",
                    "Prefers shallow coastal areas"
                  ],
                  "Special Features": [
                    "Long whiskers (beard-like)",
                    "Excellent diver"
                  ]
                }
              })
            }
          />
          {/* <Card title="Northern Elephant Seal" img={elephantSeal} bg="blue" /> */}
          <Card
            title="Northern Elephant Seal"
            img={elephantSeal}
            bg="blue"
            onClick={() =>
              setSelected({
                title: "Northern Elephant Seal",
                img: elephantSeal,
                bg: "blue",
                details: {
                  "Body & Size": [
                    "Males (bulls):",
                    "Length: 4 – 5 meters",
                    "Weight: 1,500 – 2,300 kg",

                    "Females:",
                    "Length: 2.5 – 3 meters",
                    "Weight: 400 – 900 kg"
                  ],
                  Habitat: [
                    "Found along the Pacific coast of North America: California, Mexico, Alaska",
                    "Spend most of their life in the open ocean, but come to land for: Breeding, Molting"
                  ],
                  "Special Features": [
                    "Adult males have a large inflatable trunk-like nose (proboscis) 🐘",
                    "Used to: Make loud roaring sounds, Attract females, Intimidate rival males"
                  ]
                }
              })
            }
          />
          {/* <Card title="Grey Seal" img={greySeal} bg="green" /> */}
          <Card
            title="Grey Seal"
            img={greySeal}
            bg="green"
            onClick={() =>
              setSelected({
                title: "Grey Seal",
                img: greySeal,
                bg: "green",
                details: {
                  "Body & Size": [
                    "Males (bulls):",
                    "Length: 2.3 – 3.0 meters",
                    "Weight: 170 – 310 kg",

                    "Females:",
                    "Length: 1.6 – 2.0 meters",
                    "Weight: 100 – 190 kg"
                  ],
                  Habitat: [
                    "Found in the North Atlantic Ocean, especially: Coastal areas of the UK, Ireland, Eastern Canada, Northeastern US",
                    "Prefer: Rocky shores, Sandy beaches, Islands for breeding and resting"
                  ],
                  "Special Features": [
                    "Long, horse-like head (roman nose)",
                    "Large, widely spaced nostrils"
                  ]
                }
              })
            }
          />
          {/* <Card title="Harp Seal" img={harpSeal} bg="cyan" /> */}
          <Card
            title="Harp Seal"
            img={harpSeal}
            bg="cyan"
            onClick={() =>
              setSelected({
                title: "Harp Seal",
                img: harpSeal,
                bg: "cyan",
                details: {
                  "Body & Size": [
                    "Length: 1.7 – 2.0 meters",
                    "Weight: 115 – 180 kg"
                  ],
                  Habitat: [
                    "Found in the North Atlantic and Arctic Oceans, mainly: Greenland, Canada, Russia",
                    "Prefer: Pack ice and coastal waters for breeding and molting"
                  ],
                  "Special Features": [
                    "Adults have a distinct black marking shaped like a harp on their back",
                    "This unique pattern helps in easy identification"
                  ]
                }
              })
            }
          />
        </div>
      </section>

      {/* STINGRAYS */}
      <section className="marine-section">
        <h2 className="marine-title">STINGRAYS</h2>

        <div className="marine-grid">
          {/* <Card title="Atlantic Stingray" img={atlanticStingray} /> */}
          <Card
            title="Atlantic Stingray"
            img={atlanticStingray}
            bg="blue"
            onClick={() =>
              setSelected({
                title: "Atlantic Stingray",
                img: atlanticStingray,
                bg: "blue",
                details: {
                  "Body & Size": [
                    "Disc Width: 25 – 60 cm",
                    "Length (including tail): Up to ~90 cm"
                  ],
                  Habitat: [
                    "Found in: Western Atlantic Ocean from New Jersey to Brazil",
                    "Unique feature: Can tolerate both saltwater and freshwater environments"
                  ],
                  "Special Features": [
                    "Venomous Stinger",
                    "Salt & Freshwater Adaptation",
                    "Camouflage Ability",
                    "Top-Mounted Eyes & Bottom Mouth"
                  ]
                }
              })
            }
          />
          {/* <Card title="Yellow Stingray" img={yellowStingray} /> */}
          <Card
            title="Yellow Stingray"
            img={yellowStingray}
            bg="yellow"
            onClick={() =>
              setSelected({
                title: "Yellow Stingray",
                img: yellowStingray,
                bg: "yellow",
                details: {
                  "Body & Size": [
                    "Length(including tail): ~70 cm",
                    "Disc Width: 30 – 36 cm"
                  ],
                  Habitat: [
                    "Found in: Western Atlantic Ocean from North Carolina to Brazil",
                    "Prefer: Shallow coastal waters, Estuaries, Mangroves, Seagrass beds"
                  ],
                  "Special Features": [
                    "Bright Yellow Coloration",
                    "Venomous Tail Spine",
                    "Sand Camouflage",
                    "Nocturnal Hunter"
                  ]
                }
              })
            }
          />
          {/* <Card title="Xingu River Ray" img={xinguRay} /> */}
          <Card
            title="Xingu River Ray"
            img={xinguRay}
            bg="blue"
            onClick={() =>
              setSelected({
                title: "Xingu River Ray",
                img: xinguRay,
                bg: "blue",
                details: {
                  "Body & Size": [
                    "Disc Width: 30 – 45 cm (can grow larger in captivity)",
                    "Body Shape: Round, flat disc"
                  ],
                  Habitat: [
                    "Native to: Xingu River basin in Brazil",
                    "Lives in: Freshwater river environments with strong currents and rocky bottoms"
                  ],
                  "Special Features": [
                    "Unique Black & White Pattern",
                    "Freshwater Adaptation",
                    "Rocky Habitat Specialist",
                    "Venomous Spine"
                  ]
                }
              })
            }
          />
          {/* <Card title="Blue Spotted Ray" img={blueSpottedRay} /> */}
          <Card
            title="Blue Spotted Ray"
            img={blueSpottedRay}
            bg="blue"
            onClick={() =>
              setSelected({
                title: "Blue Spotted Ray",
                img: blueSpottedRay,
                bg: "blue",
                details: {
                  "Body & Size": [
                    "Disc Width: 25 – 35 cm",
                    "Length (including tail): Up to ~70 cm"
                  ],
                  Habitat: [
                    "Found in: Indo-Pacific region: Red Sea, East Africa, Australia",
                    "Common in: Coral reefs, Sandy bottoms, Seagrass beds"
                  ],
                  "Special Features": [
                    "Bright Blue Spots",
                    "Venomous Tail Spine",
                    "Reef Adaptation",
                    "Camouflage & Hiding"
                  ]
                }
              })
            }
          />
        </div>
      </section>

      {selected && (
        <div className="popup-overlay" onClick={() => setSelected(null)}>
          <div
            className={`popup-box ${selected.bg}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-content">

              {/* LEFT IMAGE */}
              <div className="popup-left">
                <img src={selected.img} alt="" />
              </div>

              {/* RIGHT TEXT */}
              <div className="popup-right">
                <h2>{selected.title}</h2>

                {selected.details &&
                  Object.entries(selected.details).map(([title, items]) => (
                    <div key={title}>
                      <h3>{title}</h3>
                      <ul>
                        {items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>

            </div>

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}



function Card({ title, img, bg, onClick }) {
  return (
    <div className={`marine-card ${bg || ""}`} onClick={onClick}>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <span>read more...</span>
    </div>
  );
}
