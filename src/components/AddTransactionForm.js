import React, {useState} from "react";

function AddTransactionForm({addTransaction}) {
  const [addATransaction, setAddATransaction]= useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  const handleAddChange =(e) => {
    setAddATransaction({...addATransaction, [e.target.name]: e.target.value});
  };

  const handleSubmitTransaction = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(addATransaction),
    })
    .then(res => res.json())
    .then((newTransaction) => {
      addTransaction(newTransaction);
      setAddATransaction({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
    });
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmitTransaction} className="ui form" >
        <div className="inline fields">
          <input type="date" name="date" onChange={handleAddChange} value={addATransaction.date}/>
          <input type="text" name="description" placeholder="Description" onChange={handleAddChange} value={addATransaction.description}/>
          <input type="text" name="category" placeholder="Category" onChange={handleAddChange} value={addATransaction.category} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleAddChange} value={addATransaction.amount}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
