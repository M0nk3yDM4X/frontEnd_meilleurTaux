import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Url from "../url.js";
import TableLine from "../components/BackOffice/TableLine.js";

const BackOffice = () => {
  // We set state data to fill data from our dataBase
  const [data, setData] = useState();

  // We set state isLoading equal to true to manage the loading of our data
  const [isLoading, setIsLoading] = useState(true);

  // Function fetchData which is an axios.get call to our dataBase
  // The response of our backEnd will be set in our state data
  // And when it's finished, loadingState will be false
  const fetchData = async () => {
    const response = await axios.get(Url.url + "/immoProject/readAll");
    setData(response.data);
    setIsLoading(false);
  };

  // useEffect in order to call fetchData function, at every load of the page, and every change in data state

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div>
      {isLoading === true ? (
        <>
          <span>Chargement...</span>
        </>
      ) : (
        <div className="tableContainer">
          <div className="tableLineContainer">
            <TableLine bold={true} value={"Localisation"} />
            <TableLine bold={true} value={"Adresse e-mail"} />
            <TableLine bold={true} value={"Type de bien"} />
            <TableLine bold={true} value={" Etat du bien "} />
            <TableLine
              bold={true}
              value={"Montant total (frais de notaire inclus*)"}
            />
          </div>
          {data.map((element, index) => {
            // We are doing a method .map to get every objects of our data array
            // Element will be an object with his keys
            // By doing this, every objects of our array will be showed by calling his keys

            return (
              // The click on the Link will send us to the next page
              // With this link we are sending the element._id, which will be useful in the next page
              // So the click on a demand line will send ud to the next page with the element._id

              <Link to={"/details/" + element._id}>
                <div className="tableLinesContainer">
                  <TableLine value={element.locationOfProperty} />
                  <TableLine value={element.email} />
                  <TableLine value={element.typeOfProperty} />
                  <TableLine value={element.stateOfProperty} />
                  <TableLine value={element.amount.total} number={true} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BackOffice;
