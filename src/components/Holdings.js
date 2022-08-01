import React from "react";
import HoldingRow from "./HoldingRow";
import { useState, useEffect } from "react";

const Holdings = (props) => {
  
  const [cryptoPrices, setCryptoPrices] = useState([]);

    fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {console.log(data.name);setCryptoPrices(data.name)})
    .catch((e) => console.log(e));




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
              key={row}
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

//axios.get("https://api.cryptonator.com/api/ticker/btc-usd").then((res) => {const data = res.data}).catch((e) => {console.log(e)})
