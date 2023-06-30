import { useState, useEffect } from "react";
import styles from "./Card.module.css";

const Card = ({ img, name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  const addFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    setIsFav(favoritos.some((favorito) => favorito.id === id));

    if (isFav) {
      const eliminarFav = favoritos.filter((favorito) => favorito.id !== id);
      localStorage.setItem("favoritos", JSON.stringify(eliminarFav));
      setIsFav(false);
    } else {
      const newCard = { name, username, id };
      favoritos.push(newCard);
        setIsFav(true);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
  };

  return (
    <div className={styles.card} key={id}>
      <img src={img} alt={name} width="150px" />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>Username: {username}</p>
      <p>ID: {id}</p>
      <button className={styles.button} onClick={addFavorito} >
        Agregar a favorito ❤️
        {isFav ? "Remove Fav" : "Add Fav"}
      </button>
    </div>
  );
};
export default Card;
