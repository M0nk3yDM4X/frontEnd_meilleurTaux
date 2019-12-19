import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Footer from "../GlobalComponents/Footer.js";

const LocationOfProperty = ({ page, setPage, setInputState, inputState }) => {
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

  const handleChange = () => {
    setInputState({
      ...inputState,
      locationOfProperty: zipCode
    });
    Cookies.set("location", zipCode);
    setPage("amount");
  };

  return (
    <div>
      <h1 className="pageTitle">OÙ SE SITUE LE BIEN À FINNANCER ?</h1>

      <div
        style={{
          flexDirection: "column",
          marginBottom: "2rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightGrey",
            marginBottom: "1rem",
            padding: "10px 20px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "400px",
              backgroundColor: "yellow",
              height: "25px",
              padding: "5px"
            }}
          >
            <span>Dans quel pays se situe votre projet ?*</span>
          </div>
          <input
            style={{
              padding: "5px",
              border: "1px solid black",
              height: "25px"
            }}
            defaultValue={"France"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px 20px",
            alignItems: "center"
            // backgroundColor: "blue"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "400px",
              // backgroundColor: "pink",
              height: "25px",
              padding: "5px"
            }}
          >
            <span>Ville ou code postal*</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <input
              // style={{
              //   padding: "5px",
              //   border: "1px solid black",
              //   height: "25px",
              //   outline: "none"
              // }}
              value={zipCode}
              onChange={event => {
                setZipCode(event.target.value);
              }}
              // autoComplete={dropDownArray}
            />
            <select
              // style={{
              //   backgroundColor: "white",
              //   padding: "5px",
              //   height: "25px",
              //   width: "60px",
              //   borderRadius: "unset",
              //   border: "none"
              // }}
              value={zipCode}
              onChange={event => {
                setZipCode(event.target.value);
              }}
            >
              {dropDownArray}
            </select>
          </div>
        </div>
      </div>

      <Footer
        prevFunc={() => {
          setPage("userSituation");
        }}
        nextFunc={handleChange}
      />
    </div>
  );
};

export default LocationOfProperty;
