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
  const [acceptMail, setAcceptMail] = useState(false);

  console.log("accepting email", acceptMail);

  const fetchData = async () => {
    const response = await axios.post(Url.url + "/immoProject/new", {
      ...inputState
    });
    await setProjectId(response.data._id);
  };

  const handleFinish = () => {
    if (acceptMail === true) {
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
              onChange={event => {
                setInputState({
                  ...inputState,
                  email: event.target.value
                });
              }}
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
          nextFunc={handleFinish}
        />
      </div>
    </>
  );
};

export default ContactInformation;
