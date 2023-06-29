import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contacto from "./Routes/Contacto";
import Favoritos from "./Routes/Favoritos";
import Home from "./Routes/Home";
import Dentista from "./Routes/Dentista";
import "./App.css";
import ThemeProvider from "./Components/contexts/ThemeContext";


const App =() => {

  
  return (
    <>
    < ThemeProvider   >
      <div>
                
         <Navbar /> 
               
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
        </ThemeProvider>
      
    </>
  );
}

export default App;
