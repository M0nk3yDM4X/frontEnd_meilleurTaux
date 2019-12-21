import React from "react";

import ProgressBar from "./ProgressBar.js";

const Footer = ({ prevFunc, nextFunc, loadingProgress }) => {
  return (
    <div className="footer">
      <span className="footerBack">Précédent</span>
      <ProgressBar loadingProgress={loadingProgress} />
      <div className="footerNext">
        <span onClick={nextFunc}>Suivant</span>
      </div>
    </div>
  );
};

export default Footer;
