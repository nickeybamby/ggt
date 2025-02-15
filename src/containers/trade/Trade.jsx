import "./trade.css";
import serv01 from "../../assets/serv01.png";
import serv02 from "../../assets/serv02.png";
import serv03 from "../../assets/serv03.png";
import serv04 from "../../assets/serv04.png";
import serv05 from "../../assets/serv05.png";
import serv06 from "../../assets/serv06.png";

export const tradeData = [
  {
    id: 1,
    title: "Free Trading Education",
    thumbnail: serv01,
  },
  {
    id: 2,
    title: "Daily Buy & Sell Signals",
    thumbnail: serv02,
  },
  {
    id: 3,
    title: "Focus on Gold/XAUUSD",
    thumbnail: serv03,
  },
  {
    id: 4,
    title: "5+ Years of Experience",
    thumbnail: serv04,
  },
  {
    id: 5,
    title: "Global Gold Trader",
    thumbnail: serv05,
  },
  {
    id: 6,
    title: "Sharp Sniper Entry & Exit",
    thumbnail: serv06,
  },
];
const Trade = () => {
  return (
    <div className="trade" id="trade">
      <h2 className="gradient__text">Why Trade With Us</h2>

      <div className="image__container">
        {tradeData.map((card) => {
          return (
            <div className="trade__card" key={card.id}>
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="card__image"
              />
              <h3>{card.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trade;
