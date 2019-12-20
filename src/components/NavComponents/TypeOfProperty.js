import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const TypeOfProperty = ({
  page,
  setPage,
  setInputState,
  inputState,
  loadingProgress,
  setLoadingProgress
}) => {
  // const [isChecked, setIsChecked] = useState("");

  const valMaison = "Maison";
  const valAppart = "Appartement";

  const handleChange = event => {
    setInputState({
      ...inputState,
      typeOfProperty: event.target.value
    });
    // setIsChecked(event.target.value);
    // Cookies.set("type", event.target.value);
    setPage("state");
    setLoadingProgress(loadingProgress + 17);
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
        loadingProgress={loadingProgress}
        nextFunc={() => {
          setPage("state");
        }}
      />
    </>
  );
};

export default TypeOfProperty;
