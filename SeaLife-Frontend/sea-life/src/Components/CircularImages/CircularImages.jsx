import "./CircularImages.css";

import { useEffect, useRef } from "react";

export default function CircularImages({ fishes }) {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false);

  const loopData = [...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes, ...fishes];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 3;

    // start from middle
    container.scrollLeft = singleSetWidth;

    const speed = 0.6;

    const autoScroll = () => {
      if (!isPaused.current) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        }

        if (container.scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="infinite-gallery" ref={scrollRef}>
      <div className="scroll-track">
        {loopData.map((fish, index) => (
          <div
            className="fish-card"
            key={`${fish.name}-${index}`}
            style={{ background: fish.color }}
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
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
