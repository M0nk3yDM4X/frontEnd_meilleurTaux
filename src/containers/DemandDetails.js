import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Url from "../url.js";
import DemandDetailsTitleInfos from "../components/BackOffice/DemandDetailsTitleInfos.js";

const DemandDetails = () => {
  // We get the id from the Link by using useParams
  const { id } = useParams();

  // We set state isLoading equal to true to manage the loading of our data
  const [isLoading, setIsLoading] = useState(true);

  // We set state data to fill data from our dataBase
  const [data, setData] = useState();

  // Function fetchData which is an axios.get call to our dataBase with the id of the demand
  // The response of our backEnd will be set in our state data
  // This response will be only the detail of one demand, the demand with de id send
  // And when it's finished, loadingState will be false

  const fetchData = async () => {
    try {
      const response = await axios.get(Url.url + "/immoProject/readOne/" + id);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Function deleteThisDemand is an axios.post call to remove one demand.

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

  // useEffect in order to call fetchData function, at every load of the page

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <span>Chargement en cours</span>
      ) : (
        <div className="demandDetailsPage">
          <div className="detailsCard">
            <div className="detailsCardHeader">
              <Link to="/back-office">
                <div className="detailsBackTag">
                  <span> Back </span>
                </div>
              </Link>
              <div>
                <span className="detailsClosingTag">
                  Pour supprimer cette demande, cliquez ici :
                </span>
                <Link to="/back-office">
                  <span onClick={deleteThisDemand}>X</span>
                </Link>
              </div>
            </div>
            <div className="detailsContent">
              <div className="detailsContentTitle">
                <DemandDetailsTitleInfos info={"Référence de la demande"} />
                <DemandDetailsTitleInfos info={"Type de bien"} />
                <DemandDetailsTitleInfos info={"Etat du bien"} />
                <DemandDetailsTitleInfos info={"Usage du bien"} />
                <DemandDetailsTitleInfos info={"Situation du demandeur"} />
                <DemandDetailsTitleInfos info={"Localisation du bien"} />
                <DemandDetailsTitleInfos info={"Montant estimé du bien"} />
                <DemandDetailsTitleInfos info={"Montant des travaux"} />
                <DemandDetailsTitleInfos info={"Frais de notaire"} />
                <DemandDetailsTitleInfos info={"Montant total"} />
                <DemandDetailsTitleInfos info={"Email renseigné"} />
              </div>
              <div className="detailsContentInfos">
                <span>> {data._id}</span>
                <span>> {data.typeOfProperty}</span>
                <span>> {data.stateOfProperty}</span>
                <span>> {data.useOfProperty}</span>
                <span>> {data.userSituation}</span>
                <span>> {data.locationOfProperty}</span>
                <span>> {data.amount.estimated} €</span>
                <span>> {data.amount.works} €</span>
                <span>> {data.amount.notarial} €</span>
                <span>> {data.amount.total} €</span>
                <span>> {data.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemandDetails;
