import React from "react";

const ContactInformation = ({ setPage }) => {
  return (
    <div>
      <h1 className="pageTitle">CONTACT</h1>
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
