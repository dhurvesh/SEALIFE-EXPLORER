import "./FishDetail.css";

export default function FishDetails({ fish, onClose }) {
  if (!fish) return null;

  return (
    <div className="fish-overlay">
      <div
        className="fish-card"
        style={{ background: fish.bgColor }}
      >
        <div className="close-btn" onClick={onClose}>
          Close ✕
        </div>

        <div className="fish-content">
          <div className="fish-image">
            <img src={fish.image} alt={fish.name} />
          </div>

          <div className="fish-text">
            <h1>{fish.name}</h1>

            <p><strong>Scientific name:</strong> {fish.scientific}</p>
            <p><strong>Family:</strong> {fish.family}</p>

            {fish.sections.map((section, index) => (
              <div key={index} className="fish-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
