import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions ,setTransactions] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");

  // getting the data from the db.json file, using fetch
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const handleSearchChange =(category) => {
    // console.log("Search category:", category);
    setSearchCategory(category);
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };


  return (
    <div>
      <Search onSearchChange={handleSearchChange}/>
      <AddTransactionForm addTransaction={addTransaction}/>
      <TransactionsList transactions={transactions} searchCategory={searchCategory}/>
    </div>
  );
};

export default AccountContainer;
