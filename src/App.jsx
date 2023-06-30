import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contacto from "./Routes/Contacto";
import Favoritos from "./Routes/Favoritos";
import Home from "./Routes/Home";
import Dentista from "./Routes/Dentista";
import "./App.css";
import {useThemeContext} from "./Components/contexts/ThemeContext";
//import ReactSwitch from "react-switch";


const App =() => {

  const {contextTheme} = useThemeContext()

  /* const {contextTheme, setContextTheme} = useThemeContext ()

  const [checked, setChecked] =useState(false)
  
  const handleSwitch =(nextChecked) => {
    setContextTheme ((state)=> (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked)
    console.log(nextChecked)
  } */

  
  return (
    <>
    {/* < ThemeProvider   > */}
      <div>
        
                
         <Navbar id ={contextTheme}/> 
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Dentista/:id" element={<Dentista />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <p>Nuestros Odontologos </p>
        <Footer />
        </div>
        {/* </ThemeProvider> */}
      
    </>
  );
}

export default App;
