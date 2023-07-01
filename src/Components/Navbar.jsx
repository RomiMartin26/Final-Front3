import { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Components/contexts/ThemeContext";

const Navbar = () => {
  
  // Probe con Switch
  //const {contextTheme} = useThemeContext()
  // const {contextTheme, setContextTheme} = useThemeContext ()

  /* const [checked, setChecked] =useState(false)
  
  const handleSwitch =(nextChecked) => {
    setContextTheme ((state)=> (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked)
    console.log(nextChecked)
  } */

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* <ReactSwitch 
         onChange={handleSwitch}
         checked={checked}
         onColor="#86d3ff"
         onHandleColor="#2693e6"
         handleDiameter={30}
         uncheckedIcon={false}
         checkedIcon={false}
         boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
         activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.6)"
         height={20}
         width={48}
         className="react-switch"
         id="material-switch"

         />       */}
      <nav
        className={`${styles.navbar} ${
          theme === "dark" ? styles.themeDark : styles.themeLight
        }`}
      >
        <div className={styles.navbar_container}>
          <ul className="list">
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
          <div className={styles.btnTheme}>
            <button onClick={toggleTheme}>
              {theme === "dark" ? "🌞" : "🌚"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
