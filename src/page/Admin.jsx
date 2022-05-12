import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin/NavbarAdmin';
import FormCreateProduct from '../components/FormCreateProduct/FormCreateProduct';
import InfoUsers from '../components/InfoUsers/InfoUsers';

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
