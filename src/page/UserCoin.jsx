import React, {  useContext, useState } from 'react';
import NavbarAdmmin from '../components/NavbarAdmin';
import { updateCoinUser } from '../services/users';
import { useNavigate } from 'react-router';
import Context from '../Context/Context';

export default function UserCoin() {
  const {updateUser, setUpdateUser} = useContext(Context);
  const [coin, setCoin] = useState("");
  const navigate = useNavigate();

  const updateCoin = async (e) => {
    e.preventDefault();

    const update = {
      email: updateUser.email,
      coin: coin,
    }

    
    if(!coin) {
      alert('Preencha o campo de moedas');
    } else if(update) {
      await updateCoinUser(update);
      alert("Moedas alterada com sucesso");

      setUpdateUser(update);

      setCoin("");
    }
  }

  const previousPage = () => {
    navigate('/admin');
  }


  return (
    <div>
      <NavbarAdmmin />
      <h3>{updateUser.email}</h3>
      <h5>{updateUser.coin}</h5>
      <input 
      type="number"
      placeholder="nova quantidade de moedas"
      value={coin}
      onChange={(e) => setCoin(e.target.value)}
      />
      <button
      type='button'
      onClick={updateCoin}
      >
        Alterar
      </button>

      <button
      type='button'
      onClick={previousPage}
      >
        Voltar
      </button>
    </div>
  )
}
