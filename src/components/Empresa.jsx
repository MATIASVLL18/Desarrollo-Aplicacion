// src/components/Empresa.jsx
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Empresa.css";

const Empresa = () => {
  const eventos = [
    {
      title: "Reunión - TechCorp",
      date: "2025-04-20",
      color: "#3b82f6",
    },
    {
      title: "Presentación - Global Solutions",
      date: "2025-04-21",
      color: "#10b981",
    },
    {
      title: "Capacitación - InnovateX",
      date: "2025-04-22",
      color: "#f59e0b",
    },
    {
      title: "Board Meeting - SkyNet",
      date: "2025-04-23",
      color: "#ef4444",
    },
  ];

  return (
    <div className="empresa-container">
      <h2>Reservas Programadas</h2>

      <div className="calendario-box">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={eventos} />
      </div>

      <div className="cancel-box">
        <h3>Formulario de Cancelación</h3>
        <form className="cancel-form">
          <label>Nombre de la Empresa</label>
          <input type="text" value="TechCorp" readOnly />

          <label>Fecha de la Reserva</label>
          <input type="date" value="2025-04-20" readOnly />

          <label>Motivo de Cancelación</label>
          <textarea placeholder="Indique el motivo de la cancelación..." rows="3">
Conflicto de agenda interna
          </textarea>

          <button type="submit">Enviar Cancelación</button>
        </form>
      </div>
    </div>
  );
};

export default Empresa;
