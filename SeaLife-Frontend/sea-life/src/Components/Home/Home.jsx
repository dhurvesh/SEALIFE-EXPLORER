
import "./Home.css";
import whale from "../../assets/Whale/killerwhale.png";
import Graywhale from "../../assets/Whale/GrayWhale.png";
import Belugawhale from "../../assets/Whale/BelugaWhale.png";
import bluewhale from "../../assets/Whale/blueWhale.png";
import Humpbagwhale from "../../assets/Whale/hump-back.jpg";
import killerwhale from "../../assets/Whale/killer_whale_height_weight-removebg-preview.png";

import atlanticStingray from "../../assets/stingrays/Atlantic-Stingray.png";
import yellowStingray from "../../assets/stingrays/Yellow-Stingray.png";
import xinguRay from "../../assets/stingrays/Xingu-River-Ray.png";
import blueSpottedRay from "../../assets/stingrays/Blue-spotted-Ray.png";
import SpinyRay from "../../assets/stingrays/Spiny-Butterfly-Ray.png";
import BatRay from "../../assets/stingrays/Bat-ray.png";
import EagleRay from "../../assets/stingrays/Eagle-Ray.png";
import SouthernSringray from "../../assets/stingrays/Southern-Stingray.png";

import Beautyofsea from "../2ndPage/Beautyofsea.jsx";
import DeepSea from "../deepseaCreatures/deepsea.jsx";

import { useNavigate } from "react-router-dom";
import ApexPredators from "../ApexPredators/ApexPredators.jsx";
import CircularImages from "../CircularImages/CircularImages.jsx";

import OceanSlider from "../Slider/OceanSlider";

import { useFavourites } from "../pages/Favourites/FavouritesContext.jsx";


export default function Home() {
  const navigate = useNavigate();

  const fishGallery = [
    { name: "atlanticStingray", image: atlanticStingray, color: "#F97316" },
    { name: "yellowStingray", image: yellowStingray, color: "#1E4FD7" },
    { name: "xinguRay", image: xinguRay, color: "#F97316" },
    { name: "blueSpottedRay", image: blueSpottedRay, color: "#8B5CF6" },
    { name: "SpinyRay", image: SpinyRay, color: "#1E4FD7" },
    { name: "BatRay", image: BatRay, color: "#F97316" },
    { name: "EagleRay", image: EagleRay, color: "#8B5CF6" },
    { name: "SouthernSringray", image: SouthernSringray, color: "#1E4FD7" },
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
  const { toggleFavourite, isFavourite } = useFavourites();

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
        {whaleData.map((whale) => {
          const fav = isFavourite(whale.id);

          return (
            <div
              key={whale.id}
              className="card"
              onClick={() => navigate("/details", { state: whale })}
            >
              {/* ❤️ Favourite Button */}
              <button
                className={`fav-btn-animated ${fav ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 prevent card click
                  toggleFavourite({
                    id: whale.id,
                    name: whale.sections.name[0],
                    image: whale.image,
                  });
                }}
              >
                <svg viewBox="0 0 24 24" className="heart-icon">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 6 4 4 6.5 4 
              8.04 4 9.54 4.81 10.4 6.09 
              11.26 4.81 12.76 4 14.3 4 
              16.8 4 18.8 6 18.8 8.5 
              18.8 12.28 15.4 15.36 10.25 20.04 
              L12 21.35z"/>
                </svg>
                <span className="burst"></span>
              </button>

              <img src={whale.image} alt={whale.sections.name[0]} />
              <h3>{whale.sections.name[0]}</h3>
              <span>Read More</span>
            </div>
          );
        })}
      </section>

      <Beautyofsea />
      <DeepSea />
      <ApexPredators />
      {/* <CircularImages /> */}
      <CircularImages fishes={fishGallery} />
      <OceanSlider />



    </div>
  );
}
