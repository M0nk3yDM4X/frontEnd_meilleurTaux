import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const StateOfProperty = ({
  page,
  setPage,
  inputState,
  setInputState
  // setLoadingProgress,
  // loadingProgress
}) => {
  const [isChecked, setIsChecked] = useState("");

  const valOld = "Ancien";
  const valNew = "Neuf";

  const handleChange = event => {
    setInputState({
      ...inputState,
      stateOfProperty: event.target.value
    });
    setIsChecked(event.target.value);
    Cookies.set("state", event.target.value);
    setPage("use");
    // setLoadingProgress(loadingProgress + 12.5);
  };

  return (
    <div>
      <h1 className="pageTitle">ETAT DU BIEN</h1>

      <div className="radioInputContainer">
        <RadioInput
          name={"ancien"}
          value={valOld}
          isChecked={isChecked}
          func={handleChange}
          title={valOld}
        />
        <RadioInput
          name={"neuf"}
          value={valNew}
          isChecked={isChecked}
          func={handleChange}
          title={valNew}
        />
      </div>

      <Footer
        prevFunc={() => setPage("home")}
        nextFunc={() => setPage("use")}
      />
    </div>
  );
};

export default StateOfProperty;
