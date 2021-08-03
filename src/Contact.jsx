



import React from "react";
import image1 from "../src/images/hotpizza.jpg";
import image2 from "../src/images/shakes.jpg";
import image3 from "../src/images/burger.jpg";
import image4 from "../src/images/cake.jpg";
import image5 from "../src/images/meat.jpg";
import image6 from "../src/images/meal.jpg";

const Contact = () => {
  return (
    <div>
      <div className="section_img">
        <h1 className="h1_contact"> Contact</h1>
        <div className="images">
          <a
            href="https://www.zomato.com/ncr/dominos-pizza-connaught-place-new-delhi/order"
            target="_blank"
          >
            <img src={image1} className="imagefluid" alt="" />
          </a>
          <a
            href="https://www.zomato.com/ncr/baskin-robbins-satyaniketan-new-delhi/order"
            target="_blank"
          >
            <img src={image2} className="imagefluid" alt="" />
          </a>

          <a
            href="https://www.zomato.com/ncr/burger-king-connaught-place-new-delhi/order"
            target="_blank"
          >
            <img src={image3} className="imagefluid" alt="" />
          </a>
          <a
            href="https://www.zomato.com/ncr/theobroma-connaught-place-new-delhi/order"
            target="_blank"
          >
            <img src={image4} className="imagefluid" alt="" />
          </a>
          <a
            href="https://www.zomato.com/ncr/kfc-connaught-place-new-delhi/order"
            target="_blank"
          >
            <img src={image5} className="imagefluid" alt="" />
          </a>

          <a
            href="https://www.zomato.com/ncr/m-gopinath-south-indian-cafe-rajinder-nagar-new-delhi/order"
            target="_blank"
          >
            <img src={image6} className="imagefluid" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

