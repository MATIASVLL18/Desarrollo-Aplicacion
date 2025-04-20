// src/components/Meet.jsx
import React, { useState } from "react";
import "./Meet.css";

const Meet = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [micOn, setMicOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [callActive, setCallActive] = useState(true);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setMessages([...messages, { user: "Tú", text: input }]);
      setInput("");
    }
  };

  const toggleMic = () => setMicOn(!micOn);
  const toggleScreen = () => setScreenSharing(!screenSharing);
  const endCall = () => setCallActive(false);

  if (!callActive) {
    return (
      <div className="call-ended">
        <h2>📴 La llamada ha finalizado</h2>
        <p>Gracias por usar ReuniApp Meet</p>
      </div>
    );
  }

  return (
    <div className="meet-container">
      <div className="video-section">
        <div className="video-box">
          <img src="/cr7.jpg" alt="Tú (CR7)" />
          <p>Tú (CR7)</p>
        </div>
        <div className="video-box">
          <img src="/messi.jpg" alt="Invitado (Messi)" />
          <p>Invitado (Messi)</p>
        </div>

        <div className="controls">
          <button onClick={toggleMic}>
            {micOn ? "🎙️ Mic ON" : "🔇 Muted"}
          </button>
          <button onClick={toggleScreen}>
            {screenSharing ? "🛑 Detener pantalla" : "🖥️ Compartir pantalla"}
          </button>
          <button className="end-call" onClick={endCall}>📞 Cortar llamada</button>
        </div>
      </div>

      <div className="chat-section">
        <h3>Chat en la reunión</h3>
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <p key={idx}><strong>{msg.user}:</strong> {msg.text}</p>
          ))}
        </div>
        <form onSubmit={handleSend} className="chat-form">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Meet;
