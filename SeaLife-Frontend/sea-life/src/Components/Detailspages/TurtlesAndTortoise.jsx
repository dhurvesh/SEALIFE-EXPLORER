import "./TurtlesAndTortoise.css";

import { useState } from "react";

import loggerhead from "../../assets/turtles/loggerhead-turtle.png";
import hawksbill from "../../assets/turtles/Hawksbill-turtle.png";
import greenTurtle from "../../assets/turtles/Green-turtle.png";
import leatherback from "../../assets/turtles/leatherback-turtle.png";

import sulcata from "../../assets/tortoise/sulcata-tortoise.png";
import desert from "../../assets/tortoise/desert-tortoise.png";
import aldabra from "../../assets/tortoise/Aldabra-giant-tortoise.png";
import redFooted from "../../assets/tortoise/red_headed_tortoise.png";

export default function TurtlesAndTortoise() {

  const [selected, setSelected] = useState(null);

  return (
    <div className="tt-wrapper">

      {/* TURTLES */}
      <section className="tt-section">
        <h2 className="tt-title">TURTLES</h2>

        <div className="turtle-grid">
          {/* <TortoiseCard title="Loggerhead Turtles" img={loggerhead} bg="beige" /> */}
          <TortoiseCard
            title="Loggerhead Turtles"
            img={loggerhead}
            bg="beige"
            onClick={() =>
              setSelected({
                title: "Loggerhead Turtle",
                img: loggerhead,
                bg: "beige",
                details: {
                  "Body & Size": [
                    "Shell length: 80 to 110 cm",
                    "Weight: 70 to 180 kg",
                    "Shell color: Reddish-brown (top), yellowish underside"
                  ],
                  "Habitat": [
                    "Found in tropical and subtropical oceans worldwide",
                    "Common in coastal waters, bays, and estuaries"
                  ],
                  "Special Features": [
                    "Named for their large heads and strong jaws",
                  ]
                }
              })
            }
          />
          {/* <TortoiseCard title="Hawksbill Turtles" img={hawksbill} bg="sand" /> */}
          <TortoiseCard
            title="Hawksbill Turtles"
            img={hawksbill}
            bg="sand"
            onClick={() =>
              setSelected({
                title: "Hawksbill Turtle",
                img: hawksbill,
                bg: "sand",
                details: {
                  "Body & Size": [
                    "Shell length: 60 to 90 cm",
                    "Weight: 40 to 80 kg",
                    "Beak: Sharp, curved (like a hawk 🦅)",
                    "Shell: Beautiful overlapping scales (brown, amber pattern)"
                  ],
                  "Habitat": [
                    "Found in tropical oceans worldwide",
                    "Mostly lives near coral reefs"
                  ],
                  "Special Features": [
                    "Only turtle that mainly eats sponges",
                    "Its beak helps it reach food in coral crevices"
                  ]
                }
              })
            }
          />
          {/* <TortoiseCard title="Green Turtle" img={greenTurtle} bg="blue" /> */}
          <TortoiseCard
            title="Green Turtles"
            img={greenTurtle}
            bg="blue"
            onClick={() =>
              setSelected({
                title: "Green Turtle",
                img: greenTurtle,
                bg: "blue",
                details: {
                  "Body & Size": [
                    "Shell length: 80 to 120 cm",
                    "Weight: 100 to 180 kg",
                    "Shell color: Olive green to brown"
                  ],
                  "Habitat": [
                    "Found in tropical and subtropical oceans worldwide",
                    "Lives near coastal waters, seagrass beds, and coral reefs"
                  ],
                  "Special Features": [
                    "One of the largest sea turtles",
                    "Helps maintain healthy seagrass ecosystems"
                  ]
                }
              })
            }
          />
          {/* <TortoiseCard title="Leatherback Turtles" img={leatherback} bg="rose" /> */}
          <TortoiseCard
            title="Leatherback Turtles"
            img={leatherback}
            bg="rose"
            onClick={() =>
              setSelected({
                title: "Leatherback Turtle",
                img: leatherback,
                bg: "rose",
                details: {
                  "Body & Size": [
                    "Shell length: 120 to 180 cm",
                    "Weight: 250 to 700 kg",
                    "Shell type: Not hard – rubbery, leathery skin",
                    "Body shape: Long and streamlined"
                  ],
                  "Habitat": [
                    "Found in all oceans (tropical to cold waters)",
                    "Can travel very long distances across oceans"
                  ],
                  "Special Features": [
                    "Largest sea turtle in the world 🏆",
                    "Can survive in cold waters due to special body adaptations"
                  ]
                }
              })
            }
          />
        </div>
      </section>

      {/* TORTOISE */}
      <section className="tt-section">
        <h2 className="tt-title">TORTOISE</h2>

        <div className="tortoise-grid">
          {/* <TortoiseCard title="Sulcata Tortoise" img={sulcata} bg="beige" /> */}
          <TortoiseCard
            title="Sulcata Tortoise"
            img={sulcata}
            bg="beige"
            onClick={() =>
              setSelected({
                title: "Sulcata Tortoise",
                img: sulcata,
                bg: "beige",
                details: {
                  "Body & Size": [
                    "Shell length: 60 to 90 cm",
                    "Weight: 45 to 100 kg",
                    "Shell color: Sandy brown to yellow"
                  ],
                  "Habitat": [
                    "Native to African deserts and dry regions",
                    "Found in:",
                    "Sahara Desert",
                    "Sahel region"
                  ],
                  "Special Features": [
                    "Third largest tortoise in the world",
                    "Very strong and excellent digger"
                  ]
                }
              })
            }
          />
          {/* <TortoiseCard title="Desert Tortoise" img={desert} bg="sand" /> */}
          <TortoiseCard
            title="Desert Tortoise"
            img={desert}
            bg="sand"
            onClick={() =>
              setSelected({
                title: "Desert Tortoise",
                img: desert,
                bg: "sand",
                details: {
                  "Body & Size": [
                    "Shell length: 25 to 36 cm",
                    "Weight: 4 to 7 kg",
                    "Shell color: Brown to tan",
                    "Body: Thick legs adapted for digging"
                  ],
                  "Habitat": [
                    "Found in desert regions of: Southwestern United States , Northwestern Mexico",
                    "Lives in hot, dry areas like the Mojave Desert"
                  ],
                  "Special Features": [
                    "Can store water in its body for long periods",
                    "Survives in extremely harsh desert conditions"
                  ]
                }
              })
            }
          />
          {/* <TortoiseCard title="Aldabra Giant Tortoise" img={aldabra} bg="blue" /> */}
          <TortoiseCard
            title="Aldabra Giant Tortoise"
            img={aldabra}
            bg="blue"
            onClick={() =>
              setSelected({
                title: "Aldabra Giant Tortoise",
                img: aldabra,
                bg: "blue",
                details: {
                  "Body & Size": [
                    "Shell length: 100 to 120 cm",
                    "Weight: 150 to 250 kg",
                    "Shell color: Dark brown to grey",
                    "Body: Massive with thick, sturdy legs"
                  ],
                  "Habitat": [
                    "Native to the Aldabra Atoll in the Seychelles",
                    "Lives in grasslands, mangroves, and coastal areas"
                  ],
                  "Special Features": [
                    "Can live over a century",
                    "Stores fat and water to survive harsh conditions"
                  ]
                }
              })
            }
          />
          {/* <TortoiseCard title="Red Footed Tortoise" img={redFooted} bg="rose" /> */}
          <TortoiseCard
            title="Red Footed Tortoise"
            img={redFooted}
            bg="rose"
            onClick={() =>
              setSelected({
                title: "Red Footed Tortoise",
                img: redFooted,
                bg: "rose",
                details: {
                  "Body & Size": [
                    "Shell length: 30 to 35 cm",
                    "Weight: 8 to 15 kg",
                    "Shell color: Dark brown/black with yellow patterns",
                    "Legs: Distinct red or orange scales on legs and head"
                  ],
                  "Habitat": [
                    "Found in tropical forests and savannas of: South America (Brazil, Paraguay, Argentina)"
                  ],
                  "Special Features": [
                    "One of the few tortoises that is omnivorous",
                    "Bright red/orange legs make it easy to identify"
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

function TortoiseCard({ title, img, bg, onClick }) {
  return (
    <div className={`tortoise-card ${bg}`} onClick={onClick}>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <span>read more...</span>
    </div>
  );
}
