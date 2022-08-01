import React from "react";

const HoldingRow = (props) => {
  return (
    <tr>
      <td>{props.coin}</td>
      <td>{props.qty}</td>
      <td>${((1 / props.qty) * props.amountSpent).toFixed(2)}</td>
      <td>${props.amountSpent}</td>
    </tr>
  );
};

export default HoldingRow;
