import Marquee from "react-fast-marquee";
import "./coolMarquee.css";

import slider1 from "./images/slider1.png";
import slider2 from "./images/slider2.png";
import slider3 from "./images/slider3.png";
import slider4 from "./images/slider4.png";
import slider5 from "./images/slider5.png";
import slider6 from "./images/slider6.png";

import gary from '../../assets/gary.png'

const CoolMarquee = () => {
  return (
    <div>
       <div className="testimonials" id="testimonials">
       <h2 className="gradient__text">Testimonials</h2>
       <p>Testimonials & community feedback about Gary Gold Trader</p>
       </div>

      <Marquee pauseOnHover direction="right" className="marquee-cards">
        <div className="testimonial-cards">
          <img src={slider1} alt="" />
        </div>
        <div className="testimonial-cards">
          <img src={slider2} alt="" />
        </div>
        <div className="testimonial-cards">
          <img src={slider3} alt="" />
        </div>
        <div className="testimonial-cards">
          <img src={slider4} alt="" />
        </div>
        <div className="testimonial-cards">
          <img src={slider5} alt="" />
        </div>
         <div className="testimonial-cards">
          <img src={slider6} alt="" />
        </div>
      </Marquee>

      <div className="testimonials__context">
        <div className="context-text">
          <h4>Consistency in Trading</h4>
          <p>Gain access to high-accuracy trading signals with up to <strong><em>98% precision</em></strong>, helping you make smarter decisions daily. But this level of precision isn't for everyone, it's reserved for traders who are serious about growth. </p>
          <p>Join Gary Circle Elite and experience the power of consistency. <span>PM "GCE" to my admin on telegram now with <a href="https://t.me/Gary_GoldTrader" rel="noopener noreferrer" target="_blank" className="pm-admin">@Gary_GoldTrader</a> to join! </span></p>
        </div>
        <div className="context-img">
          <img src={gary} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoolMarquee;
