import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dentista = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalle del dentista {id}</h1>
      {user && (
        <div>
          <img src="../../img/doctor.jpg" width="200px" alt="Doctor-logo" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Teléfono: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
};

export default Dentista;
