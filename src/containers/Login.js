import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "300px",
          width: "500px",
          backgroundColor: "orange"
        }}
      >
        <span>Coucou vous êtes sur le login du backoffice</span>
        <input
          style={{
            margin: "0",
            padding: "5px",
            border: "none",
            borderRadius: "5px",
            fontFamily: "Oswald"
          }}
          type="password"
          placeholder="Se connecter"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        {password === "tothemoon" ? (
          <Link to="/back-office">
            <span>se connecter</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
