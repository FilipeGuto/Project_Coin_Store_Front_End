import React, { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import { Table } from "react-bootstrap";
import "./infousers.css";

export default function InfoUsers() {
  const [data, setData] = useState(null);
  const { setUpdateUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo() {
      const users = await getAllUsers();

      setTimeout(() => {
        return setData(users);
      }, "5000");
    }

    getInfo();
  }, []);

  const handleCoins = (email, coin, id) => {
    const dataUser = {
      id,
      email,
      coin,
    };

    setUpdateUser(dataUser);

    navigate("/admin/update_user");
  };

  if (!data)
    return (
      <div className="loading-admin">
        <h3>Carregando usuarios...</h3>
      </div>
    );

  return (
    <div className="info-table">
      <Table responsive bordered hover className="noWrap info">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>COIN</th>
          </tr>
        </thead>
        {data &&
          data.map((user, index) =>
            user.role === "admin" ? null : (
              <tbody key={index}>
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.coin}</td>
                  <td
                    type="button"
                    className="btn-list-users"
                    onClick={() => handleCoins(user.email, user.coin, user._id)}
                  >
                    Alterar
                  </td>
                </tr>
              </tbody>
            )
          )}
      </Table>
    </div>
  );
}
