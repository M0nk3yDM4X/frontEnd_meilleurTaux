import React from "react";
import Cookies from "js-cookie";

const StateOfProperty = ({ setPage, inputState, setInputState }) => {
  Cookies.set("type", inputState.typeOfProperty);

  return (
    <div>
      <p>ETAT DU BIEN</p>
      <input
        type="checkbox"
        name="ancien"
        value={"Ancien"}
        onChange={event => {
          setInputState({ ...inputState, stateOfProperty: event.target.value });
          setPage("use");
        }}
      />
      <input
        type="checkbox"
        name="neuf"
        value={"Neuf"}
        onChange={event => {
          setInputState({ ...inputState, stateOfProperty: event.target.value });
          setPage("use");
        }}
      />
      <button onClick={() => setPage("home")}>Click me</button>
    </div>
  );
};

export default StateOfProperty;
