import "./NgoPage.css";
import tethys from "../../../assets/ngo/tethys.png";
import ocn from "../../../assets/ngo/OCN.png";

const ngos = [
  {
    id: 1,
    name: "TETHYS",
    logo: tethys,
    text: [
      "A non-profit research organisation supporting marine conservation through science and public awareness with a focus on large marine vertebrates.",
      "37 years of experience",
      "Since 1986 we are committed to preserve marine environment through the provision of scientific knowledge."
    ],
    link: "https://tethys.org/"
  },
  {
    id: 2,
    name: "Ocean Conservation Namibia",
    logo: ocn,
    text: [
      "Seal Rescues & Ocean Conservation in Namibia",
      "Namibia is home to over 1 million Cape Fur Seals. These intelligent, curious animals are increasingly at risk from abandoned fishing nets and lines, marine plastic waste, overfishing, illegal fishing and aqua farming.",
      "Ocean Conservation Namibia is dedicated to safeguarding marine life along the Namibian coastline."
    ],
    link: "https://www.ocnamibia.org/"
  }
];

const NgoPage = () => {
  return (
    <div className="ngo-page">
      {ngos.map((ngo) => (
        <div className="ngo-card" key={ngo.id}>
          <img src={ngo.logo} alt={ngo.name} className="ngo-logo" />

          <div className="ngo-content">
            {ngo.text.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            <a
              href={ngo.link}
              target="_blank"
              rel="noreferrer"
              className="ngo-link"
            >
              {ngo.link}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NgoPage;
