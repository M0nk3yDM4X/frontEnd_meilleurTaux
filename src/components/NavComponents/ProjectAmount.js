import React, { useState } from "react";

import Footer from "../GlobalComponents/Footer.js";

const ProjectAmount = ({ setPage, inputState, setInputState }) => {
  const [estimatedAmount, setEstimatedAmount] = useState(
    inputState.amount.estimated
  );
  const [works, setWorks] = useState(inputState.amount.works);

  let notaryFees = 0;

  if (inputState.useOfProperty === "neuf") {
    notaryFees = 0.018 * estimatedAmount;
  } else {
    notaryFees = 0.0738 * estimatedAmount;
  }

  let total = Number(estimatedAmount) + Number(works) + Number(notaryFees);

  const handleChange = () => {
    setInputState({
      ...inputState,
      amount: {
        estimated: estimatedAmount,
        works: works,
        notarial: notaryFees,
        total: total
      }
    });
    setPage("contactInfos");
  };

  return (
    <div>
      <h1 className="pageTitle">MONTANT DU PROJET</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px"
        }}
      >
        <div>
          <span>Montant estimé de votre acquisition</span>
          <input
            style={{ marginLeft: "10px", marginTop: "5px", width: "150px" }}
            value={estimatedAmount}
            onChange={event => {
              setEstimatedAmount(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Montant estimé des travaux</span>
          <input
            style={{ marginLeft: "10px", marginTop: "5px", width: "150px" }}
            value={works}
            onChange={event => {
              setWorks(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Frais de notaire</span>
          <input
            style={{ marginLeft: "10px", marginTop: "5px", width: "150px" }}
            value={notaryFees.toFixed(2)}
            readOnly
          />
        </div>
        <div>
          <span>Budget total estimé du projet</span>
          <input
            style={{ marginLeft: "10px", marginTop: "5px", width: "150px" }}
            value={total}
            readOnly
          />
        </div>
      </div>
      <Footer
        prevFunc={() => {
          setPage("location");
        }}
        nextFunc={handleChange}
      />
    </div>
  );
};

export default ProjectAmount;
