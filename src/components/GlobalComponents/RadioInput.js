import React from "react";

const RadioInput = ({ name, value, isChecked, title, func }) => {
  return (
    <>
      <label
        className={value !== isChecked ? "radioInput" : "radioInputChecked"}
      >
        <input
          className="radioInputCheck"
          type="radio"
          name={name}
          value={value}
          checked={isChecked === value}
          onChange={func}
        />
        <span className="radioInputTitle">{title}</span>
      </label>
    </>
  );
};

export default RadioInput;
