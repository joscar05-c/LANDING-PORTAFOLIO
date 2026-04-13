import { useState, useEffect } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiencia from "./components/Experiencia";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const [esModoOscuro, setEsModoOscuro] = useState(() => {
    return localStorage.getItem("tema_preferido") !== "claro";
  });

  useEffect(() => {
    if (esModoOscuro) {
      document.body.classList.remove("tema-claro");
      localStorage.setItem("tema_preferido", "oscuro");
    } else {
      document.body.classList.add("tema-claro");
      localStorage.setItem("tema_preferido", "claro");
    }
  }, [esModoOscuro]);

  const alternarTema = () => {
    setEsModoOscuro(!esModoOscuro);
  };
  return (
    <>
      <Navbar
        alternarTema={alternarTema}
        esModoOscuro={esModoOscuro}
        abrirModal={() => setModalAbierto(true)}
      />

      <Hero abrirModal={() => setModalAbierto(true)} />

      <Experiencia />
      <Servicios />
      <Galeria />
      <Contacto />
      <Footer esModoOscuro={esModoOscuro} />

      {modalAbierto && <Modal cerrar={() => setModalAbierto(false)} />}
    </>
  );
}

export default App;
