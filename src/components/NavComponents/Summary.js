import React from "react";

const Summary = ({ projectId }) => {
  console.log("ICI PROJECTID, REPONDEZ >>>", projectId);
  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">et voilà le formulaire est terminé</h1>
        </div>

        <p>Votre numéro de dossier est le suivant: {projectId}</p>
      </div>
    </>
  );
};

export default Summary;
