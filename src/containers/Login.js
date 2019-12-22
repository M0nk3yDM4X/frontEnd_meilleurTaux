import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // We set a state password to listen input login
  const [password, setPassword] = useState("");

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <span>Veuillez renseigner le mot de passe</span>
        <input
          className="loginInput"
          type="password"
          placeholder="Se connecter"
          value={password}
          // Setting new value of state password by the value that the user will type on the input
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        {/* As we know the password of the exercise */}
        {/* Saying that if value of password state equal to "tothemoon"  the connection button will be showed*/}
        {/* Certainly this is not secure at all, and normally we have to create a /login route on our backend, and call it from our front by axios.post call  */}
        {/* In order to compare salt hash and token based on our dataBase from a signUp */}
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
