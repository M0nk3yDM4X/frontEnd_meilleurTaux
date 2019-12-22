import React, { useState } from "react";

import Footer from "../GlobalComponents/Footer.js";

const ProjectAmount = ({ setPage, inputState, setInputState }) => {
  // We set a state estimatedAmount to listen the 1st input, the initial value is the value of inputState.amount.estimated
  const [estimatedAmount, setEstimatedAmount] = useState(
    inputState.amount.estimated
  );

  // We set a state works to listen the 1st input, the initial value is the value of inputState.amount.works
  const [works, setWorks] = useState(inputState.amount.works);

  // Calculating the notaryFees saying that, if inputState.useOfProperty is equal to value "neuf", notaryFees will be the multiplication
  // of the value of state estimatedAmount by 0.018, else it will be a multiplication by 0.0738

  let notaryFees = 0;

  if (inputState.useOfProperty === "neuf") {
    notaryFees = 0.018 * estimatedAmount;
  } else {
    notaryFees = 0.0738 * estimatedAmount;
  }

  // Calculating the total is adding the value of estimatedAmount, works & amount, all converted to Number to avoid calculations problems

  let total = Number(estimatedAmount) + Number(works) + Number(notaryFees);

  // Function handleChange contains a condition
  // If the value of estimatedAmount is > to 0
  // setInputState will receive the key amount with all keys (from the 4 inputs of this page) in it
  // And the page will be change to the next one
  // Else an alert will be displayed

  const handleChange = () => {
    if (estimatedAmount > 0) {
      setInputState({
        ...inputState,
        amount: {
          estimated: estimatedAmount,
          works: works,
          notarial: notaryFees.toFixed(0),
          total: total.toFixed(0)
        }
      });
      setPage("contactInfos");
    } else {
      alert("Vous devez renseigner le champ montant estimé");
    }
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
            <input
              className="response"
              type="Number"
              value={total.toFixed(0)}
              readOnly
            />
            €
          </div>
        </div>
      </div>
      <Footer
        prevFunc={() => {
          setPage("location");
        }}
        loadingProgress={81}
        // We are sending nextFunc equal to the handleChange function call, Footer component will receive this props
        // So, onClick of the next button will call handleChange function
        nextFunc={handleChange}
      />
    </>
  );
};

export default ProjectAmount;
