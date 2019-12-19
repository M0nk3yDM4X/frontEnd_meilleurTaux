import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";

const TypeOfProperty = ({
  page,
  setPage,
  setInputState,
  inputState,
  loadingProgress,
  setLoadingProgress
}) => {
  const [isChecked, setIsChecked] = useState("");

  const valMaison = "Maison";
  const valAppart = "Appartement";

  const handleChange = event => {
    setInputState({
      ...inputState,
      typeOfProperty: event.target.value
    });
    setIsChecked(event.target.value);
    Cookies.set("type", event.target.value);
    setPage("state");
    setLoadingProgress(loadingProgress + 12.5);
  };

  return (
    <div className="pageContent">
      <h1 className="pageTitle">TYPE DE BIEN</h1>
      <div className="radioInputContainer">
        <RadioInput
          name={"maison"}
          value={valMaison}
          isChecked={isChecked}
          func={handleChange}
          title={valMaison}
        />
        <RadioInput
          name={"appartement"}
          value={valAppart}
          isChecked={isChecked}
          func={handleChange}
          title={valAppart}
        />
      </div>
    </div>
  );
};

export default TypeOfProperty;
