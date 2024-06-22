
import React from 'react';
import './footer.css';

const Footers = () => {
  return (
    <div className="container">
      <div className="absolute find-us">Find Us</div>
      <div className="absolute follow-us">Follow Us</div>
      <div className="absolute sign-up">Sign Up</div>
      <div className="icon-container">
        <div className="icon">
          <div className="icon-background"></div>
          <div className="icon-detail"></div>
        </div>
      </div>
      <div className="absolute discount">15% Off</div>
      <div className="absolute address">123 Wish Lane, Dreamland, TX</div>
      <div className="absolute help">Help</div>
      <div className="absolute about-us">About Us</div>
      <div className="absolute faq">
        FAQ<br/>Size Chart<br/>Contact Us<br/>Return Policy
      </div>
      <div className="absolute our-story">
        Our Story<br/>Accessibility<br/>Privacy Policy
      </div>
      <div style={{width: '100%', height: '100%', background: 'white'}}></div>

    </div>
   
  );



}
export default Footers;