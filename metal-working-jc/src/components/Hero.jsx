import React from "react";
import heroImg from "../assets/HERO2.jpg";

const Hero = ({ abrirModal }) => {
  return (
    <header className="hero">
      <div className="hero-fondo">
        <img src={heroImg} alt="Torno funcionando" />
      </div>

      <div className="hero-contenido">
        <div className="etiqueta-destacada">
          <span className="punto-animado"></span>
          Taller de Alta Precisión
        </div>

        <h1 className="titulo-principal">
          Precisión <span>Milimétrica</span> en Cada Pieza
        </h1>

        <p className="descripcion-hero">
          Fabricación industrial de piezas personalizadas, reparación de
          componentes y mecanizado CNC con los más altos estándares de
          tolerancia.
        </p>

        <div className="botones-hero">
          <button className="btn-primario" onClick={abrirModal}>
            Cotizar Proyecto
          </button>
          <a
            href="#galeria"
            className="btn-secundario"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Ver Portafolio
          </a>
        </div>
      </div>

      <div className="tolerancia-flotante">
        <span className="numero">
          0.005<span>mm</span>
        </span>
        <span className="texto">Tolerancia Máxima</span>
      </div>
    </header>
  );
};

export default Hero;
