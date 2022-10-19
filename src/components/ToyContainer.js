import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  function handleUpdatedToy(updatedToy) {
    const updatedToys = toys.map(toy => {
      return toy.id === updatedToy.id ? updatedToy : toy
    })
    setToys(updatedToys)
  }

  function handleDeletedToy(deletedToy){
    const notDeletedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(notDeletedToys)
  }

  const displayToys = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onUpdateToy={handleUpdatedToy} onDeleteToy={handleDeletedToy}/>
  })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
