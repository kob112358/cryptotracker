import React from "react";

const TransactionRow = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.coin}</td>
      <td>{props.transaction.qty}</td>
      <td>${props.transaction.costBasis}</td>
      <td>${props.transaction.amountSpent}</td>
      <td>{props.transaction.exchange}</td>
      <td>{props.transaction.currentlyHeld}</td>
    </tr>
  );
};

export default TransactionRow;
