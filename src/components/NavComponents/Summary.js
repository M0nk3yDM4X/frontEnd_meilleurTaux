import React from "react";
import Cookies from "js-cookie";

import FinalFooter from "../GlobalComponents/FinalFooter.js";

const Summary = ({ projectId, setPage }) => {
  const handleChange = () => {
    Cookies.remove("actualPage");
    Cookies.remove("generalState");
    setPage("home");
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">et voilà le formulaire est terminé</h1>
        </div>

        <p>Votre numéro de dossier est le suivant: {projectId}</p>
      </div>
      <FinalFooter finish={handleChange} />
    </>
  );
};

export default Summary;
