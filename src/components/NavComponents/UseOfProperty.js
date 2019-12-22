import React from "react";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const UseOfProperty = ({ setPage, inputState, setInputState }) => {
  const valPrincipal = "Résidence Principale";
  const valSecondary = "Résidence Secondaire";
  const valLoc = "Investissement Locatif";

  const handleChange = event => {
    setInputState({
      ...inputState,
      useOfProperty: event.target.value
    });

    setPage("userSituation");
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">usage du bien</h1>
        </div>
        <div className="radioInputContainer">
          {/* Call of the component RadioInput, which is actually a radio input inside a label  */}
          {/* We are sending by props some things: */}
          {/* a name, a value, the key corresponding to this page of our state inputState from App.js */}
          {/* And the most important, a function which will change our state inputState by copying it with a spread operator  */}
          {/* The value sended to our state will be the value of the input clicked  */}
          {/* This function manage also the state page, because if a choice is clicked, the user go the next page  */}

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
      {/* Call of the component Footer which contains: */}
      {/* 1) A previous button which manage the state Page, by setting this one the precedent page value to go back */}
      {/* 2) A next button which manage the state Page, by setting this one the next page value to go next */}
      {/* --!The next button can only be clicked if a choice has been made */}
      {/* 3) A ProgressBar which is a component. This component receives on every page a value to show the progress */}
      {/* ---between different steps til the end */}

      <Footer
        prevFunc={() => setPage("state")}
        loadingProgress={36}
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
