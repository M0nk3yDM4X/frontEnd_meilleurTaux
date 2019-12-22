import React from "react";

import ProgressBar from "./ProgressBar.js";

const Footer = ({ prevFunc, nextFunc, loadingProgress }) => {
  return (
    <div className="footer">
      <span className="footerBack" onClick={prevFunc}>
        Précédent
      </span>
      <ProgressBar loadingProgress={loadingProgress} />
      <div onClick={nextFunc} className="footerNext">
        <span>Suivant</span>
      </div>
    </div>
  );
};

export default Footer;
