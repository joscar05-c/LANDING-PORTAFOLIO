import React from "react";

const Servicios = () => {
  return (
    <section id="servicios" className="seccion-servicios fondo-industrial">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <div>
            <h2 className="subtitulo-seccion">Nuestras Capacidades</h2>
            <h3 className="titulo-seccion">Servicios de Mecanizado</h3>
          </div>
          <p className="texto-apoyo">
            Soluciones integrales desde el diseño hasta el acabado final.
          </p>
        </div>

        <div className="servicios-grid">
          <article className="tarjeta-servicio">
            <span className="material-symbols-outlined icono-fondo">
              settings
            </span>
            <span className="material-symbols-outlined icono-principal">
              precision_manufacturing
            </span>
            <h4>Torneado CNC</h4>
            <p>
              Mecanizado de precisión para ejes, casquillos y piezas cilíndricas
              con acabados de alta calidad.
            </p>
            <a href="#" className="enlace-servicio">
              Ver más
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <article className="tarjeta-servicio">
            <span className="material-symbols-outlined icono-fondo">
              grid_on
            </span>
            <span className="material-symbols-outlined icono-principal">
              architecture
            </span>
            <h4>Fresado</h4>
            <p>
              Cortes y formas complejas en 3 y 4 ejes para componentes que
              requieren exactitud geométrica.
            </p>
            <a href="#" className="enlace-servicio">
              Ver más
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <article className="tarjeta-servicio">
            <span className="material-symbols-outlined icono-fondo">
              blur_on
            </span>
            <span className="material-symbols-outlined icono-principal">
              texture
            </span>
            <h4>Rectificado</h4>
            <p>
              Acabados perfectos para superficies planas y cilíndricas,
              garantizando paralelismo.
            </p>
            <a href="#" className="enlace-servicio">
              Ver más
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <article className="tarjeta-servicio">
            <span className="material-symbols-outlined icono-fondo">
              handyman
            </span>
            <span className="material-symbols-outlined icono-principal">
              construction
            </span>
            <h4>Taladrado y Roscado</h4>
            <p>
              Perforaciones axiales exactas y creación de roscas internas o
              externas.
            </p>
            <a href="#" className="enlace-servicio">
              Ver más
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
