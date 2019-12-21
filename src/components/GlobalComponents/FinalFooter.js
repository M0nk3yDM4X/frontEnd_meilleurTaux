import React from "react";

const FinalFooter = ({ finish }) => {
  return (
    <div className="footer">
      <div className="finalFooter">
        <span onClick={finish}>Retournez à la page d'accueil</span>
      </div>
    </div>
  );
};

export default FinalFooter;
