
import "./Home.css";
import whale from "../../assets/Whale/killerwhale.png";
import Graywhale from "../../assets/Whale/GrayWhale.png";
import Belugawhale from "../../assets/Whale/BelugaWhale.png";
import bluewhale from "../../assets/Whale/blueWhale.png";
import Humpbagwhale from "../../assets/Whale/hump-back.jpg";
import killerwhale from "../../assets/Whale/killer_whale_height_weight-removebg-preview.png";

import Beautyofsea from "../2ndPage/Beautyofsea.jsx";
import DeepSea from "../deepseaCreatures/deepsea.jsx";

import { useNavigate } from "react-router-dom";
import ApexPredators from "../ApexPredators/ApexPredators.jsx";
import CircularImages from "../CircularImages/CircularImages.jsx";

export default function Home() {
  const navigate = useNavigate();

  const fishGallery = [
    { name: "whale", image: whale,  color: "#F97316" },
    { name: "Graywhale", image: Graywhale, color: "#1E4FD7" },
    { name: "bluewhale", image: bluewhale, color: "#F97316" },
    { name: "Humpbagwhale", image: Humpbagwhale, color: "#8B5CF6" },
    { name: "killerwhale", image: killerwhale, color: "#D7261E" },
  ];


  const whaleData = [
    {
      id: "gray",
      image: Graywhale,
      sections: {
        name: ["Gray Whale"],
        scientificName: ["Eschrichtius robustus"],
        family: ["Eschrichtiidae"],
        appearance: ["Gray whales have mottled gray skin covered with barnacles and scars."],
        diet: ["Feeds on small crustaceans and benthic organisms."],
        behavior: ["Known for one of the longest migrations of any mammal."],
        description: ["Gray whales migrate over 20,000 km annually and are often friendly toward boats."]
      }
    },
    {
      id: "beluga",
      image: Belugawhale,
      sections: {
        name: ["Beluga Whale"],
        scientificName: ["Delphinapterus leucas"],
        family: ["Monodontidae"],
        appearance: ["Pure white body with a flexible neck and expressive face."],
        diet: ["Fish, squid, shrimp, and worms."],
        behavior: ["Highly vocal and social — known as the canary of the sea."],
        description: ["Belugas are extremely intelligent and communicate using clicks and whistles."]
      }
    },
    {
      id: "blue",
      image: bluewhale,
      sections: {
        name: ["Blue Whale"],
        scientificName: ["Balaenoptera musculus"],
        family: ["Balaenopteridae"],
        appearance: ["Massive blue-gray body with a broad tail fin."],
        diet: ["Consumes up to 4 tons of krill daily."],
        behavior: ["Mostly solitary but migrates long distances."],
        description: ["The blue whale is the largest animal ever known to exist."]
      }
    },
    {
      id: "humpback",

      image: Humpbagwhale,
      sections: {
        name: ["Humpback Whale"],
        scientificName: ["Megaptera novaeangliae"],
        family: ["Balaenopteridae"],
        appearance: ["Long pectoral fins and knobby head."],
        diet: ["Krill and small schooling fish."],
        behavior: ["Famous for complex songs and acrobatic breaches."],
        description: ["Humpback whales use songs to communicate during mating season."]
      }
    }
  ];


  return (
    <div className="app">
      <section className="hero">
        <div className="hero-text">
          <h1>Killer Whale</h1>
          <p>
            Killer whales, or orcas, are intelligent marine mammals found in oceans worldwide.
            They’re apex predators, feeding on fish, seals, and even whales.
            Recognized by their black-and-white coloring, orcas live in social pods led by females.
            They communicate using clicks and whistles and can swim up to 56 km/h.
          </p>
        </div>

        <div className="hero-image">
          <img src={whale} alt="Whale" className="home-whale" />
          <span className="size-label">32 Feet / 6 Tons</span>
          <img src={killerwhale} alt="Killer Whale" className="killer-whale" />
        </div>
      </section>

      {/* Whale Cards */}
      <section className="cards">
        {whaleData.map((whale) => (
          <div
            key={whale.id}
            className="card"
            onClick={() => navigate("/details", { state: whale })}
          >
            <img src={whale.image} alt={whale.name} />
            <h3>{whale.sections.name[0]}</h3>
            <span>Read More</span>
          </div>
        ))}
      </section>

      <Beautyofsea />
      <DeepSea />
      <ApexPredators />
      {/* <CircularImages /> */}
      <CircularImages fishes={fishGallery} />

    </div>
  );
}
