import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <span>Coucou vous êtes sur le login du backoffice</span>
        <input
          className="loginInput"
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
