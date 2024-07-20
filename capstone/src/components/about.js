import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './about.css';
import mom from './assets/mom.jpg';

const About = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="text-content">
          <h1 className="about">About</h1>
          <h2 className="our-origins">Our Origins</h2>
          <p>
            Welcome to Maternity Muse, your trusted companion through pregnancy, childbirth, and early parenthood. Founded by passionate mothers, healthcare professionals, and educators, we empower and support expectant and new mothers with expert advice, a vibrant community, and a wealth of resources including pregnancy trackers and wellness tips. We value empathy, inclusivity, and evidence-based information, providing a nurturing environment for every mother's journey. Join us and embrace the joys and challenges of motherhood with confidence.
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={mom} alt="pregnancy" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
