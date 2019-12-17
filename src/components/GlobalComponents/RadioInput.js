import React from "react";

const RadioInput = ({
  setInputState,
  inputState,
  setIsChecked,
  name,
  coucou,
  value,
  isChecked,
  title
}) => {
  const handleChange = event => {
    setInputState({
      ...inputState,
      key: event.target.value
    });
    setIsChecked(event.target.value);
    // setPage("state");
  };
  return (
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
        name={name}
        value={value}
        checked={isChecked === { value }}
        onChange={handleChange()}
      />
      {title}
    </label>
  );
};

export default RadioInput;
