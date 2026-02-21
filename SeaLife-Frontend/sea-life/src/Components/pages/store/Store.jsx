import React, { useState } from "react";
import { useCart } from "../../CartContext/CartContext";
import "./Store.css";

import Dolphin from "../../../assets/Store/Dolphin.jpg";
import Orca from "../../../assets/Store/Orca.jpg";
import Orca1 from "../../../assets/Store/Orca1.jpg";
import Orca2 from "../../../assets/Store/Orca2.jpg";
import Shark from "../../../assets/Store/Shark.jpg";
import Shark1 from "../../../assets/Store/Shark1.jpg";
import Whale2 from "../../../assets/Store/Whale2.jpg";
import WhaleShark from "../../../assets/Store/WhaleShark.jpg";
import Dolphin1 from "../../../assets/Store/Dolphin1.jpg";
import SeaHorseNecklace from "../../../assets/Store/SeaHorseNecklace.jpg";
import TurtlesFigure from "../../../assets/Store/TurtlesFigure.jpg";
import SeaShellHolder from "../../../assets/Store/SeaShellHolder.jpg";

const productsData = [
  {
    id: 1,
    name: "Dolphin Figure",
    price: 4999,
    oldPrice: 5999,
    category: "Figures",
    rating: 4,
    stock: 5,
    isNew: true,
    image: Dolphin,
  },
  {
    id: 2,
    name: "Orca Snow Globe",
    price: 3999,
    oldPrice: 4999,
    category: "Figures",
    rating: 5,
    stock: 15,
    isNew: false,
    image: Orca,
  },
  {
    id: 3,
    name: "Orca Action Figure",
    price: 3499,
    category: "Figures",
    rating: 3,
    stock: 0,
    isNew: true,
    image: Orca1,
  },
  {
    id: 4,
    name: "Orca Action Figure",
    price: 4599,
    oldPrice: 5799,
    category: "Figures",
    rating: 4,
    stock: 12,
    isNew: false,
    image: Orca2,
  },
  {
    id: 5,
    name: "Whale Action Figure",
    price: 3999,
    category: "Figures",
    rating: 3,
    stock: 20,
    isNew: true,
    image: Whale2,
  },
  {
    id: 6,
    name: "Sharks Action Figure",
    price: 5999,
    oldPrice: 6499,
    category: "Figures",
    rating: 5,
    stock: 8,
    isNew: false,
    image: Shark,
  },
  {
    id: 7,
    name: "Sharks Action Figure",
    price: 5999,
    category: "Figures",
    rating: 4,
    stock: 10,
    isNew: false,
    image: Shark1,
  },
  {
    id: 8,
    name: "Whale Shark Figure",
    price: 3799,
    oldPrice: 4199,
    category: "Figures",
    rating: 4,
    stock: 6,
    isNew: true,
    image: WhaleShark,
  },
  {
    id: 9,
    name: "Dolphin Snow Globe",
    price: 699,
    category: "Figures",
    rating: 5,
    stock: 25,
    isNew: false,
    image: Dolphin1,
  },
  {
    id: 10,
    name: "Sea Horse Necklace",
    price: 1999,
    oldPrice: 2999,
    category: "Accessories",
    rating: 4,
    stock: 18,
    isNew: true,
    image: SeaHorseNecklace,
  },
  {
    id: 11,
    name: "Turtles Action Figure",
    price: 4499,
    category: "Figures",
    rating: 4,
    stock: 30,
    isNew: false,
    image: TurtlesFigure,
  },
  {
    id: 12,
    name: "SeaShell Brush Holder",
    price: 1199,
    oldPrice: 1499,
    category: "Accessories",
    rating: 5,
    stock: 9,
    isNew: true,
    image: SeaShellHolder,
  },
];

export default function Store() {
  const { cartItems, addToCart } = useCart(); // ✅ Hook inside component

  const [products] = useState(productsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(6000);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon === "OCEAN10") setDiscount(10);
    else if (coupon === "SAVE20") setDiscount(20);
    else alert("Invalid Coupon");
  };

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category) &&
      p.price <= maxPrice
  );

  const total =
    cartItems.reduce((acc, item) => acc + item.price, 0) *
    ((100 - discount) / 100);

  return (
    <div className="store-container">
      <h1>Ocean Store 🌊</h1>

      <div className="banner">🚚 Free Shipping Above ₹999</div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Accessories</option>
          <option>Figures</option>
        </select>

        <div>
          Max Price: ₹{maxPrice}
          <input
            type="range"
            min="0"
            max="6000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <div className="product-card" key={product.id}>
            {product.isNew && (
              <span className="new-badge">NEW</span>
            )}

            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>

            <div className="rating">
              {"⭐".repeat(product.rating)}
            </div>

            <p>₹{product.price}</p>

            <button
              disabled={product.stock === 0}
              onClick={() => addToCart(product)}
            >
              {product.stock === 0
                ? "Out of Stock"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
