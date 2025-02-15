import React from "react";
import "./footer.css";
import logo from "../../assets/garygold.svg";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Connecting Dreams, Trading Success.</p>
        </div>
        <div className="footer-links_div">
          <h4>Social Links</h4>
          <p> <a href="https://t.me/Gary_TheTrader" rel="noopener noreferrer" target="_blank">Telegram Channel</a></p>
          <p><a href="https://t.me/Gary_GoldTrader" rel="noopener noreferrer" target="_blank">Telegram Admin</a></p>
          <p> <a href=" " rel="noopener noreferrer" target="_blank">Instagram</a></p>
        </div>
        <div className="footer-links_div">
          <h4>Get in Touch</h4>
          <p><a href="https://t.me/Gary_GoldTrader" rel="noopener noreferrer" target="_blank">Chat With Admin</a></p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025 Gary Gold Trader. All rights reserved. | Powered by <a href="https://www.clinicraftstudios.xyz" rel="noopener noreferrer" target="_blank" className="cst">CS Tech</a></p>
      </div>
    </div>
  );
};

export default Footer;
