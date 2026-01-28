import React, { useEffect, useState } from "react";
import socket from "../socket";

export default function Chat({ user }) {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [online, setOnline] = useState([]);

  useEffect(() => {
    socket.emit("join", user);

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("onlineUsers", setOnline);
  }, []);

  const send = () => {
    socket.emit("sendMessage", { user, text: msg });
    setMsg("");
  };

  return (
    <div>
      <h2>Welcome {user}</h2>
      <h4>Online Users: {online.join(", ")}</h4>

      {messages.map((m, i) => (
        <p key={i}><b>{m.user}</b>: {m.text}</p>
      ))}

      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
