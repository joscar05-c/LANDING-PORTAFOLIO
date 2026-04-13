import React from "react";

const Footer = ({ esModoOscuro }) => {
  return (
    <footer className="pie-pagina">
      <div className="contenedor layout-footer">
        <div className="logo-grupo">
          <div className="logo-icono">
            <img 
              src="/logo-oscuro.png" 
              alt="Logo Metal Working JC" 
              className={`img-logo ${esModoOscuro ? 'logo-blanco' : ''}`} 
            />
          </div>
          <div className="logo-texto">
            <span className="marca">Metal Working</span>
            <span className="submarca">JC</span>
          </div>
        </div>

        <p className="copyright">
          © 2024 Metal Working JC. Todos los derechos reservados.
        </p>

        <div className="redes">
          <a href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">shield</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">policy</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
