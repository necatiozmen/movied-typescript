import * as React from 'react';
import './Footer.css';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import appstore from '../../assets/app-store.svg';
import playstore from '../../assets/play-store.svg';
import windowstore from '../../assets/windows-store.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="footer-nav">
          <div className="footer-nav-list">
            <p>Home</p>
            <p>|</p>
            <p>Term and Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Collection Statement</p>
            <p>|</p>
            <p>Help</p>
            <p>|</p>
            <p>Manage Account</p>
          </div>
          <div className="footer-copyright">
            <p>Copyright © 2018 DEMO Streaming. All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-contact-container">
          <div className="footer-icons">
            <img src={facebook} alt="logo" />
            <img src={twitter} alt="logo" />
            <img src={instagram} alt="logo" />
          </div>
          <div className="footer-icons-app">
            <img src={appstore} alt="logo" />
            <img src={playstore} alt="logo" />
            <img src={windowstore} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
