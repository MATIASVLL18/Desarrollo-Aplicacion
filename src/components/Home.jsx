// src/components/Home.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Home.css";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [showEmpresas, setShowEmpresas] = useState(false);

  const empresas = [
    { nombre: "TechNova", color: "#fbbf24" },
    { nombre: "GreenSolutions", color: "#34d399" },
    { nombre: "InnovaCorp", color: "#60a5fa" },
    { nombre: "GlobalBiz", color: "#f472b6" },
    { nombre: "BlueWave", color: "#a78bfa" },
  ];

  const toggleEmpresas = () => setShowEmpresas(!showEmpresas);

  return (
    <div className="home-container">
      <h2>Reservas de Salas</h2>

      <div className="calendar-wrapper">
        <Calendar onChange={setDate} value={date} />
      </div>

      <button className="vincular-btn" onClick={toggleEmpresas}>
        {showEmpresas ? "Ocultar empresas" : "Vincular empresa"}
      </button>

      {showEmpresas && (
        <div className="empresa-lista">
          {empresas.map((empresa, idx) => (
            <div
              key={idx}
              className="empresa-card"
              style={{ borderColor: empresa.color }}
            >
              <h4>{empresa.nombre}</h4>
              <p>Ver disponibilidad y coordinar reunión</p>
            </div>
          ))}
        </div>
      )}

      <form className="reserva-form">
        <h3>Reservar una sala</h3>

        <label>Nombre de la sala</label>
        <input type="text" placeholder="Ej: Sala 1" />

        <label>Fecha</label>
        <input type="date" />

        <label>Hora</label>
        <input type="time" />

        <label>Duración (minutos)</label>
        <input type="number" placeholder="Ej: 60" />

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default Home;
