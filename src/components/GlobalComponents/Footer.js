import React from "react";

import ProgressBar from "./ProgressBar.js";

const Footer = ({ prevFunc, nextFunc, loadingProgress }) => {
  return (
    <div className="footer">
      <button onClick={prevFunc}>PRECEDENT</button>
      <ProgressBar loadingProgress={loadingProgress} />
      <button onClick={nextFunc}>SUIVANT</button>
    </div>
  );
};

export default Footer;
