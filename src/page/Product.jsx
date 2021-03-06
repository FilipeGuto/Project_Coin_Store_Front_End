import React from "react";
import CardProducts from "../components/CardProduct/CardProducts";
import NavbarProducts from "../components/NavbarProducts/Navbar";

export default function Product() {
  return (
    <>
      <div>
        <NavbarProducts />
      </div>
      <div className="product-page">
        <CardProducts />
      </div>
    </>
  );
}
