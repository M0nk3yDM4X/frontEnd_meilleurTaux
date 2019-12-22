import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../GlobalComponents/Footer.js";

const LocationOfProperty = ({ setPage, setInputState, inputState }) => {
  // We set state zipCode to manage the input zipCode and his select choices proposed
  // The initial value of this state is inputState.locationOfProperty, so ""
  const [zipCode, setZipCode] = useState(inputState.locationOfProperty);

  // We set list to store data of our axios.get call, his initial value is an empty array
  const [list, setList] = useState([]);

  // fetchData function which is an axios.get call of vicopo api (zipcode & cities)
  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + zipCode // adding value of zipCode state to our search
    );
    setList(response.data.cities);
  };

  // Setting useEffect to call fetchData every time that zipCode state will change

  useEffect(() => {
    fetchData();
  }, [zipCode]);

  const array = [];

  // for loop to search in the value of state list

  for (let i = 0; i < list.length; i++) {
    // key will be all elements of the list {a: code & b:city}
    const key = list[i];

    // code will be the value a ok our constant key
    let code = key.code;

    // city will be the value b ok our constant key
    let city = key.city;

    // filling empty array by all cities values
    array.push(city + " (" + code + ")");
  }

  const dropDownArray = [<option>Sélectionnez votre choix</option>];

  // for loop to search all values of array
  // & filling dropDownArray with <option> {array[i]} </option>

  for (let i = 0; i < array.length; i++) {
    dropDownArray.push(
      <option key={i} value={array[i]}>
        {array[i]}
      </option>
    );
  }

  // Function handleChangeInput set the value of zipCode by the entry of the user inside the input

  const handleInputChange = event => {
    setZipCode(event.target.value);
  };

  // Function handleChange contains a condition
  // If the value of zipCode is different to ""
  // setInputState will receive the key locationOfProperty with the value of zipCode state
  // And the page will be change to the next one
  // Else an alert will be displayed

  const handleChange = () => {
    if (zipCode !== "") {
      setInputState({
        ...inputState,
        locationOfProperty: zipCode
      });
      setPage("amount");
    } else {
      alert("Vous devez renseigner un code postal ou une ville");
    }
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">Où se situe le bien à financer ?</h1>
        </div>
        <div className="answersContainer">
          <div className="answersInputContainerEven">
            <div className="questionContainer">
              <span>Dans quel pays se situe votre projet ?*</span>
            </div>
            <input className="response" defaultValue={"France"} />
          </div>
          <div className="answersInputContainerOdd">
            <div className="questionContainer">
              <span>Ville ou code postal*</span>
            </div>
            <div className="responseContainer">
              <input
                className="response"
                value={zipCode}
                // Call of handleInputChange
                onChange={handleInputChange}
                placeholder="Renseignez votre code postal"
              />
              {zipCode ? (
                <select
                  className="responseSelect"
                  value={zipCode}
                  // Call of handleInputChange
                  onChange={handleInputChange}
                >
                  {dropDownArray}
                </select>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer
        prevFunc={() => {
          setPage("userSituation");
        }}
        loadingProgress={65}
        // We are sending nextFunc equal to the handleChange function call, Footer component will receive this props
        // So, onClick of the next button will call handleChange function
        nextFunc={handleChange}
      />
    </>
  );
};

export default LocationOfProperty;
