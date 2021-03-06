import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/CartProduct/Cart";

function CartPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="cart-page">
        <Cart />
      </div>
    </>
  );
}

export default CartPage;
