import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [updateUser, setUpdateUser] = useState({});


  const providerValue = {
    updateUser,
    setUpdateUser,
  };

  return(
  <Context.Provider value={providerValue}>
    {children}
  </Context.Provider>);
};

export default Provider;
