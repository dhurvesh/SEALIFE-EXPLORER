import { useState } from "react";
import "./OceanSlider.css";
import Crab from "../../assets/Slider/Crab.jpg";
import MANATEE from "../../assets/Slider/MANATEE!!.jpg";
import penguin from "../../assets/Slider/penguin.jpg";
import { useNavigate } from "react-router-dom";


const slides = [
  {
    id:0,
    title: "Marine Crustaceans of the Ocean",
    desc: "Crabs are marine crustaceans belonging to the order Decapoda. They have a hard outer shell (exoskeleton), five pairs of legs, and strong claws used for defense and catching food.",
    image: Crab,
    bg: "linear-gradient(to right, #e6b2ab, #ffffff)"
  },
  {
    id:1,
    title: "Meet the Manatee",
    desc: "Gentle giants of the sea that glide peacefully underwater.",
    image: MANATEE,
    bg: "linear-gradient(to right, #c9e7f2, #ffffff)"
  },
  {
    id:2,
    title: "The Unique World of Penguins",
    desc: "Penguins are flightless marine birds belonging to the order Sphenisciformes. They mainly live in the Southern Hemisphere, especially in Antarctica, and are well adapted to cold climates.",
    image: penguin,
    bg: "linear-gradient(to right, #9ed2c6, #ffffff)"
  }
];

export default function SeaSlider() {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="sea-slider"
      style={{ background: slides[index].bg }}
    >
      <div key={index} className="sea-left animate-text">
        <h1>{slides[index].title}</h1>
        <p>{slides[index].desc}</p>
        {/* <button><span>Learn More</span></button> */}
        <button onClick={() => navigate(`/details/${slides[index].id}`)}>
  <span>Learn More</span>
</button>
      </div>

      <div key={index + "img"} className="sea-right animate-img">
        <img src={slides[index].image} alt="sea" />
      </div>

      <div className="sea-arrows">
        <button onClick={prevSlide}>‹</button>
        <button onClick={nextSlide}>›</button>
      </div>
    </section>
  );
}
