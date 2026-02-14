import "./CircularImages.css";

import { useEffect, useRef } from "react";

export default function CircularImages({ fishes }) {
  const scrollRef = useRef(null);
  const loopData = [...fishes, ...fishes,...fishes, ...fishes,...fishes, ...fishes,...fishes, ...fishes,...fishes, ...fishes,...fishes, ...fishes];

  useEffect(() => {
  const container = scrollRef.current;
  let animationFrame;
  const speed = 0.5;

  const autoScroll = () => {
    if (!container) return;

    container.scrollLeft += speed;

    const halfWidth = container.scrollWidth / 2;

    // seamless reset
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    }

    animationFrame = requestAnimationFrame(autoScroll);
  };

  animationFrame = requestAnimationFrame(autoScroll);

  return () => cancelAnimationFrame(animationFrame);
}, []);


  return (
    <section className="infinite-gallery" ref={scrollRef}>
      <div className="scroll-track">
        {loopData.map((fish, index) => (
          <div
            className="fish-card"
            key={`${fish.name}-${index}`}
            style={{ background: fish.color }}
          >
            <div className="fish-image-wrapper">
              <img src={fish.image} alt={fish.name} />
            </div>
            <h4>{fish.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
