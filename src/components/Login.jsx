import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://img.icons8.com/color/96/meeting-room.png"
          alt="Logo"
          className="login-logo"
        />
        <h1 className="login-title">Ingreso a ReuniApp</h1>
        <p className="login-subtitle">Reserva tus salas fácilmente</p>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Correo electrónico</label>
          <input type="email" placeholder="tucorreo@empresa.com" />
          <label>Contraseña</label>
          <input type="password" placeholder="••••••••" />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p className="login-footer">© 2025 ReuniApp. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Login;
