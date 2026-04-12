import React from "react";

const Navbar = ({ alternarTema, esModoOscuro, abrirModal }) => {
  return (
    <nav className="barra-navegacion">
      <div className="contenedor-nav">
        <div className="logo-grupo">
          <div className="logo-icono">
            <span className="material-symbols-outlined">settings_suggest</span>
          </div>
          <div className="logo-texto">
            <span className="marca">Metal Working</span>
            <span className="submarca">JC</span>
          </div>
        </div>

        <ul className="enlaces-nav">
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
          <li>
            <a href="#galeria">Galería</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button onClick={alternarTema} className="btn-secundario btn-redondo">
            <span className="material-symbols-outlined">
              {esModoOscuro ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button onClick={abrirModal} className="btn-primario">
            Cotizar Proyecto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
