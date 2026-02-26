import { useState } from "react";
import "./Beautyofsea.css";
import { useFavourites } from "../../Components/pages/Favourites/FavouritesContext.jsx";

import FishDetails from "./FishDetails.jsx";
import { fishData } from "./FishData.js";

export default function Beautyofsea() {
  const [activeFish, setActiveFish] = useState(null);
  const { toggleFavourite, isFavourite } = useFavourites();

  return (
    <div className="page">

      <h2 className="section-title">Beauties of the Sea</h2>

      <section className="cards">

        {Object.values(fishData).map((fish) => {
          const fav = isFavourite(fish.name);

          return (
            <div
              key={fish.name}
              className="card"
              onClick={() => setActiveFish(fish)}
            >
              {/* ❤️ Favourite Button */}
              <button
                className={`fav-btn-animated ${fav ? "active" : ""} ${fav ? "pop" : ""
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavourite({
                    id: fish.name,
                    name: fish.name,
                    image: fish.image,
                  });

                  // force animation restart
                  e.currentTarget.classList.remove("pop");
                  void e.currentTarget.offsetWidth;
                  e.currentTarget.classList.add("pop");
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

              <img src={fish.image} alt={fish.name} />
              <p>{fish.name}</p>
            </div>
          );
        })}

      </section>

      {activeFish && (
        <FishDetails
          fish={activeFish}
          onClose={() => setActiveFish(null)}
        />
      )}
    </div>
  );
}