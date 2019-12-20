import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const UseOfProperty = ({
  setPage,
  inputState,
  setInputState,
  setLoadingProgress,
  loadingProgress
}) => {
  // const [isChecked, setIsChecked] = useState("");

  const valPrincipal = "Résidence Principale";
  const valSecondary = "Résidence Secondaire";
  const valLoc = "Investissement Locatif";

  const handleChange = event => {
    setInputState({
      ...inputState,
      useOfProperty: event.target.value
    });
    // setIsChecked(event.target.value);
    // Cookies.set("use", event.target.value);
    setPage("userSituation");
    setLoadingProgress(loadingProgress + 17);
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">usage du bien</h1>
        </div>
        <div className="radioInputContainer">
          <RadioInput
            name={"residencePrincipale"}
            value={valPrincipal}
            isChecked={inputState.useOfProperty}
            func={handleChange}
            title={valPrincipal}
          />

          <RadioInput
            name={"residenceSecondaire"}
            value={valSecondary}
            isChecked={inputState.useOfProperty}
            func={handleChange}
            title={valSecondary}
          />
          <RadioInput
            name={"investissementLoc"}
            value={valLoc}
            isChecked={inputState.useOfProperty}
            func={handleChange}
            title={valLoc}
          />
        </div>
      </div>
      <Footer
        prevFunc={() => setPage("state")}
        loadingProgress={loadingProgress}
        nextFunc={() => setPage("userSituation")}
      />
    </>
  );
};

export default UseOfProperty;
