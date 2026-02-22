import { useState } from "react";
import "./OceanSlider.css";
import Crab from "../../assets/Slider/Crab.jpg";
import MANATEE from "../../assets/Slider/MANATEE!!.jpg";
import penguin from "../../assets/Slider/penguin.jpg";

const slides = [
  {
    title: "Discover the Sea",
    desc: "Explore the wonders of the ocean and its diverse marine life.",
    image: Crab,
    bg: "linear-gradient(to right, #e6b2ab, #ffffff)"
  },
  {
    title: "Meet the Manatee",
    desc: "Gentle giants of the sea that glide peacefully underwater.",
    image: MANATEE,
    bg: "linear-gradient(to right, #c9e7f2, #ffffff)"
  },
  {
    title: "Ocean Life",
    desc: "Dive into the deep blue and discover hidden creatures.",
    image: penguin,
    bg: "linear-gradient(to right, #9ed2c6, #ffffff)"
  }
];

export default function SeaSlider() {
  const [index, setIndex] = useState(0);

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
        <button>Learn More</button>
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
