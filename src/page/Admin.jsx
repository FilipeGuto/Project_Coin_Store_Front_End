import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin';
import FormCreateProduct from '../components/FormCreateProduct';
import InfoUsers from '../components/InfoUsers';

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
      <InfoUsers />
    </div>
    </>
  )
};
