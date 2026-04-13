import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="seccion-contacto">
      <div className="contenedor layout-contacto">
        <div className="info-contacto">
          <h2 className="subtitulo-seccion">Contacto</h2>
          <h3 className="titulo-seccion">Solicite su Cotización</h3>
          <p>
            Nuestro equipo técnico revisará sus planos y requerimientos para
            enviarle una propuesta detallada en menos de 24 horas.
          </p>

          <ul className="lista-contacto">
            <li>
              <span className="material-symbols-outlined icono">location_on</span>
              <div className="datos">
                <span className="label">Ubicación Principal</span>
                <span className="valor">Jr. Los Girasoles 220<br />Rioja, San Martín, Perú</span>
              </div>
            </li>
            <li>
              <span className="material-symbols-outlined icono">call</span>
              <div className="datos">
                <span className="label">Atención Directa</span>
                <span className="valor">+51 927885314</span>
              </div>
            </li>
            <li>
              <span className="material-symbols-outlined icono">mail</span>
              <div className="datos">
                <span className="label">Email Técnico</span>
                <span className="valor">pizangojosec@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="formulario-contenedor">
          <form className="formulario">
            <div className="fila-form">
              <div className="grupo-form">
                <label htmlFor="nombre">Nombre Completo</label>
                <input type="text" id="nombre" placeholder="Ej. Juan Pérez" />
              </div>
              <div className="grupo-form">
                <label htmlFor="empresa">Empresa</label>
                <input type="text" id="empresa" placeholder="Industrial S.A." />
              </div>
            </div>

            <div className="grupo-form">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="juan@empresa.com" />
            </div>

            <div className="grupo-form">
              <label htmlFor="detalles">Detalles del Proyecto</label>
              <textarea id="detalles" rows="4" placeholder="Describa la pieza, material, cantidad..."></textarea>
            </div>

            <button type="submit" className="btn-primario ancho-completo">
              Enviar Solicitud
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;