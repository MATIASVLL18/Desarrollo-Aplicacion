// src/components/MiPerfil.jsx
import React from "react";
import "./MiPerfil.css";

const MiPerfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Foto de perfil"
          className="perfil-foto"
        />
        <h2>Matías Valenzuela</h2>
        <p className="perfil-cargo">Gerente de Operaciones - Empresa XYZ</p>

        <form className="perfil-form">
          <label>Nombre completo</label>
          <input type="text" value="Matías Valenzuela" readOnly />

          <label>Correo electrónico</label>
          <input type="email" value="matias.valenzuela@empresa.com" readOnly />

          <label>Número de contacto</label>
          <input type="tel" value="+56 9 1234 5678" readOnly />

          <label>Cargo</label>
          <input type="text" value="Gerente de Operaciones" readOnly />
        </form>
      </div>
    </div>
  );
};

export default MiPerfil;
