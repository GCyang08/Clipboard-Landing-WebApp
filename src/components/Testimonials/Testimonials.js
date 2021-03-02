import React from "react";

import google from "../../assets/logo-google.png";
import ibm from "../../assets/logo-ibm.png";
import microsoft from "../../assets/logo-microsoft.png";
import hp from "../../assets/logo-hp.png";
import vector from "../../assets/logo-vector-graphics.png";
import "./Testimonials.css";

function Testimonials() {
  const allImages = {
    images: [
      { img: google, alt: "google logo" },
      { img: ibm, alt: "ibm logo" },
      { img: microsoft, alt: "microsoft logo" },
      { img: hp, alt: "hp logo" },
      { img: vector, alt: "vector logo" },
    ],
  };
  return (
    <div className="Testimonials">
      {allImages.images.map((img, i) => {
        return (
          <div key={i} className="TestimonialsImg">
            <img src={img.img} alt={img.alt} />
          </div>
        );
      })}
    </div>
  );
}

export default Testimonials;
