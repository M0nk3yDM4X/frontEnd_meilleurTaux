import React from "react";
import Cookies from "js-cookie";

const RadioInput = ({ name, value, isChecked, title, func }) => {
  const typeCookie = Cookies.get("type");
  const stateCookie = Cookies.get("state");

  return (
    <label
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "black",
        borderRadius: "15px",
        height: "150px",
        marginRight: "20px",
        flex: 1
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={
          isChecked === value || value === typeCookie || value === stateCookie
        }
        onChange={func}
      />
      {title}
    </label>
  );
};

export default RadioInput;
