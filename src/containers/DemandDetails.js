import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Url from "../url.js";
import DemandDetailsTitleInfos from "../components/BackOffice/DemandDetailsTitleInfos.js";

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
                  <span
                    onClick={() => {
                      deleteThisDemand();
                    }}
                  >
                    X
                  </span>
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
