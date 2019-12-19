import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <>
          <span> Vous êtes actuellement sur la page du backOffice</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.map((element, index) => {
              return <span key={element._id}>{element._id}</span>;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default BackOffice;
