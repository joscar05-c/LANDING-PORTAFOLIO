import React from "react";

const Modal = ({ cerrar }) => {
  return (
    <div className="modal-fondo" onClick={cerrar}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <button className="modal-btn-cerrar" onClick={cerrar}>
          &times;
        </button>
        <h3
          className="titulo-seccion"
          style={{ fontSize: "2rem", marginBottom: "1rem" }}
        >
          Nueva Cotización
        </h3>
        <p style={{ color: "var(--texto-secundario)", marginBottom: "2rem" }}>
          Ingrese los datos para su proyecto en Metal Working JC.
        </p>

        <form className="formulario">
          <div className="grupo-form">
            <label>Empresa / Cliente</label>
            <input type="text" placeholder="Ej. Industrial S.A." />
          </div>
          <div className="grupo-form">
            <label>Requerimiento Técnico</label>
            <textarea
              rows="4"
              placeholder="Describa el material, cantidad y tolerancias..."
            ></textarea>
          </div>
          <button
            type="button"
            onClick={cerrar}
            className="btn-primario ancho-completo"
            style={{ marginTop: "1rem" }}
          >
            Enviar Solicitud{" "}
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
