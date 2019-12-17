import React from "react";
import Cookies from "js-cookie";

const RadioInput = ({ name, value, isChecked, title, func }) => {
  const typeCookie = Cookies.get("type");
  const stateCookie = Cookies.get("state");
  const useCookie = Cookies.get("use");
  const userSituationCookie = Cookies.get("userSituation");

  return (
    <label className="radioInput">
      <input
        className="radioInputTitle"
        type="radio"
        name={name}
        value={value}
        checked={
          isChecked === value ||
          value === typeCookie ||
          value === stateCookie ||
          value === useCookie ||
          value === userSituationCookie
        }
        onChange={func}
      />
      {title}
    </label>
  );
};

export default RadioInput;
