import React from "react";
import Search from "./Search";

function Header({setSearchValue , searchValue}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchValue = {setSearchValue} searchValue = {searchValue}/>
    </header>
  );
}

export default Header;
