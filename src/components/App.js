import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  function onAdoptPet(id){
    const adopted = pets.map((pet)=>{
      if(pet.id === id){
        pet.isAdopted = true;
        return pet;
      }
      else {
        return pet;
      }
    })
    setPets(adopted);
  }

  function onChangeType(filter){
    setFilters(filter)
  }

  function onFindPetsClick(){
      if(filters === 'all'){
        fetch('http://localhost:3001/pets')
        .then((resp)=>resp.json())
        .then((pets)=>setPets(pets))
      }
      else if(filters === 'cat'){
        fetch('http://localhost:3001/pets?type=cat')
        .then((resp)=>resp.json())
        .then((pets)=>setPets(pets))
      }
      else if(filters === 'dog'){
        fetch('http://localhost:3001/pets?type=dog')
        .then((resp)=>resp.json())
        .then((pets)=>setPets(pets))
      }
      else if(filters === 'micropig'){
        fetch('http://localhost:3001/pets?type=micropig')
        .then((resp)=>resp.json())
        .then((pets)=>setPets(pets))
      }
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
