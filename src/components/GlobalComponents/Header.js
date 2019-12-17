import React from "react";
import Logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="meilleur-taux" />
      <span>Crédit immobilier: 5mn pour obtenir le meilleur taux</span>
    </div>
  );
};

export default Header;
