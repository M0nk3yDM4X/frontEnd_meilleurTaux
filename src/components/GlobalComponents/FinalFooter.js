import React from "react";

const FinalFooter = ({ finish }) => {
  return (
    <div className="footer">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          width: "166px",
          height: "36px",
          borderRadius: "20px",
          cursor: "pointer"
        }}
      >
        <span onClick={finish}>Retournez à la page d'accueil</span>
      </div>
    </div>
  );
};

export default FinalFooter;
