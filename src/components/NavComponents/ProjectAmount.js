import React from "react";

const ProjectAmount = ({ setPage }) => {
  return (
    <div>
      <p>MONTANT DU PROJET</p>
      <button
        onClick={() => {
          setPage("contactInfos");
        }}
      ></button>
    </div>
  );
};

export default ProjectAmount;
