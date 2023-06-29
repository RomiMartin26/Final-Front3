import React, { useEffect, useState } from "react";
/* import Card from "../Components/Card";
import Dentista from "./Dentista"; */

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    const cargarFavorites = JSON.parse(localStorage.getItem("favoritos"));
    setFavorites(cargarFavorites || []);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const removeFavorites = (id) => {
    const updateFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updateFavorites);
    localStorage.setItem("favoritos", JSON.stringify(updateFavorites));
  };

  return (
    <div>
      <h1>Favoritos</h1>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={`$favorite.id}-${index}`}>
            <span>{favorite.name}</span> - {favorite.username}
            <button onClick={() => removeFavorites(favorite.id)}>
              Eliminar Fav
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  /* const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  console.log(favoritos, "favoritos")

  return (
    <>
    <div>
      Favoritos:
      {favoritos.map((dentista) => (
      <span key={dentista.id}>{dentista.name}, </span>
      ))}
      </div>
      <h1>Dentistas Favoritos</h1>
      <div>
        {favoritos.map((dentista) => (
         // console.log(dentista, "dentista")
           <Card 
            key={dentista.id}>
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          </Card> 
        )) }
        
      </div>
    </>
  );
   */
};

export default Favoritos;
