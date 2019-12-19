import React from "react";

const Summary = ({ projectId }) => {
  console.log("ICI PROJECTID, REPONDEZ >>>", projectId);
  return (
    <div>
      <p>Ceci est l'écran final</p>
      <p>Votre numéro de dossier est le suivant: {projectId}</p>
    </div>
  );
};

export default Summary;
