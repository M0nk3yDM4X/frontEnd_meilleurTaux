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
  const [isChecked, setIsChecked] = useState("");

  const valTenant = "Locataire";
  const valOwner = "Propriétaire";
  const valBeneficiary = "Bénéficiaire d'un logement de fonction";
  const valHosted = "Hébergé à titre gratuit";

  const handleChange = event => {
    setInputState({
      ...inputState,
      userSituation: event.target.value
    });
    setIsChecked(event.target.value);
    Cookies.set("userSituation", event.target.value);
    setPage("location");
  };

  return (
    <div>
      <h1 className="pageTitle">VOTRE SITUATION</h1>

      <div className="radioInputContainer">
        <RadioInput
          name={"locataire"}
          value={valTenant}
          isChecked={isChecked}
          func={handleChange}
          title={valTenant}
        />
        <RadioInput
          name={"propriétaire"}
          value={valOwner}
          isChecked={isChecked}
          func={handleChange}
          title={valOwner}
        />
        <RadioInput
          name={"beneficiaire"}
          value={valBeneficiary}
          isChecked={isChecked}
          func={handleChange}
          title={valBeneficiary}
        />
        <RadioInput
          name={"hébergé"}
          value={valHosted}
          isChecked={isChecked}
          func={handleChange}
          title={valHosted}
        />
      </div>

      <Footer
        prevFunc={() => setPage("use")}
        nextFunc={() => setPage("location")}
      />
    </div>
  );
};

export default UserSituation;
