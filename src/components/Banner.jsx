import React from "react";
import "../css/banner-slider.css";
import "../css/banner.css";

const Banner = ({ imageUrl_desktop, altText, imageUrl_mobile }) => {
  return (
    <div className="banner">
      <a href="">
        <img
          className=" for-dektop "
          src={imageUrl_desktop}
          alt={altText || "Banner"}
        />
        <img
          className=" small-mobile "
          src={imageUrl_mobile}
          alt={altText || "Banner"}
        />
      </a>
    </div>
  );
};

export default Banner;
