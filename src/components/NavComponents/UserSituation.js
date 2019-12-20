import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";
import Footer from "../GlobalComponents/Footer.js";

const UserSituation = ({
  setPage,
  inputState,
  setInputState,
  loadingProgress,
  setLoadingProgress
}) => {
  // const [isChecked, setIsChecked] = useState("");

  const valTenant = "Locataire";
  const valOwner = "Propriétaire";
  const valBeneficiary = "Bénéficiaire d'un logement de fonction";
  const valHosted = "Hébergé à titre gratuit";

  const handleChange = event => {
    setInputState({
      ...inputState,
      userSituation: event.target.value
    });
    // setIsChecked(event.target.value);
    // Cookies.set("userSituation", event.target.value);
    setPage("location");
    setLoadingProgress(loadingProgress + 17);
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
        loadingProgress={loadingProgress}
        nextFunc={() => setPage("location")}
      />
    </>
  );
};

export default UserSituation;
