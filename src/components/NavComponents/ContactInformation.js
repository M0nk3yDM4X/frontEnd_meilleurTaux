import React, { useState } from "react";

import Visuel from "../../images/visuel.jpg";
import Footer from "../GlobalComponents/Footer.js";
import axios from "axios";

const ContactInformation = ({
  setPage,
  setInputState,
  inputState,
  setProjectId
}) => {
  const [email, setEmail] = useState("");
  const [acceptMail, setAcceptMail] = useState(false);

  console.log("accepting email", acceptMail);

  const fetchData = async () => {
    const response = await axios.post("http://localhost:4000/immoProject/new", {
      ...inputState
    });
    await setProjectId(response.data._id);
  };

  const handleChange = () => {
    setPage("summary");

    fetchData();
  };

  return (
    <div>
      <h1 className="pageTitle">VOS COORDONNÉES</h1>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "orange",
              height: "250px",
              width: "250px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "10px"
            }}
          >
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}
            >
              Un devis vous sera envoyé par mail avec un récapitulatif de votre
              demande.
            </span>
          </div>
          <img
            src={Visuel}
            style={{ height: "300px", width: "600px", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "grey",
            padding: "10px"
          }}
        >
          <span>Adresse e-mail emprunteur*</span>
          <input
            placeholder="Renseignez votre e-mail ici"
            style={{
              width: "200px",
              marginLeft: "100px",
              fontFamily: "Oswald",
              padding: "5px"
            }}
            onChange={event => {
              setEmail(event.target.value);
              setInputState({
                ...inputState,
                email: event.target.value
              });
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px"
          }}
        >
          <input
            style={{ margin: "0" }}
            type="checkbox"
            value={acceptMail}
            onChange={() => {
              setAcceptMail(!acceptMail);
            }}
          />
          <span style={{ marginLeft: "5px" }}>
            J'accepte de recevoir par mail des propositions de MeilleurTaux.
          </span>
        </div>
      </div>
      <Footer
        prevFunc={() => {
          setPage("amount");
        }}
        nextFunc={handleChange}
      />
    </div>
  );
};

export default ContactInformation;
