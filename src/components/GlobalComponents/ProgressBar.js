import React from "react";

import Filler from "../GlobalComponents/Filler.js";

const ProgressBar = ({ loadingProgress }) => {
  return (
    <div className="progress">
      <Filler loadingProgress={loadingProgress} />
    </div>
  );
};

export default ProgressBar;
