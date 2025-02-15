import "./resources.css";

export const resourcesData = [
  {
    id: 1,
    thumbnail: "/pdfs/introduction.png",  
    title: "Introduction to Forex",
    link: "/pdfs/forex-trading-101.pdf",
  },
  {
    id: 2,
    thumbnail: "/pdfs/explanation.png",  
    title: "Special Explanation",
    link: "/pdfs/special-explation.pdf",
  },
  {
    id: 3,
    thumbnail: "/pdfs/pattern.png",  
    title: "Chart Patterns",
    link: "/pdfs/chart-patterns.pdf",
  },
  {
    id: 4,
    thumbnail: "/pdfs/handbook.png",  
    title: "Forex Handbook",
    link: "/pdfs/forex-handbook.pdf",
  }
];

const Resources = () => {
  return (
    <div className="resources" id="resources">
      <h2 className="gradient__text">Resources</h2>
      <p>Free resources to help you get started with forex</p>
      <div className="image__container">
        {resourcesData.map((card) => {
          return (
            <div className="resources__card" key={card.id}>
              <img
                src={card.thumbnail}
                alt={card.title}
                className="card__image"
              />
              <h3>{card.title}</h3>
              <div>
                <a href={card.link} download className="file-btn">
                  <button>Download PDF</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
