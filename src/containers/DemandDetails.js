import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Url from "../url.js";

const DemandDetails = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(Url.url + "/immoProject/readOne/" + id);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteThisDemand = async () => {
    try {
      const response = await axios.post(
        Url.url + "/immoProject/deleteOne/" + id
      );
      if (response.data) {
        alert("Votre demande a bien été supprimée");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <span>Chargement en cours</span>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Link to="/back-office">
            <span
              onClick={() => {
                deleteThisDemand();
              }}
            >
              X
            </span>
          </Link>

          <span> ceci est l'id: {data._id}</span>
          <span> ceci est le type: {data.typeOfProperty}</span>
        </div>
      )}
    </>
  );
};

export default DemandDetails;
