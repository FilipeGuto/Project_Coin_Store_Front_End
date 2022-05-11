import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";

export default function CardProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts();
      
      return setData(products);
    };

    getProducts();
  }, []);

  return (
    <div>
      {data.map((product) => (
        <div key={product._id}>
          <div>
            <h3>
            {product.title}
            </h3>
            <div>
              <img
                src={product.image}
                alt={product.title}
              />
            </div>
            <div>
              <p>
                {product.description}
              </p>
              <h5>
                {product.tilte}
              </h5>
              <h6>
                {product.price}
                {' '}
                `QUANTITY: ${product.quantity}`
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
