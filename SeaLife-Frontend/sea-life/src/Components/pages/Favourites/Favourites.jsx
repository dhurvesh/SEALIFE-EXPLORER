import "./Favourites.css";
import { useFavourites } from "./FavouritesContext";

export default function Favourites() {
  const { favourites } = useFavourites();

  return (
    <div className="favourites-page">
      <h1 className="favourites-title">Your Favourites 💙</h1>
      <p className="favourites-subtitle">
        Sea creatures and ocean items you love
      </p>

      {favourites.length === 0 ? (
        <div className="favourites-empty">
          <p>No favourites added yet 🌊</p>
          <span>
            Start exploring and tap ❤️ to add your favourite marine life!
          </span>
        </div>
      ) : (
        <div className="favourites-grid">
          {favourites.map((item) => (
            <div key={item.id} className="fav-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}