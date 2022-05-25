import React , { useState } from "react";

function Search({setSearchValue}) {

  const [target , setTarget] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setSearchValue(target)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
