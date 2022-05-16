import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [updateUser, setUpdateUser] = useState({});
  const [product, setProduct] = useState({});


  const providerValue = {
    updateUser,
    setUpdateUser,
    product,
    setProduct,
  };

  return(
  <Context.Provider value={providerValue}>
    {children}
  </Context.Provider>);
};

export default Provider;
