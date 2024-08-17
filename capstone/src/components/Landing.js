import React from 'react';
import './landing.css'; 
import maternity1 from "./assets/maternity1.jpg";
import maternity2 from "./assets/maternity2.jpg";
import maternity3 from "./assets/maternity3.jpg";

const Landing = () => {
  return (
    <div className={["main"]}>
      <h1>Comfort First</h1>
      <p>Launching our intimates line. Underwear so comfortable, it feels like a second skin.</p>
      <div className="cta">
        <a href="#">Shop Now</a>
      </div>
      <img 
        src="https://images.squarespace-cdn.com/content/v1/5d59e092100bdf0001aa1a80/1679029014484-PHGC9RUWFU4944S70TZ6/AdobeStock_564935733.jpeg?format=1500w" 
        alt="Maternity Image" 
      />
       <div className={["category"]}>
          <h2>Shop By Category</h2>
          <p>Free Shipping and Returns on All Orders</p>
      </div>
      <div>
          <p>New Arrivals</p>
      </div>
      <img className="maternity" src={maternity1}
      alt="Maternity Image">
      </img>
      <div>
          <p>Best Sellers</p>
      </div>
      <img className="maternity" src={maternity2}
       alt="Maternity Image">
      </img>
     
      <div>
        <p>Nursing Tops</p>
      </div>
      <img className="maternity" src={maternity3}
       alt="Maternity Image">
      </img>
    </div> 
  );
};

export default Landing


