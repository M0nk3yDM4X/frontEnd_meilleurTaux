import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";

const StateOfProperty = ({ page, setPage, inputState, setInputState }) => {
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
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>ETAT DU BIEN</h1>

      <div style={{ display: "flex" }}>
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

      <button onClick={() => setPage("home")}>PRECEDENT</button>
    </div>
  );
};

export default StateOfProperty;
