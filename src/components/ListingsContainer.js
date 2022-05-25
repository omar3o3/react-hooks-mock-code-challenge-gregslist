import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsData , removeFromDom}) {

  let mappedListings = listingsData.map(item => {
    return (<ListingCard
                description = {item.description}
                key = {item.id}
                id = {item.id}
                image = {item.image}
                location = {item.location}
                removeFromDom = {removeFromDom}
            />)
  })

  return (
    <main>
      <ul className="cards">
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
