import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const UseOfProperty = ({
  setPage,
  inputState,
  setInputState
  // setLoadingProgress,
  // loadingProgress
}) => {
  const [isChecked, setIsChecked] = useState("");

  const valPrincipal = "Résidence Principale";
  const valSecondary = "Résidence Secondaire";
  const valLoc = "Investissement Locatif";

  const handleChange = event => {
    setInputState({
      ...inputState,
      useOfProperty: event.target.value
    });
    setIsChecked(event.target.value);
    Cookies.set("use", event.target.value);
    setPage("userSituation");
    // setLoadingProgress(loadingProgress + 12.5);
  };

  return (
    <div>
      <h1 className="pageTitle">USAGE DU BIEN</h1>
      <div className="radioInputContainer">
        <RadioInput
          name={"residencePrincipale"}
          value={valPrincipal}
          isChecked={isChecked}
          func={handleChange}
          title={valPrincipal}
        />
        <RadioInput
          name={"residenceSecondaire"}
          value={valSecondary}
          isChecked={isChecked}
          func={handleChange}
          title={valSecondary}
        />
        <RadioInput
          name={"investissementLoc"}
          value={valLoc}
          isChecked={isChecked}
          func={handleChange}
          title={valLoc}
        />
      </div>

      <Footer
        prevFunc={() => setPage("state")}
        nextFunc={() => setPage("userSituation")}
      />
    </div>
  );
};

export default UseOfProperty;
