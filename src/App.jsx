import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import Perfil from "./pages/Perfil/Perfil";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import PostCompleto from "./pages/PostCompleto/PostCompleto";
import CriarPubli from "./pages/CriarPubli/CriarPubli";
import EditarPubli from "./pages/EditarPubli/EditarPubli";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/postcompleto" element={<PostCompleto />} />
          <Route path="/login" element={<Login/>}/> 
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/criar" element={<CriarPubli/>}/>
          <Route path="/editar" element={<EditarPubli/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
