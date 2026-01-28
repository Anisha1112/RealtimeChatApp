import React, { useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");

  return user ? <Chat user={user} /> : <Login setUser={setUser} />;
}

export default App;
