import React from "react";
import Cookies from "js-cookie";

import FinalFooter from "../GlobalComponents/FinalFooter.js";

const Summary = ({ projectId, setPage }) => {
  // Function handleChange to remove all the cookies of the navigation
  // And to return at the first page

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
        {/* We get the projectID state value from App.js */}
        {/* ProjectID is a response of our back with the Id demand */}
        <p>Votre numéro de dossier est le suivant: {projectId}</p>
      </div>
      <FinalFooter finish={handleChange} />
    </>
  );
};

export default Summary;
