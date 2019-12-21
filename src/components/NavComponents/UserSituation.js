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
