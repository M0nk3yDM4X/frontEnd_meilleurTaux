import React from "react";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const UserSituation = ({ setPage, inputState, setInputState }) => {
  const valTenant = "Locataire";
  const valOwner = "Propriétaire";
  const valBeneficiary = "Bénéficiaire d'un logement de fonction";
  const valHosted = "Hébergé à titre gratuit";

  const handleChange = event => {
    setInputState({
      ...inputState,
      userSituation: event.target.value
    });

    setPage("location");
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">votre situation</h1>
        </div>

        <div className="radioInputContainer">
          {/* Call of the component RadioInput, which is actually a radio input inside a label  */}
          {/* We are sending by props some things: */}
          {/* a name, a value, the key corresponding to this page of our state inputState from App.js */}
          {/* And the most important, a function which will change our state inputState by copying it with a spread operator  */}
          {/* The value sended to our state will be the value of the input clicked  */}
          {/* This function manage also the state page, because if a choice is clicked, the user go the next page  */}
          <RadioInput
            name={"locataire"}
            value={valTenant}
            isChecked={inputState.userSituation}
            func={handleChange}
            title={valTenant}
          />
          <RadioInput
            name={"propriétaire"}
            value={valOwner}
            isChecked={inputState.userSituation}
            func={handleChange}
            title={valOwner}
          />
          <RadioInput
            name={"beneficiaire"}
            value={valBeneficiary}
            isChecked={inputState.userSituation}
            func={handleChange}
            title={valBeneficiary}
          />
          <RadioInput
            name={"hébergé"}
            value={valHosted}
            isChecked={inputState.userSituation}
            func={handleChange}
            title={valHosted}
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
        prevFunc={() => setPage("use")}
        loadingProgress={50}
        nextFunc={() => {
          if (inputState.userSituation === "") {
            alert("Vous devez sélectioner un choix");
          } else {
            setPage("location");
          }
        }}
      />
    </>
  );
};

export default UserSituation;
