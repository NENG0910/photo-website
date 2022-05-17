import React from "react";

const Search = ({ search, setInput }) => {
  const searchHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input onChange={searchHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
