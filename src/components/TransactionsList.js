import React,{useState, useEffect} from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, searchCategory}) {
  const [filteredResults, setFilteredResults] = useState(transactions);
  
  
// filtering conditions
  useEffect(() => {
    if(searchCategory) {
      const filteredTrans = transactions.filter(transaction => transaction.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    setFilteredResults(filteredTrans);
  } else {
    setFilteredResults(transactions); 
  } 
}, [searchCategory, transactions]);


 
  return (
  
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {filteredResults.map((transaction) =>(
        <Transaction
          key={transaction.id}
          date={transaction.date}
          description={transaction.description}
          category={transaction.category}
          amount={transaction.amount}
        />
        
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
