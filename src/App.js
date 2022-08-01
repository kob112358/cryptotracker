import "./App.css";
import { useState } from "react";
import TransactionList from "./components/TransactionList";
import { transactionList } from "./assets/transactions.js";
import NewTransaction from "./components/NewTransaction";
import Holdings from "./components/Holdings.js";

function App() {
  const [allTransactions, setAllTransactions] = useState(transactionList);

  const onAddNew = (transaction) => {
    setAllTransactions((prevState) => {
      return [...prevState, transaction]
    })
  }
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
