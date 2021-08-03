

import React from "react";
import dine from "../src/images/dinein.jpg";
import take from "../src/images/takeaway.jpg";
import order from "../src/images/order.jpg";
import offer from "../src/images/offers.jpg";
import coupens from "../src/images/coupens.jpg";
import feedback from "../src/images/feedback.jpg";

const Services = () => {
  return (
    <div>
      <h1 className="services"> Our Services</h1>
      <div class="container-card">
        <div class="card">
          <img src={dine} class="services_image" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Dine In</h5>
            <p class="card-text">Visit for your best test.</p>
            <a
              href="https://www.zomato.com/ncr"
              target="_blank"
              class="btn btn-primary"
            >
              Go
            </a>
          </div>
        </div>
        <div class="card">
          <img src={take} class="services_image" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Take away</h5>
            <p class="card-text">Visit a place and take away.</p>
            <a
              href="https://www.zomato.com/ncr"
              target="_blank"
              class="btn btn-primary"
            >
              Go{" "}
            </a>
          </div>
        </div>
        <div class="card">
          <img src={order} class="services_image" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Order</h5>
            <p class="card-text">Order your favorite test.</p>
            <a
              href="https://www.zomato.com/ncr"
              target="_blank"
              class="btn btn-primary"
            >
              Go
            </a>
          </div>
        </div>
        <div class="card">
          <img src={offer} class="services_image" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Offers</h5>
            <p class="card-text">Amazing Offer makes your best day.</p>
            <a
              href="https://www.zomato.com/ncr"
              target="_blank"
              class="btn btn-primary"
            >
              Go
            </a>
          </div>
        </div>
        <div class="card">
          <img src={coupens} class="services_image" alt="..." />
          <div class="card-body">
            <h5 class="card-title">coupens</h5>
            <p class="card-text">Try your luck.</p>
            <a
              href="https://www.zomato.com/ncr"
              target="_blank"
              class="btn btn-primary"
            >
              Go
            </a>
          </div>
        </div>
        <div class="card">
          <img src={feedback} class="services_image" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Feed back</h5>
            <p class="card-text">Give your test.</p>
            <a
              href="https://www.zomato.com/ncr"
              target="_blank"
              class="btn btn-primary"
            >
              Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
