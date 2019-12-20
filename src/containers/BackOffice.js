import React, { useState, useEffect } from "react";
import axios from "axios";

import TableLine from "../components/BackOffice/TableLine.js";

const BackOffice = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/immoProject/readAll"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <>
          <span>Chargement</span>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "85vh"
          }}
        >
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
            return (
              <div className="tableLinesContainer">
                <TableLine value={element.locationOfProperty} />
                <TableLine value={element.email} />
                <TableLine value={element.typeOfProperty} />
                <TableLine value={element.stateOfProperty} />
                <TableLine value={element.amount.total} number={true} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BackOffice;