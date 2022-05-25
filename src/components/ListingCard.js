import React , {useState} from "react";

function ListingCard({description , id , image , location , removeFromDom}) {

  const [isFavorite , setFavorite] = useState(false);

  const deleteItem = (id) => {
    fetch(`http://localhost:6001/listings/${id}` , {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
    }).then(resp => resp.json())
    .then(data => removeFromDom({id , data}))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={() => setFavorite((isFavorite) => isFavorite = !isFavorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite((isFavorite) => isFavorite = !isFavorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => deleteItem(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
