import React from "react";

const Filler = ({ loadingProgress }) => {
  return (
    <div
      style={{
        width: `${loadingProgress}%`
      }}
      className="filler"
    />
  );
};

export default Filler;
