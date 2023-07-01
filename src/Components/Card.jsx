import { useState, useEffect } from "react";
import { useContext } from "react";
import styles from "./Card.module.css";
import { ThemeContext } from "../Components/contexts/ThemeContext";
import { Link } from "react-router-dom";

const Card = ({ img, name, username, id }) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  let enFavoritos = favoritos.some((favorito) => favorito.id === id);

  const [isFav, setIsFav] = useState(enFavoritos); //(false);

  const { theme } = useContext(ThemeContext);

  const addFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    let enFavoritos = favoritos.some((favorito) => favorito.id === id);

    if (enFavoritos) {
      //  (isFav) {
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
    <>
      <div
        className={`${styles.card} ${
          theme === "dark" ? styles.themeDarkCard : styles.themeLightCard
        }`}
        key={id}
      >
        <img src={img} alt={name} width="100px" />
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>Username: {username}</p>
        <p>ID: {id}</p>
        <button className={styles.button} onClick={addFavorito}>
          {isFav ? "❤️  " : "🤍  "}
          {isFav ? "Remove Fav" : "Add Fav"}
        </button>
        <div className={styles.buttonContainer}>
          <Link to={`/dentista/${id}`}>
            <button className={styles.button}>Ver detalle </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
