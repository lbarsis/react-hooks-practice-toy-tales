import React, { useState } from "react";

function ToyCard({ toy, onUpdateToy, onDeleteToy }) {
  // const { name, image, likes, id } = toy;
  // const [toyLikes, setToyLikes] = useState(toy.likes)

  function like() {
    
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    })
      .then(r => r.json())
      .then(updatedToy => {
        // setToyLikes(toyLikes => toyLikes + 1)
        onUpdateToy(updatedToy)
      })
  }

  function donate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(() => {
        onDeleteToy(toy)
      })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={like}>Like {"<3"}</button>
      <button className="del-btn" onClick={donate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
