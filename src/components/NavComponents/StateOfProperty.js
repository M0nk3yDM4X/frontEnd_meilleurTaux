import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const StateOfProperty = ({
  setPage,
  inputState,
  setInputState,
  setLoadingProgress,
  loadingProgress
}) => {
  // const [isChecked, setIsChecked] = useState("");

  const valOld = "Ancien";
  const valNew = "Neuf";

  const handleChange = event => {
    setInputState({
      ...inputState,
      stateOfProperty: event.target.value
    });
    // setIsChecked(event.target.value);
    // Cookies.set("state", event.target.value);
    setPage("use");
    setLoadingProgress(loadingProgress + 16);
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">état du bien</h1>
        </div>

        <div className="radioInputContainer">
          <RadioInput
            name={"ancien"}
            value={valOld}
            isChecked={inputState.stateOfProperty}
            func={handleChange}
            title={valOld}
          />
          <RadioInput
            name={"neuf"}
            value={valNew}
            isChecked={inputState.stateOfProperty}
            func={handleChange}
            title={valNew}
          />
        </div>
      </div>
      <Footer
        prevFunc={() => setPage("home")}
        loadingProgress={loadingProgress}
        nextFunc={() => setPage("use")}
      />
    </>
  );
};

export default StateOfProperty;
