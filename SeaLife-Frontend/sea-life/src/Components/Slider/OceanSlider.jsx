
import "./OceanSlider.css";

import Crab from "../../assets/Slider/Crab.jpg";
import MANATEE from "../../assets/Slider/MANATEE!!.jpg";
import penguin from "../../assets/Slider/penguin.jpg";


export default function OceanCarousel() {
  return (
    <main>
      <section className="Carousel next">
        <div className="list">

          <article className="item other_1">
            <div className="main-content">
              <div className="content">
                <h2>Discover the Sea</h2>
                <p className="description">
                  Explore the wonders of the ocean and its diverse marine life.
                </p>
                <button className="more">Learn More</button>
              </div>
            </div>
            <figure className="image">
              <img src={Crab} alt="Crab" />
              <figcaption>Crab</figcaption>
            </figure>
          </article>

          <article className="item active">
            <div className="main-content">
              <div className="content">
                <h2>Discover the Sea</h2>
                <p className="description">
                  Explore the wonders of the ocean and its diverse marine life.
                </p>
                <button className="more">Learn More</button>
              </div>
            </div>
            <figure className="image">
              <img src={MANATEE} alt="Manatee" />
              <figcaption>Manatee</figcaption>
            </figure>
          </article>

          <article className="item other_2">
            <div className="main-content">
              <div className="content">
                <h2>Discover the Sea</h2>
                <p className="description">
                  Explore the wonders of the ocean and its diverse marine life.
                </p>
                <button className="more">Learn More</button>
              </div>
            </div>
            <figure className="image">
              <img src={penguin} alt="Penguin" />
              <figcaption>Penguin</figcaption>
            </figure>
          </article>

        </div>

        <div className="arrows">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </section>
    </main>
  );
}
