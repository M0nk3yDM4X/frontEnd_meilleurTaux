import React from "react";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const TypeOfProperty = ({ setPage, setInputState, inputState }) => {
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
          {/* Call of the component RadioInput, which is actually a radio input inside a label  */}
          {/* We are sending by props some things: */}
          {/* a name, a value, the key corresponding to this page of our state inputState from App.js */}
          {/* And the most important, a function which will change our state inputState by copying it with a spread operator  */}
          {/* The value sended to our state will be the value of the input clicked  */}
          {/* This function manage also the state page, because if a choice is clicked, the user goes to the next page  */}

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
      {/* Call of the component Footer which contains: */}
      {/* 1) A previous button which manage the state Page, by setting this one the precedent page value to go back */}
      {/* 2) A next button which manage the state Page, by setting this one the next page value to go next */}
      {/* --!The next button can only be clicked if a choice has been made */}
      {/* 3) A ProgressBar which is a component. This component receives on every page a value to show the progress */}
      {/* ---between different steps til the end */}

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
