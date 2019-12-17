import React from "react";

const Footer = ({ prevFunc, nextFunc }) => {
  return (
    <div className="footer">
      <button onClick={prevFunc}>PRECEDENT</button>
      <button onClick={nextFunc}>SUIVANT</button>
    </div>
  );
};

export default Footer;
