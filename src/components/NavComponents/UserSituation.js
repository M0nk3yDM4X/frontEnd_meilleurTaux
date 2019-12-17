import React from "react";

const UserSituation = ({ setPage, inputState, setInputState }) => {
  return (
    <div>
      <p>VOTRE SITUATION</p>
      <input
        type="checkbox"
        name="locataire"
        value={"Locataire"}
        onChange={event => {
          setInputState({ ...inputState, userSituation: event.target.value });
          setPage("location");
        }}
      />
      <input
        type="checkbox"
        name="proprietaire"
        value={"Propriétaire"}
        onChange={event => {
          setInputState({ ...inputState, userSituation: event.target.value });
          setPage("location");
        }}
      />
      <input
        type="checkbox"
        name="beneficiaire"
        value={"Béneficiaire d'un logement de fonction"}
        onChange={event => {
          setInputState({ ...inputState, userSituation: event.target.value });
          setPage("location");
        }}
      />
      <input
        type="checkbox"
        name="heberge"
        value={"Hébergé à titre gratuit"}
        onChange={event => {
          setInputState({ ...inputState, userSituation: event.target.value });
          setPage("location");
        }}
      />
      <button onClick={() => setPage("use")}>Click Me</button>
    </div>
  );
};

export default UserSituation;
