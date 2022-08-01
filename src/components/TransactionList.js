import React from "react";
import './TransactionList.css';
import TransactionRow from "./TransactionRow";

const TransactionList = (props) => {
  return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Coin</th>
            <th>Qty</th>
            <th>Cost Basis</th>
            <th>Amount spent</th>
            <th>Exchange</th>
            <th>Currently Held</th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((transaction) => {
            return <TransactionRow transaction={transaction} key={transaction.key} />
          })}
        </tbody>
      </table>
  );
};

export default TransactionList;
