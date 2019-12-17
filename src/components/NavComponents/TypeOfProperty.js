import React, { useState } from "react";
import Cookies from "js-cookie";

import RadioInput from "../GlobalComponents/RadioInput.js";

const TypeOfProperty = ({ setPage, setInputState, inputState }) => {
  const [isChecked, setIsChecked] = useState("");
  // const type = Cookies.get("type");
  // setIsChecked(type);
  // console.log(type);
  // const handleChange = event => {
  //   console.log(event.target.value);
  // };
  console.log(isChecked === "Appartement");
  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>TYPE DE BIEN</h1>
      <div style={{ display: "flex", backgroundColor: "pink" }}>
        {/* <RadioInput
          name={"maison"}
          value={"Maison"}
          inputState={inputState}
          setInputState={setInputState}
          setIsChecked={setIsChecked}
          coucou={inputState.typeOfProperty}
        /> */}
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
            height: "150px",
            marginRight: "20px",
            flex: 1
          }}
        >
          <input
            type="radio"
            name="maison"
            value="Maison"
            checked={isChecked === "Maison"}
            onChange={event => {
              setInputState({
                ...inputState,
                typeOfProperty: event.target.value
              });
              setIsChecked(event.target.value);
              // setPage("state");
            }}
          />
          Maison
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            height: "150px",
            flex: 1
          }}
        >
          <input
            type="radio"
            name="appartement"
            value="Appartement"
            checked={isChecked === "Appartement"}
            onChange={event => {
              setInputState({
                ...inputState,
                typeOfProperty: event.target.value
              });
              setIsChecked(event.target.value);
              // setPage("state");
            }}
          />
          Appartement
        </label>
      </div>
    </div>
  );
};

export default TypeOfProperty;
