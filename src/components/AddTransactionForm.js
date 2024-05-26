import React, {useState} from "react";

function AddTransactionForm() {
 
//   //  for inputing  a new transaction
//   const[newTranscation, setNewTransaction] = useState({
//     date:"",
//     description: "",
//     category: "",
//     amount: ""
//   });
// // handle change on typing in the input fields.
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewTransaction(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
//   // POST METHOD- to add new transactions.
  
//   const inputNewTransaction = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8001/transactions"), {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newTranscation)
//       .then(response =>response.json())
//       .then(data => {
//         setTransactions([...transactions, data]);
//         setNewTransaction({
//           date:"",
//           description: "",
//           category: "",
//           amount: ""
//         });
//       })
//     }
//   };
  
//   const addATransaction=(newTransaction) => {
//     setTransactions([...transactions, newTransaction]);
//   };

  return (
    <div className="ui segment">
      <form className="ui form" >
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
