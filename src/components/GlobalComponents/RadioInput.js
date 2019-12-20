import React from "react";

const RadioInput = ({ name, value, isChecked, title, func }) => {
  // const typeCookie = Cookies.get("type");
  // const stateCookie = Cookies.get("state");
  // const useCookie = Cookies.get("use");
  // const userSituationCookie = Cookies.get("userSituation");

  return (
    <>
      {value !== isChecked ? (
        <label className="radioInput">
          <input
            className="radioInputCheck"
            type="radio"
            name={name}
            value={value}
            checked={isChecked === value}
            // ||
            // value === typeCookie ||
            // value === stateCookie ||
            // value === useCookie ||
            // value === userSituationCookie
            onChange={func}
          />
          <span className="radioInputTitle">{title}</span>
        </label>
      ) : (
        <label className="radioInputChecked">
          <input
            className="radioInputCheck"
            type="radio"
            name={name}
            value={value}
            checked={isChecked === value}
            // ||
            // value === typeCookie ||
            // value === stateCookie ||
            // value === useCookie ||
            // value === userSituationCookie
            onChange={func}
          />
          <span className="radioInputTitleChecked">{title}</span>
        </label>
      )}
    </>
  );
};

export default RadioInput;
