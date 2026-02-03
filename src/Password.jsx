import { useState, useEffect } from "react";
import './App.css'
export default function PasswordGate({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      setIsAuth(true);
    }
  }, []);

  const login = () => {
    if (password === import.meta.env.VITE_APP_PASSWORD) {
      localStorage.setItem("auth", "true");
      setIsAuth(true);
    } else {
      alert("Wrong password ❌");
    }
  };

  if (!isAuth) {
    return (
      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <h2>🔒 Private App</h2>
        <input className="input"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button onClick={login}>Enter</button>
      </div>
    );
  }

  return children;
}
