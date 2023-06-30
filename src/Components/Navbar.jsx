//import { useContext } from "react";
import styles from './Navbar.module.css';
import { useThemeContext } from "./contexts/ThemeContext";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useState } from 'react';


const Navbar = () => {
  //const {contextTheme} = useThemeContext()
  const {contextTheme, setContextTheme} = useThemeContext ()

  const [checked, setChecked] =useState(false)
  
  const handleSwitch =(nextChecked) => {
    setContextTheme ((state)=> (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked)
    console.log(nextChecked)
  }

  return (
    <>
    <ReactSwitch 
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

         />      
        <nav className={styles.navbar}>
          <div className="navbar-container">
        <ul className='list'>
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
        <button onClick={contextTheme}>Cambiar Tema</button>
          {/* <button onClick={() => theme.changeValue()}>Cambiar tema</button> */}
        </div>
        </div>
        </nav>
    </>
  );
};
export default Navbar; 
