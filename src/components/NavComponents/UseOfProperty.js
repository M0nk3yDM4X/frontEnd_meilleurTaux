import React from "react";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const UseOfProperty = ({
  setPage,
  inputState,
  setInputState,
  setLoadingProgress,
  loadingProgress
}) => {
  const valPrincipal = "Résidence Principale";
  const valSecondary = "Résidence Secondaire";
  const valLoc = "Investissement Locatif";

  const handleChange = event => {
    setInputState({
      ...inputState,
      useOfProperty: event.target.value
    });

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
        nextFunc={() => {
          if (inputState.useOfProperty === "") {
            alert("Vous devez sélectioner un choix");
          } else {
            setPage("userSituation");
          }
        }}
      />
    </>
  );
};

export default UseOfProperty;
