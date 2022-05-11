import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin';
import FormCreateProduct from '../components/FormCreateProduct';

export default function Admin() {
  return (
    <>    
    <div>
      <NavbarAdmin />
    </div>
    <div>
      <FormCreateProduct />
    </div>
    <div>
      ALTERAR COINS
    </div>
    </>
  )
};
