import React, {useState} from "react";



function Search({onSearchChange}) {
  const [textSearch, setTextSearch] = useState("");
  
  const handleClick = (e) => {
    e.preventDefault();
    onSearchChange(textSearch);
  };
 
  return (
    <div className="ui large fluid icon input">
     <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
      />
      <i className="circular search link icon" onClick={handleClick}></i>
    </div>
  );
}

export default Search;
