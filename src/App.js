import "./App.css";
import { useState, useEffect, useCallback } from "react";
import TransactionList from "./components/TransactionList";
import NewTransaction from "./components/NewTransaction";
import Holdings from "./components/Holdings.js";

function App() {
  const [allTransactions, setAllTransactions] = useState([]);

  const getTransactionList = useCallback(async () => {
    const response = await fetch(
      "https://crypto-tracker-test-default-rtdb.firebaseio.com/transaction.json"
    );
    const data = await response.json();
    console.log(data);
    let transactionList = [];
    for (let trans in data) {
      let amountSpent = (data[trans].qty * data[trans].costBasis).toFixed(2);
      transactionList.push({
        key: trans,
        date: data[trans].date,
        coin: data[trans].coin,
        qty: data[trans].qty,
        costBasis: data[trans].costBasis,
        exchange: data[trans].exchange,
        amountSpent: amountSpent,
      });
    }
    setAllTransactions(transactionList);
    console.log(transactionList);
  });

  function onAddNew(transaction) {
    fetch(
      "https://crypto-tracker-test-default-rtdb.firebaseio.com/transaction.json",
      {
        method: "POST",
        body: JSON.stringify(transaction),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    getTransactionList();
  }

  useEffect(() => {
    getTransactionList();
  }, [getTransactionList]);

  return (
    <div className="App">
      <h2>Crypto Tracker Baby</h2>
      <h3>Holdings Component</h3>
      <Holdings transactions={allTransactions} />
      <h3>Transaction List</h3>
      <NewTransaction addNewTransaction={onAddNew} />
      <TransactionList transactions={allTransactions} />
    </div>
  );
}

export default App;
