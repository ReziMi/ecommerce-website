// ProductDisplay.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Enjoy exceptional quality and all-day comfort with our versatile product, designed to meet your needs for any occasion, whether at home, work, or on the go.";

function ProductDisplay({ item }) {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };
    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!Array.isArray(existingCart)) {
      existingCart = []; // Initialize as an array if not already
    }

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset form field
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* card components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* sizing */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* color */}
          <div className="select-product color">
            <select value={color} onChange={handleColor}>
              <option>Select Color</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Grey">Grey</option>
              <option value="Black">Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* form plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setQuantity(isNaN(value) ? 0 : value);
              }}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupon field */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/* button section */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ProductDisplay;
