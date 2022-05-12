import React, { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/users";
import {  useNavigate } from "react-router-dom";
import Context from "../Context/Context";

export default function InfoUsers() {
  const [data, setData] = useState([]);
  const { setUpdateUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo() {
      const users = await getAllUsers();

      return setData(users);
    }

    getInfo();
  }, []);

  const handleCoins = (email, coin) => {

    const dataUser = {
      email,
      coin
    };

      setUpdateUser(dataUser);

    navigate('/admin/update_user');
  };

  return (
    <div>
      {data.map((user) => (
        <div key={user._id}>
          {user.role === "admin" ? null : (
            <div>
              <h3>{user.name}</h3>
              <div>
                <p>{user.email}</p>
                <h3>{user.coin}</h3>
                <button
                type="button" 
                onClick={() => handleCoins(user.email, user.coin)}>
                  Alterar Coins
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
