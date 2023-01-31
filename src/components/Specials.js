import React from "react";

const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-top">
        <h1>This week's specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials-cards">
        <div className="specials-card">
          <img src="/assets/greek salad.jpg" width="250" alt="greek salad" />
          <div className="specials-card-content">
            <div className="specials-card-content-top">
              <p className="meal">Greek salad</p>
              <p className="price">$12.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <p className="orderDelivery">Order a delivery 🛵</p>
          </div>
        </div>

        <div className="specials-card">
          <img src="/assets/bruchetta.svg" width="250" alt="bruchetta" />
          <div className="specials-card-content">
            <div className="specials-card-content-top">
              <p className="meal">Bruchetta</p>
              <p className="price">$5.99</p>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <p className="orderDelivery">Order a delivery 🛵</p>
          </div>
        </div>

        <div className="specials-card">
          <img
            src="/assets/lemon dessert.jpg"
            width="250"
            alt="lemon dessert"
          />
          <div className="specials-card-content">
            <div className="specials-card-content-top">
              <p className="meal">Lemon Dessert</p>
              <p className="price">$5.00</p>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <p className="orderDelivery">Order a delivery 🛵</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
