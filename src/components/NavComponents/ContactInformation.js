import React from "react";

const ContactInformation = ({ setPage }) => {
  return (
    <div>
      <p>CONTACT</p>
      <button
        onClick={() => {
          setPage("summary");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default ContactInformation;
