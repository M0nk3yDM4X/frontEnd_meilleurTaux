import React, { useState, useEffect } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

import Footer from "../GlobalComponents/Footer.js";

const LocationOfProperty = ({
  setPage,
  setInputState,
  inputState,
  loadingProgress,
  setLoadingProgress
}) => {
  const [zipCode, setZipCode] = useState(inputState.locationOfProperty);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + zipCode
    );
    setList(response.data.cities);
  };

  useEffect(() => {
    fetchData();
  }, [zipCode]);

  const array = [];

  for (let i = 0; i < list.length; i++) {
    const key = list[i];
    let city = key.city;
    array.push(city);
  }

  const dropDownArray = [];

  for (let i = 0; i < array.length; i++) {
    dropDownArray.push(
      <option key={i} value={array[i]}>
        {array[i]}
      </option>
    );
  }

  const handleInputChange = event => {
    setZipCode(event.target.value);
  };

  const handleChange = () => {
    if (zipCode !== "") {
      setInputState({
        ...inputState,
        locationOfProperty: zipCode
      });
      setPage("amount");
      setLoadingProgress(loadingProgress + 16);
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
                onChange={handleInputChange}
              />
              {zipCode === "" ? null : (
                <select
                  className="responseSelect"
                  value={zipCode}
                  onChange={handleInputChange}
                >
                  {dropDownArray}
                </select>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer
        prevFunc={() => {
          setPage("userSituation");
        }}
        loadingProgress={loadingProgress}
        nextFunc={handleChange}
      />
    </>
  );
};

export default LocationOfProperty;
