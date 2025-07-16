import React from "react";
import { assets } from "../../assets";
import "./Campus.css";

const Campus = () => {
  return (
    <div className="Campus">
      <div className="gallery">
        <img src={assets.gallery1} alt="gallery1" />
        <img src={assets.gallery2} alt="gallery2" />
        <img src={assets.gallery3} alt="gallery3" />
        <img src={assets.gallery4} alt="gallery4" />
      </div>
      <button className="btn dark-btn">
        See More Here <img src={assets.whiteArrow} alt="whiteArrow" />
      </button>
    </div>
  );
};

export default Campus;
