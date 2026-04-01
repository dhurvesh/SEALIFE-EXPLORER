import Crab from "../../assets/Slider/Crab.jpg";
import MANATEE from "../../assets/Slider/MANATEE!!.jpg";
import penguin from "../../assets/Slider/penguin.jpg";

export const animalDetails = [
  {
    id: 0,
    name: "Crab",
    scientificName: "Brachyura",
    family: "Decapoda",
    image: Crab,
    sections: {
      Description: [
        "Crabs have a strong exoskeleton.",
        "They belong to Decapoda.",
        "They use claws for defense."
      ],
      Habitat: [
        "Found in oceans, rivers, and land.",
      ],
      Diet: [
        "Omnivorous feeders."
      ],
      "Interesting Facts": [
        "They can regrow limbs.",
        "They walk sideways."
      ]
    }
  },

  {
    id: 1,
    name: "Manatee",
    scientificName: "Trichechus",
    family: "Trichechidae",
    image: MANATEE,
    sections: {
      Description: ["Large gentle mammals"],
      Habitat: ["Warm waters"],
      Diet: ["Plants"],
      "Interesting Facts": ["Called sea cows"]
    }
  },

  {
    id: 2,
    name: "Penguin",
    scientificName: "Sphenisciformes",
    family: "Spheniscidae",
    image: penguin,
    sections: {
      Description: ["Flightless birds"],
      Habitat: ["Antarctica"],
      Diet: ["Fish"],
      "Interesting Facts": ["Great swimmers"]
    }
  }
];