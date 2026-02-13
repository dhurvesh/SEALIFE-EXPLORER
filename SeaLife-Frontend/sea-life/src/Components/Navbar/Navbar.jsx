import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/favourites">
        <button>Favourites</button>
      </Link>

      <div className="logo">
        OCEAN<span>EXPLORE</span>
      </div>

      <nav>
        <Link to="/">Home Again</Link>
        <Link to="/details">Details</Link>
        <Link to="/store">Store</Link>
        <Link to="/ngo">Ngo’s</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
}

export default Navbar