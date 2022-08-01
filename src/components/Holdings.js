import React from "react";
import HoldingRow from "./HoldingRow";

const Holdings = (props) => {
  let cryptoHoldings = {};
  let totalSpent = 0;
  for (let trans of props.transactions) {
    if (cryptoHoldings[trans.coin]) {
      cryptoHoldings[trans.coin].amountSpent += +trans.amountSpent;
      cryptoHoldings[trans.coin].qty += +trans.qty;
      cryptoHoldings[trans.coin].key += trans.key;
      totalSpent += +trans.amountSpent;
    } else {
      cryptoHoldings[trans.coin] = {
        amountSpent: +trans.amountSpent,
        qty: +trans.qty,
        key: trans.key,
      };
      totalSpent += +trans.amountSpent;
    }
  }
  console.log(cryptoHoldings);
  return (
    <table>
        <thead>
      <tr>
          <th>Coin</th>
          <th>Qty</th>
          <th>Cost Basis</th>
          <th>Amount Spent</th>
      </tr>
        </thead>
      <tbody>
        {Object.keys(cryptoHoldings).map((row) => {
          return (
            <HoldingRow
              key={cryptoHoldings[row].key}
              coin={row}
              qty={cryptoHoldings[row].qty}
              amountSpent={cryptoHoldings[row].amountSpent}
            />
          );
        })}
        <tr>
          <th>Total</th>
          <td></td>
          <td></td>
          <td>${totalSpent}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Holdings;
