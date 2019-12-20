import React, { useState } from "react";

import Footer from "../GlobalComponents/Footer.js";

const ProjectAmount = ({
  setPage,
  inputState,
  setInputState,
  loadingProgress,
  setLoadingProgress
}) => {
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
    setLoadingProgress(loadingProgress + 17);
    setPage("contactInfos");
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">MONTANT DU PROJET</h1>
        </div>

        <div className="answersContainer">
          <div className="answersInputContainerEven">
            <div className="questionContainer">
              <span>Montant estimé de votre acquisition</span>
            </div>
            <input
              type="Number"
              className="response"
              value={estimatedAmount}
              onChange={event => {
                setEstimatedAmount(event.target.value);
              }}
            />
            €
          </div>
          <div className="answersInputContainerOdd">
            <div className="questionContainer">
              <span>Montant estimé des travaux</span>
            </div>
            <input
              className="response"
              type="Number"
              value={works}
              onChange={event => {
                setWorks(event.target.value);
              }}
            />
            €
          </div>
          <div className="answersInputContainerEven">
            <div className="questionContainer">
              <span>Frais de notaire</span>
            </div>
            <input
              className="response"
              type="Number"
              value={notaryFees.toFixed(0)}
              readOnly
            />
            €
          </div>
          <div className="answersInputContainerOdd">
            <div className="questionContainer">
              <span>Budget total estimé du projet</span>
            </div>
            <input className="response" type="Number" value={total} readOnly />€
          </div>
        </div>
      </div>
      <Footer
        prevFunc={() => {
          setPage("location");
        }}
        loadingProgress={loadingProgress}
        nextFunc={handleChange}
      />
    </>
  );
};

export default ProjectAmount;
