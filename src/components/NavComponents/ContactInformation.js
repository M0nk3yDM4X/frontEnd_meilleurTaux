import React, { useState } from "react";

import Visuel from "../../images/visuel.jpg";
import Footer from "../GlobalComponents/Footer.js";
import axios from "axios";

import Url from "../../url.js";

const ContactInformation = ({
  setPage,
  setInputState,
  inputState,
  setProjectId
}) => {
  // We set a state to manage the checkBox input in order to know if user accept or no to receive e-mail
  const [acceptMail, setAcceptMail] = useState(false);

  // Function fetchData which is an axios.post call in order to send users choices to our backEnd
  // We set the value of projectID state from App.js by the response Id value from our backEnd
  const fetchData = async () => {
    try {
      const response = await axios.post(Url.url + "/immoProject/new", {
        ...inputState
      });
      await setProjectId(response.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Function handleChange to listen the input email
  // Spread operator to copy our state, and add the new value to our key email

  const handleChange = event => {
    setInputState({
      ...inputState,
      email: event.target.value
    });
  };

  // Function handleFinish which will call our fetchData function, and set the nextPage
  // Only if the acceptMail value is true and the input email isn't empty

  const handleFinish = () => {
    if (acceptMail === true && inputState.email !== "") {
      setPage("summary");
      fetchData();
    } else {
      alert("Vous ne passerez pas");
    }
  };

  return (
    <>
      <div className="pageContent">
        <div className="titleContainer">
          <h1 className="pageTitle">vos coordonnées</h1>
        </div>

        <div>
          <div className="heroContactContainer">
            <div className="heroMessageContainer">
              <span className="heroMessage">
                Un devis vous sera envoyé par mail avec un récapitulatif de
                votre demande.
              </span>
            </div>
            <img className="heroImage" src={Visuel} alt="heroImage" />
          </div>
          <div className="answersInputContainerEven">
            <div className="questionContainer">
              <span>Adresse e-mail emprunteur*</span>
            </div>
            <input
              placeholder="Renseignez votre e-mail ici"
              className="emailInput"
              type="email"
              value={inputState.email}
              onChange={handleChange}
            />
          </div>
          <div className="answersInputContainerOdd">
            <input
              className="checkboxInput"
              type="checkbox"
              value={acceptMail}
              onChange={() => {
                setAcceptMail(!acceptMail);
              }}
            />
            <div className="questionContainer">
              <span>
                J'accepte de recevoir par mail des propositions de MeilleurTaux.
              </span>
            </div>
          </div>
        </div>

        <Footer
          prevFunc={() => {
            setPage("amount");
          }}
          loadingProgress={93}
          // We are sending nextFunc equal to the handleFinish function call, Footer component will receive this props
          // So, onClick of the next button will call handleFinish function
          nextFunc={handleFinish}
        />
      </div>
    </>
  );
};

export default ContactInformation;
