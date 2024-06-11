import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (Array.isArray(storedCartItems)) {
      setCartItems(storedCartItems);
    } else {
      console.error("Stored cart items are not an array:", storedCartItems);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    console.log("Cart Items:", cartItems);
    // Your existing code...
  }, [cartItems]);

  // calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // handle quantity increase
  const handleIncrease = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  // handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  // handle item delete
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // cart subtotal
  const cartSubtotal = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
      }, 0)
    : 0;

  // order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {cartItems.map((item, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt={item.name} />{" "}
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                            readOnly
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="Delete" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                  <input type="submit" value={"Apply Coupon"} />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>CheckoutPage</div>
                </form>
              </div>

              {/* shopping box*/}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="ge">Georgia</option>
                          <option value="am">Armenia</option>
                          <option value="az">Azerbaijan</option>
                          <option value="tk">Turkey</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>

                      </div>
                      <div className="outline-select shipping select">
                        <select>
                          <option value="ge">Tbilisi</option>
                          <option value="am">Yerevan</option>
                          <option value="az">Baku</option>
                          <option value="tk">Istambul</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input type="text" name="postalCode" id="postalCode" className="cart-page-input-text" placeholder="Postcoe/ZIP *"/>
                      <button type="submit">Update Address</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                        <h3>Cart Totals</h3>
                        <ul className="lab-ul">
                            <li>
                                <span className="pull-left">Cart Subtotal</span>
                                <p className="pull-right">${cartSubtotal}</p>
                            </li>
                            <li>
                                <span className="pull-left">Shipping and Handling</span>
                                <p className="pull-right">Free Shipping</p>
                            </li>
                            <li>
                                <span className="pull-left">Order Total</span>
                                <p className="pull-right">${orderTotal.toFixed(2)}</p>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
