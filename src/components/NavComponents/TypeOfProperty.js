import React from "react";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const TypeOfProperty = ({
  setPage,
  setInputState,
  inputState,
  loadingProgress,
  setLoadingProgress
}) => {
  const valMaison = "Maison";
  const valAppart = "Appartement";

  const handleChange = event => {
    setInputState({
      ...inputState,
      typeOfProperty: event.target.value
    });

    setPage("state");
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">type de bien</h1>
        </div>

        <div className="radioInputContainer">
          <RadioInput
            name={"maison"}
            value={valMaison}
            isChecked={inputState.typeOfProperty}
            func={handleChange}
            title={valMaison}
          />
          <RadioInput
            name={"appartement"}
            value={valAppart}
            isChecked={inputState.typeOfProperty}
            func={handleChange}
            title={valAppart}
          />
        </div>
      </div>
      <Footer
        loadingProgress={12}
        nextFunc={() => {
          if (inputState.typeOfProperty === "") {
            alert("Vous devez sélectioner un choix");
          } else {
            setPage("state");
          }
        }}
      />
    </>
  );
};

export default TypeOfProperty;
