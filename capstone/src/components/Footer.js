import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
      <div className="footer-container">
        <div className="footer-group group-find-us-address">
          <div><span className="first-word">Find Us</span></div>
          <div>123 Wish Lane
            <br /> Dreamland, TX 77587
          </div>
        </div>
        <div className="footer-group group-follow-us-logo">
          <div><span className="first-word">Follow Us</span></div>
          <div className="icon-container">
            <div className="icon">
              <div className="icon-background"></div>
              <div className="icon-detail"></div>
            </div>
          </div>
        </div>
        <div className="footer-group group-signup-discount">
          <div><span className="first-word"><Link to='/signup'>Sign Up</Link></span></div>
          <div> Discount 15% Off</div>
        </div>
        <div className="footer-group group-help-faq">
          <div><span className="first-word">Help</span></div>
          <div>
            FAQ<br />
            Size Chart<br />
            Contact Us<br />
            Return Policy
          </div>
        </div>
        <div className="footer-group group-about-us">
          <div><span className="first-word"><Link to='/about'>About Us</Link></span></div>
          <div>
            Our Story <br />
            Accessibility<br />
            Privacy Policy
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer; 