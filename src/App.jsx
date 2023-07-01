import React, { useState } from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contacto from "./Routes/Contacto";
import Favoritos from "./Routes/Favoritos";
import Home from "./Routes/Home";
import Dentista from "./Routes/Dentista";
import "./App.css";
import { ThemeContext } from "./Components/contexts/ThemeContext";
//import ReactSwitch from "react-switch";

const App = () => {
  //const {themeContext, toggleTheme} = useContext(ThemeContext)

  /* const {contextTheme, setContextTheme} = ThemeContext ();

  const [checked, setChecked] =useState(false)
  
  const handleSwitch =(nextChecked) => {
    setContextTheme ((state)=> (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked)
    console.log(nextChecked)
  } */

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* < ThemeContextProvider   >  */}

      {/* <div id ={contextTheme}>
      <p>{contextTheme} Tema</p>
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
 */}
      {/* /> */}
      <div className={`${theme === "dark" ? "theme-dark" : "theme-light"}`}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            <Route path="/dentista/:id" element={<Dentista />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
