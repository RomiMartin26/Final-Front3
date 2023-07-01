import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import styles from "./Favoritos.module.css";

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
    <>
      <h1>Favoritos</h1>
      <div className={styles.container}>
        {favorites.map((favorite, index) => (
          <div key={`$favorite.id}-${index}`} className={styles.card}>
            <Card
              name={favorite.name}
              username={favorite.username}
              id={favorite.id}
              img={"./img/doctor.jpg"}
              onRemoveFavorite={removeFavorites}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favoritos;
