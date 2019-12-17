import React from "react";

const UseOfProperty = ({ setPage, inputState, setInputState }) => {
  return (
    <div>
      <p>USAGE DU BIEN</p>
      <input
        type="checkbox"
        name="residencePrincipale"
        value={"Résidence Principale"}
        onChange={event => {
          setInputState({ ...inputState, useOfProperty: event.target.value });
          setPage("userSituation");
        }}
      />
      <input
        type="checkbox"
        name="residenceSecondaire"
        value={"Résidence Secondaire"}
        onChange={event => {
          setInputState({ ...inputState, useOfProperty: event.target.value });
          setPage("userSituation");
        }}
      />
      <input
        type="checkbox"
        name="investissementLocatif"
        value={"Investissement Locatif"}
        onChange={event => {
          setInputState({ ...inputState, useOfProperty: event.target.value });
          setPage("userSituation");
        }}
      />
      <button onClick={() => setPage("state")}>Précédent</button>
    </div>
  );
};

export default UseOfProperty;
