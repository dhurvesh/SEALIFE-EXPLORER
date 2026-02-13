import seawrasse from "../../assets/Beauty/BettalikeSeaWrasse.png";
import bluetang from "../../assets/Beauty/BlueTang.png";
import pipefish from "../../assets/Beauty/Ornate_Ghost_Pipefish-removebg-preview.png";
import lionfish from "../../assets/Beauty/Lionfish.png"; // 👈 add image

export const fishData = {
  seawrasse: {
    name: "Betta-like Sea Wrasse",
    image: seawrasse,
    bgColor: "#e10600",
    scientific: "Labroides dimidiatus",
    family: "Labridae",
    sections: [
      {
        title: "Physical Appearance",
        points: [
          "Flowing fins resembling Betta fish.",
          "Bright blue and turquoise hues.",
          "Graceful and elegant swimming."
        ]
      },
      {
        title: "Behavior",
        points: [
          "Acts as a reef cleaner fish.",
          "Peaceful and non-aggressive."
        ]
      }
    ]
  },

  bluetang: {
    name: "Blue Tang",
    image: bluetang,
    bgColor: "#6a0572",
    scientific: "Paracanthurus hepatus",
    family: "Acanthuridae",
    sections: [
      {
        title: "Physical Appearance",
        points: [
          "Bright blue body with a yellow tail.",
          "Flat, oval-shaped body."
        ]
      },
      {
        title: "Interesting Facts",
        points: [
          "Popularized by animated movies.",
          "Very fast and agile swimmer."
        ]
      }
    ]
  },

  pipefish: {
    name: "Ornate Ghost Pipefish",
    image: pipefish,
    bgColor: "#4b7f0e",
    scientific: "Solenostomus paradoxus",
    family: "Solenostomidae",
    sections: [
      {
        title: "Camouflage",
        points: [
          "Leaf-like body for perfect disguise.",
          "Blends with coral and seaweed."
        ]
      },
      {
        title: "Behavior",
        points: [
          "Slow-moving ambush predator.",
          "Rare and difficult to spot."
        ]
      }
    ]
  },

  lionfish: {
    name: "Lion Fish",
    image: lionfish,
    bgColor: "#b63a00",
    scientific: "Pterois volitans / Pterois miles",
    family: "Scorpaenidae",
    sections: [
      {
        title: "Physical Appearance",
        points: [
          "Striking red, white, and brown stripes.",
          "Long, flowing venomous spines.",
          "Can grow up to 38 cm (15 inches)."
        ]
      },
      {
        title: "Venom & Defense",
        points: [
          "Venomous dorsal, pelvic, and anal spines.",
          "Painful sting but rarely fatal to humans.",
          "Uses venom only for self-defense."
        ]
      },
      {
        title: "Behavior & Ecology",
        points: [
          "Slow-moving and stealthy hunter.",
          "Invasive species in Atlantic regions.",
          "Can lay up to 30,000 eggs frequently."
        ]
      }
    ]
  }
};
