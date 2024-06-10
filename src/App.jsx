import React, { useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import Perfil from "./pages/Perfil/Perfil";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import PostCompleto from "./pages/PostCompleto/PostCompleto";
import CriarPubli from "./pages/CriarPubli/CriarPubli";
import EditarPubli from "./pages/EditarPubli/EditarPubli";
import Footer from "./components/Footer/Footer";

function App() {
  const publicacoesRef = useRef(null);
  const [categoria, setCategoria] = useState('gerais');

  const handlePublicacoesClick = (nomeCategoria = 'gerais') => {
    setCategoria(nomeCategoria);
    publicacoesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <NavBar onPublicacoesClick={handlePublicacoesClick} />
      <div className="">
        <Routes>
          <Route path="/" element={<Home publicacoesRef={publicacoesRef} categoria={categoria} />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/postcompleto" element={<PostCompleto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/criar" element={<CriarPubli />} />
          <Route path="/editar" element={<EditarPubli />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
