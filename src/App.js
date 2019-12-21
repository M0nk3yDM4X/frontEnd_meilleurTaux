import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import "./App.css";

import Header from "./components/GlobalComponents/Header.js";
import Login from "./containers/Login.js";
import BackOffice from "./containers/BackOffice.js";
import DemandDetails from "./containers/DemandDetails.js";

import TypeOfProperty from "./components/NavComponents/TypeOfProperty.js";
import StateOfProperty from "./components/NavComponents/StateOfProperty.js";
import UseOfProperty from "./components/NavComponents/UseOfProperty.js";
import UserSituation from "./components/NavComponents/UserSituation.js";
import LocationOfProperty from "./components/NavComponents/LocationOfProperty.js";
import ProjectAmount from "./components/NavComponents/ProjectAmount.js";
import ContactInformation from "./components/NavComponents/ContactInformation.js";
import Summary from "./components/NavComponents/Summary.js";

const App = () => {
  // We set actualPage as the const of the value from cookie's name "actualPage"
  const actualPage = Cookies.get("actualPage");

  // We set a state page to manage the changing pages, initialized at the value of const actualPage
  const [page, setPage] = useState(actualPage);

  // We set a state project ID to store the database id and to use it on the final page
  const [projectId, setProjectId] = useState("");

  // Setting cookie "actualPage", saying that if undefined, the starting page will be the home, and the value of cookie will be home
  // Else the value of the cookie will be the value of state page already visited

  if (actualPage === undefined) {
    setPage("home");
    Cookies.set("actualPage", page);
  } else {
    Cookies.set("actualPage", page);
  }

  // We declare an object initialState with some empty keys

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
    },
    email: ""
  };

  // We set memoryCookie as the const of the value from cookie's name "generalState"

  const memoryCookie = Cookies.getJSON("generalState");

  // We set a state inputState to manage the object to saved and send to our backend, initialized at the value of const memoryCookie

  const [inputState, setInputState] = useState(memoryCookie);

  // Setting cookie "memoryCookie", saying that if undefined, the inputState value will be our initialObject with empty keys to fill
  // Else the value of the cookie will be the value of state inputState already filled

  if (memoryCookie === undefined) {
    setInputState(initialState);
    Cookies.set("generalState", inputState);
  } else {
    Cookies.set("generalState", inputState);
  }

  // console.log("inputState here >>>", inputState);

  // Our navigation here is done by changing the state page

  // Exception to the back-office were it's a navigation from Route to another Route by using <Link to=""></Link>

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login/back-office">
            <Login />
          </Route>
          <Route path="/details/:id">
            <DemandDetails />
          </Route>
          <Route path="/back-office">
            <BackOffice />
          </Route>
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
              {page === "amount" ? (
                <ProjectAmount
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "contactInfos" ? (
                <ContactInformation
                  setPage={setPage}
                  inputState={inputState}
                  setInputState={setInputState}
                  setProjectId={setProjectId}
                />
              ) : null}
              {page === "summary" ? (
                <Summary setPage={setPage} projectId={projectId} />
              ) : null}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
