import React from "react";
import imgGaleria1 from "../assets/galeria1.jpg";
import imgGaleria2 from "../assets/galeria2.jpg";
import imgGaleria3 from "../assets/galeria3.jpg"; // Revisa si era la 1 o la 3 en tu carpeta
import imgGaleria4 from "../assets/galeria4.jpg";

const Galeria = () => {
  return (
    <section id="galeria" className="seccion-galeria">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <div>
            <h2 className="subtitulo-seccion">Muestra de Trabajo</h2>
            <h3 className="titulo-seccion">Galería de Precisión</h3>
          </div>
        </div>

        <div className="galeria-grid">
          <div className="item-galeria destacado-grande">
            <img src={imgGaleria1} alt="Ensamblaje Técnico" />
            <div className="etiqueta-imagen">Ensamblaje Técnico</div>
          </div>
          <div className="item-galeria">
            <img src={imgGaleria2} alt="Pieza de precisión" />
          </div>
          <div className="item-galeria">
            <img src={imgGaleria3} alt="Herramientas" />
          </div>
          <div className="item-galeria destacado-ancho">
            <img src={imgGaleria4} alt="Acabado Espejo" />
            <div className="etiqueta-imagen">Acabado Espejo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
