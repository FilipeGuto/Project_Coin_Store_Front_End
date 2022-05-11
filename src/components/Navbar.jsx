import React from 'react';
import {  useNavigate } from 'react-router-dom'

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const loggout = () => {
    localStorage.removeItem('user');

    navigate('/');
  }

  return (
    <>    
    <div>
      <h3>STORE COIN</h3>
      <h5>{ user.name }</h5>
    </div>
    <div>
      <h5>{ user.coin }</h5>
      <button
      type='button'
      onClick={ () => loggout() }
      >
      SAIR
      </button>
    </div>
    </>
    
  );
};
