import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [searchCategory, setSearchCategory]=useState("");

  const handleSearchChange =(category) => {
    setSearchCategory(category);
  };
  
  return (
    <div>
      <Search onSearchChange={handleSearchChange}/>
      <AddTransactionForm />
      <TransactionsList searchCategory={searchCategory}/>
    </div>
  );
};

export default AccountContainer;
