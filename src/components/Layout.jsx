// src/components/Layout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="logo">ReuniApp</div>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/home">Reserva</Link></li>
          <li><Link to="/empresa">Empresa</Link></li>
          <li><Link to="/meet">Meet</Link></li>
          <li><Link to="/miperfil">Mis Datos</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
