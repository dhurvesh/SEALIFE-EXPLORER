import "./TurtlesAndTortoise.css";

import loggerhead from "../../assets/turtles/loggerhead-turtle.png";
import hawksbill from "../../assets/turtles/Hawksbill-turtle.png";
import greenTurtle from "../../assets/turtles/Green-turtle.png";
import leatherback from "../../assets/turtles/leatherback-turtle.png";

import sulcata from "../../assets/tortoise/sulcata-tortoise.png";
import desert from "../../assets/tortoise/desert-tortoise.png";
import aldabra from "../../assets/tortoise/Aldabra-giant-tortoise.png";
import redFooted from "../../assets/tortoise/red_headed_tortoise.png";

export default function TurtlesAndTortoise() {
  return (
    <div className="tt-wrapper">

      {/* TURTLES */}
      <section className="tt-section">
        <h2 className="tt-title">TURTLES</h2>

        <div className="turtle-grid">
          <TortoiseCard title="Loggerhead Turtles" img={loggerhead} bg="beige" />
          <TortoiseCard title="Hawksbill Turtles" img={hawksbill} bg="sand" />
          <TortoiseCard title="Green Turtle" img={greenTurtle} bg="blue" />
          <TortoiseCard title="Leatherback Turtles" img={leatherback} bg="rose" />
        </div>
      </section>

      {/* TORTOISE */}
      <section className="tt-section">
        <h2 className="tt-title">TORTOISE</h2>

        <div className="tortoise-grid">
          <TortoiseCard title="Sulcata Tortoise" img={sulcata} bg="beige" />
          <TortoiseCard title="Desert Tortoise" img={desert} bg="sand" />
          <TortoiseCard title="Aldabra Giant Tortoise" img={aldabra} bg="blue" />
          <TortoiseCard title="Red Footed Tortoise" img={redFooted} bg="rose" />
        </div>
      </section>

    </div>
  );
}

function TortoiseCard({ title, img, bg }) {
  return (
    <div className={`tortoise-card ${bg}`}>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <span>read more...</span>
    </div>
  );
}
