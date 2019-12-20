import React from "react";

import ProgressBar from "./ProgressBar.js";

const CheckedFooter = ({ prevFunc, nextFunc, loadingProgress }) => {
  return (
    <div className="footer">
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={prevFunc}
      >
        Précédent
      </span>
      <ProgressBar loadingProgress={loadingProgress} />
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
        <span onClick={nextFunc}>Suivant</span>
      </div>
    </div>
  );
};

export default CheckedFooter;
