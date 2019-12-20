import React from "react";

const TableLine = props => {
  return (
    <>
      {props.bold ? (
        <span className="tableLine">{props.value}</span>
      ) : props.number ? (
        <span className="tableLines">{props.value} €</span>
      ) : (
        <span className="tableLines">{props.value} </span>
      )}
    </>
  );
};

export default TableLine;
