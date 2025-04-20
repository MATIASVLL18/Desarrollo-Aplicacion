// src/components/HomePublic.jsx
import React from "react";
import "./HomePublic.css";

const HomePublic = () => {
  return (
    <div
      className="home-hero"
      style={{ backgroundImage: "url('/home.webp')" }} // ⬅ Fondo desde public
    >
      <div className="home-overlay">
        <div className="home-content">
          <h1>Bienvenido a ReuniApp</h1>
          <p>
            Optimiza la gestión de salas de reuniones en tu empresa. Reserva, organiza y controla
            tus espacios de manera eficiente y moderna.
          </p>

          <form className="contact-form">
            <h2>Contáctanos</h2>
            <input type="text" placeholder="Tu nombre" />
            <input type="email" placeholder="Tu correo" />
            <textarea placeholder="Escribe tu mensaje al administrador..." rows="4" />
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePublic;
