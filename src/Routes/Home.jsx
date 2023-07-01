import { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Components/contexts/ThemeContext";
import styles from "./Home.module.css";

const Home = () => {
  const { theme, toggleTheme, data, fetchData, loading, error } =
    useContext(ThemeContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div> Cargando ...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <h1>Nuestros Odontologos</h1>
          <div className={styles.container}>
            {data.map((usuario) => (
              <div key={usuario.id} className={styles.card}>
                <Card
                  name={usuario.name}
                  username={usuario.username}
                  id={usuario.id}
                  img={"./img/doctor.jpg"}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
