import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import "./App.css";

import Header from "./components/GlobalComponents/Header.js";

import TypeOfProperty from "./components/NavComponents/TypeOfProperty.js";
import StateOfProperty from "./components/NavComponents/StateOfProperty.js";
import UseOfProperty from "./components/NavComponents/UseOfProperty.js";
import UserSituation from "./components/NavComponents/UserSituation.js";
import LocationOfProperty from "./components/NavComponents/LocationOfProperty.js";
import ProjectAmount from "./components/NavComponents/ProjectAmount.js";
import ContactInformation from "./components/NavComponents/ContactInformation.js";
import Summary from "./components/NavComponents/Summary.js";

import ProgressBar from "./components/GlobalComponents/ProgressBar";

const App = () => {
  const actualPage = Cookies.get("actualPage");

  const [page, setPage] = useState(actualPage);
  const [loadingProgress, setLoadingProgress] = useState(0);

  if (actualPage === undefined) {
    setPage("home");
    Cookies.set("actualPage", page);
  } else {
    Cookies.set("actualPage", page);
  }

  const initialState = {
    typeOfProperty: "",
    stateOfProperty: "",
    useOfProperty: "",
    userSituation: "",
    locationOfProperty: "",
    amount: {
      estimated: 0,
      works: 0,
      notarial: 0,
      total: 0
    }
  };

  // const memoryCookie = Cookies.get("generalState");

  // console.log("memorycookie heeeeere >>>>", memoryCookie);

  const [inputState, setInputState] = useState(initialState);

  // if (memoryCookie === undefined) {
  //   setInputState(initialState);
  // } else {
  //   Cookies.set("generalState", inputState);
  //   // let toto = JSON.stringify(inputState);
  //   // // console.log("this is toto", toto);
  //   // let parsed = toto.split("/").join("");
  //   // // console.log("CECI EST PARSED", parsed);
  //   // let finalObject = JSON.parse(parsed);
  //   // // console.log("Final object here >>>", finalObject);
  // }

  // useEffect(() => {
  //   Cookies.set("generalState", inputState);
  // }, [memoryCookie]);

  console.log("inputState here >>>", inputState);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <div className="wrapper">
              {page === "home" ? (
                <TypeOfProperty
                  page={page}
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                  setLoadingProgress={setLoadingProgress}
                  loadingProgress={loadingProgress}
                />
              ) : null}
              {page === "state" ? (
                <StateOfProperty
                  page={page}
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "use" ? (
                <UseOfProperty
                  page={page}
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "userSituation" ? (
                <UserSituation
                  page={page}
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "location" ? (
                <LocationOfProperty
                  page={page}
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "amount" ? (
                <ProjectAmount
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "contactInfos" ? (
                <ContactInformation setPage={setPage} />
              ) : null}
              {page === "summary" ? <Summary /> : null}
            </div>
          </Route>
        </Switch>
        <ProgressBar loadingProgress={loadingProgress} />
      </Router>
    </div>
  );
};

export default App;
