import React from 'react';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import linkedin from '../../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer__padding">
        <div className="site__info">
          <p>REACT CINEMA</p>
          <div>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>

        <div className="footer__hrefs">
          <div>
            <p>Main</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
          <div>
            <p>FAQ</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
          <div>
            <p>Reports</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
