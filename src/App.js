import React, { useState } from "react";
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

const App = () => {
  const actualPage = Cookies.get("actualPage");

  const [page, setPage] = useState(actualPage);

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

  const memoryCookie = Cookies.get("generalState");

  const [inputState, setInputState] = useState(memoryCookie);

  if (memoryCookie === undefined) {
    setInputState(initialState);
    Cookies.set("generalState", inputState);
  } else {
    Cookies.set("generalState", inputState);
  }

  console.log(inputState);

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
              {page === "amount" ? <ProjectAmount setPage={setPage} /> : null}
              {page === "contactInfos" ? (
                <ContactInformation setPage={setPage} />
              ) : null}
              {page === "summary" ? <Summary /> : null}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
