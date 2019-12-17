import React from "react";

const LocationOfProperty = ({ setPage }) => {
  return (
    <div>
      <p>LOCALISATION DU BIEN</p>
      <button
        onClick={() => {
          setPage("amount");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default LocationOfProperty;
