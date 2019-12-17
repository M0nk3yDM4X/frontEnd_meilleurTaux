import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  const [page, setPage] = useState("home");

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

  const [inputState, setInputState] = useState(initialState);

  // console.log(inputState);

  return (
    <div className="App">
      <Router>
        <div style={{ paddingRight: 50, paddingLeft: 50 }}>
          <Header />
          <Switch>
            <Route path="/">
              {page === "home" ? (
                <TypeOfProperty
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "state" ? (
                <StateOfProperty
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "use" ? (
                <UseOfProperty
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "userSituation" ? (
                <UserSituation
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "location" ? (
                <LocationOfProperty setPage={setPage} />
              ) : null}
              {page === "amount" ? <ProjectAmount setPage={setPage} /> : null}
              {page === "contactInfos" ? (
                <ContactInformation setPage={setPage} />
              ) : null}
              {page === "summary" ? <Summary /> : null}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
