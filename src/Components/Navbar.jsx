import { useContext } from "react";
import styles from './Navbar.module.css';
import { ThemeContext } from "./contexts/ThemeContext";
import { Link } from "react-router-dom";


const Navbar = () => {
  const theme = useContext(ThemeContext)
  

  return (
    <>
        <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Favoritos">Dentistas Favoritos</Link>
          </li>

          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
        <div >
          <button onClick={() => theme.changeValue()}>Cambiar tema</button>
        </div>
        </nav>
    </>
  );
};
export default Navbar; 
