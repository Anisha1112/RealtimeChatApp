import React, { useState } from "react";

export default function Login({ setUser }) {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setUser(name)}>Join Chat</button>
    </div>
  );
}
