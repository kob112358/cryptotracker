import React, { useRef } from "react";

const NewTransactionForm = (props) => {
  const newDate = useRef("");
  const newCoin = useRef("");
  const newQty = useRef("");
  const newCostBasis = useRef("");
  const newExchange = useRef("");
  const newCurrentlyHeld = useRef("");

  const newTransactionHandler = (event) => {
    props.addNewToggle(true);
    const transaction = {
      date: newDate.current.value,
      coin: newCoin.current.value.trim().toUpperCase(),
      qty: +newQty.current.value.trim(),
      costBasis: +newCostBasis.current.value.trim(),
      amountSpent: (newQty.current.value * newCostBasis.current.value).toFixed(
        2
      ),
      exchange: newExchange.current.value.trim().toUpperCase(),
      currentlyHeld: newCurrentlyHeld.current.value.trim().toUpperCase(),
    };
    props.onAddNewTransaction(transaction);
  };
  return (
    <form onSubmit={newTransactionHandler}>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" ref={newDate}></input>

      <label htmlFor="coin">Coin</label>
      <input type="text" id="coin" ref={newCoin}></input>

      <label htmlFor="qty">Qty</label>
      <input type="text" id="qty" ref={newQty}></input>

      <label htmlFor="costBasis">Cost Basis</label>
      <input
        type="number"
        id="costBasis"
        ref={newCostBasis}
        step="0.01"
      ></input>

      <label htmlFor="exchange">Exchange</label>
      <input type="text" id="exchange" ref={newExchange}></input>

      <label htmlFor="currentlyHeld">Currently Held</label>
      <input type="text" id="currentlyHeld" ref={newCurrentlyHeld}></input>
      <button type="submit">Add it</button>
    </form>
  );
};

export default NewTransactionForm;
