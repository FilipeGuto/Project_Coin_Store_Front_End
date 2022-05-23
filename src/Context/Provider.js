import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [updateUser, setUpdateUser] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const copyProductCart = [...cartItems];

    const productExist = copyProductCart.find((item) => item._id === product._id);

    if (!productExist) {
      copyProductCart.push({ ...product, qtd: 1 });
    } else {
      productExist.qtd = productExist.qtd + 1;
    }

    setCartItems(copyProductCart);
  }

  const handleRemoveProduct = (product) => {
    const copyProductCart = [...cartItems];

    const productExist = copyProductCart.find((item) => item._id === product._id);

    if (productExist && productExist.qtd > 1) {
      productExist.qtd = productExist.qtd - 1;
      setCartItems(copyProductCart);
    } else {
      const filteredProduct = copyProductCart.filter((item) => item._id !== product._id);
      setCartItems(filteredProduct);
    }
  }

  const handleRemove = (product) => {
    const copyProductCart = [...cartItems];
    const productExist = copyProductCart.find((item) => item._id === product._id);

    if (productExist && productExist.qtd >= 1) {
      const filteredProduct = copyProductCart.filter((item) => item._id !== product._id);
      setCartItems(filteredProduct);
    }
  }

  const clearCart = () => {
    setCartItems([]);
  }


  const providerValue = {
    updateUser,
    setUpdateUser,
    cartItems,
    setCartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleRemove,
    clearCart,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>);
};

export default Provider;
