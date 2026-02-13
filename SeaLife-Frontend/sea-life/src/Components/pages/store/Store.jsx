import "./Store.css";


export default function Store() {
  return (
    <div className="store-page">
      <h1 className="store-title">Ocean Store 🐠</h1>
      <p className="store-subtitle">
        Support ocean conservation by purchasing our products
      </p>

      <div className="store-grid">
        <div className="store-card">
          <img src="https://via.placeholder.com/200" alt="T-shirt" />
          <h3>Ocean T-Shirt</h3>
          <p>₹499</p>
          <button>Add to Cart</button>
        </div>

        <div className="store-card">
          <img src="https://via.placeholder.com/200" alt="Bottle" />
          <h3>Reusable Water Bottle</h3>
          <p>₹699</p>
          <button>Add to Cart</button>
        </div>

        <div className="store-card">
          <img src="https://via.placeholder.com/200" alt="Notebook" />
          <h3>Eco Notebook</h3>
          <p>₹299</p>
          <button>Add to Cart</button>
        </div>

        <div className="store-card">
          <img src="https://via.placeholder.com/200" alt="Sticker Pack" />
          <h3>Ocean Stickers</h3>
          <p>₹149</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
