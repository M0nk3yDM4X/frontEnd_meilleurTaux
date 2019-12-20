import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapMyHeader">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <Link to="/">
            <img className="logo" src={Logo} alt="meilleur-taux" />
          </Link>
          <span>Crédit immobilier: 5mn pour obtenir le meilleur taux</span>
        </div>
        <div>
          <Link to="/login/back-office">
            <span>Go to back-office</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
