import CTA from "../cta/CTA";
import "./contact.css";
import Lottie from "lottie-react";
import siren from "../../siren.json";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <CTA />

      <div className="animated">
        <Lottie className="siren " loop={true} animationData={siren}></Lottie>
        <h3>SCAM ALERT</h3>
        <Lottie className="siren" loop={true} animationData={siren}></Lottie>
      </div>
      <div className="contact-content">
        <p>
          Please note that Gary Gold Trader would never request money from
          individuals and corporate bodies to perform trades on their behalf.
        </p>
        <p>
          Gary Gold Trader would never request you pay up-front for daily
          signals and VIP privileges.
        </p>
        <p>
          Gary Gold Trader would never request login details from individuals and
          corporate bodies to check their trading history for guidiance.
        </p>
        <p>
          Gary Gold Trader does not request payment for private tutorials and
          classes. All handouts, eBooks and Live classes are{" "}
          <strong>FREE</strong>.
        </p>
        <p>
          Gary Gold Trader operates solely with two (2) telegram accounts as
          listed below
        </p>
        <p className="pm-admin">
          {" "}
          <a
            href="https://t.me/Gary_TheTrader"
            rel="noopener noreferrer"
            target="_blank"
          >
            Telegram Channel — @Gary_TheTrader
          </a>
          <br />
          <a
            href="https://t.me/Gary_GoldTrader"
            rel="noopener noreferrer"
            target="_blank"
          >
            Telegram Admin — @Gary_GoldTrader
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
