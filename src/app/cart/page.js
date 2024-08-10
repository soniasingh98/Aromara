"use client";

import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../styles/cart.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cart, removeFromCart, deleteFromCart } = useCart();
  const router = useRouter();
  const subtotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price;
  }, 0);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    let orderId = Math.floor(100000000000 + Math.random() * 900000000000);

    router.push(`/order/${orderId}`);
  };
  return (
    <>
      <Navbar />

      {cart.length === 0 ? (
        <div className="cart-empty-outer">
          <div>
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          </div>
          <div className="cart-empty-firstdiv">Oops! Your cart is empty.</div>
          <div className="cart-empty-seconddiv">Please add a few items.</div>
        </div>
      ) : (
        <div className="cart-outer">
          <div className="cart-inner1">
            <h3>Your Product List</h3>
            {cart.map((item, index) => (
              <div key={index} className="cart-card">
                <Image src={item.src} alt={item.name} className="cart-img" />
                <p>{item.name}</p>
                <div className="cart-delete">
                  <p>{item.price}</p>

                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => removeFromCart(item.name)}
                    className="delete-icon"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="cart-inner2">
            <div className="cart-inner2-inner1">
              <h3>Detail Summary</h3>
              <div className="cart-inner2-inner1-items">
                <span>Subtotal Product</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cart-inner2-inner1-items">
                <span>Price Delivery</span>
                <span>$0.00</span>
              </div>
              <div className="cart-inner2-inner1-items">
                <span>Taxes</span>
                <span>$1.00</span>
              </div>
              <div className="cart-inner2-inner1-items cart-total">
                <span>Total</span>
                <span>${(subtotal + 1).toFixed(2)}</span>
              </div>
            </div>
            <div className="cart-inner2-inner2">
              <h3>Address Info</h3>
              <form onSubmit={handlePlaceOrder}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="number" id="phone" name="phone" required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />

                <button className="cart-link" type="submit">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
