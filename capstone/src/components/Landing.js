import React from 'react';
import './Landing.css'; 

const Landing = () => {
  return (
    <div className={["main"]}>
      <h2>Comfort First</h2>
      <p>Launching our intimates line. Underwear so comfortable, it feels like nothing is there.</p>
      <div className="cta">
        <a href="#">Shop Now</a>
      </div>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5d59e092100bdf0001aa1a80/1679029014484-PHGC9RUWFU4944S70TZ6/AdobeStock_564935733.jpeg?format=1500w" 
        alt="Maternity Image" 
      />
    </div>
  );
};

export default Landing