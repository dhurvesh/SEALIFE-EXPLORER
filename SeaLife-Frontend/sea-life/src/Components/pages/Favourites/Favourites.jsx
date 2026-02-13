import "./Favourites.css";

export default function Favourites() {
  return (
    <div className="favourites-page">
      <h1 className="favourites-title">Your Favourites 💙</h1>
      <p className="favourites-subtitle">
        Sea creatures and ocean items you love
      </p>

      <div className="favourites-empty">
        <p>No favourites added yet 🌊</p>
        <span>
          Start exploring and tap ❤️ to add your favourite marine life!
        </span>
      </div>
    </div>
  );
}
