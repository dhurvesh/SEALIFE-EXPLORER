import { Link } from "react-router-dom";
import "./NotFound.css";
import oceanBg from "../../assets/404_BG/Ocean-Background.jpg";
import fishImg from "../../assets/404_BG/Turtle-404.png";


export default function NotFound() {
  return (
    <div
      className="notfound-container"
      style={{ backgroundImage: `url(${oceanBg})` }}
    >
      {/* Floating Bubbles */}
      <div className="bubble b1"></div>
      <div className="bubble b2"></div>
      <div className="bubble b3"></div>
      <div className="bubble b4"></div>

      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <h2>Lost in the Ocean 🌊</h2>
        <p>
          The page you’re looking for has drifted into the deep sea.
        </p>

        <Link to="/">
          <button className="home-btn">🏠 Return Home</button>
        </Link>
      </div>     
        <img src={fishImg} alt="fish" className="fish" />
    </div>
  );
}
