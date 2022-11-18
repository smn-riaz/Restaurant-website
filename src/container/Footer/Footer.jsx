import React from 'react';
import { FiFacebook, FiInstagram, FiTwitch } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
        <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">
              Contact
            </h1>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="p__opensans">
              +8801600000000
            </p>
            <p className="p__opensans">
              +8801700000000
            </p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitch />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">
              Working Hours
            </h1>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="p__opensans">
              +8801600000000
            </p>
            <p className="p__opensans">
              +8801700000000
            </p>
        </div>
    </div>

    <div className="footer__copyright">
      <p className='p__opensans'>
        2022 Treat restaurant. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
