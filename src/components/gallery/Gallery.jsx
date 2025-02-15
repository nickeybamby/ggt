import { useEffect, useRef } from "react";
import './gallery.css';

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://media-library.cloudinary.com/global/all.js";
    script.async = true;
    script.onload = () => {
      if (window.cloudinary && containerRef.current) {
        const gallery = window.cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: "dkahgc3iw",
          aspectRatio: "16:9",
          mediaAssets: [{ tag: "unotelos-images" }, { tag: "unotelos-videos" }],
          carouselStyle: "indicators",
          carouselLocation: "bottom",
        });

        gallery.render();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="cloud__wrapper section__padding">
        <div className="cloud__text">
          <h3 className="sub__text">Events & Multimedia</h3>
          <h2 className="gradient__text">
            Showcasing cutting-edge technologies, industry insights, and impactful moments from our IT journey.
          </h2>
        </div>
        <div ref={containerRef} className="cloud__ref" />
      </div>
    </>
  );
};

export default Gallery;
