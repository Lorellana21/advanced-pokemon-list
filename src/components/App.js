
import React, { useState } from "react";
import data from "../data/data.json";
import Form from "./Form";
import HeaderFilter from "./HeaderFilter";
import PokeList from "./PokeList.js";

function App() {
  const [pokemons, setPokemons] = useState(data);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("")
  const [evolution, setEvolution] = useState("");
  const [picture, setPicture] = useState("");

  const handleForm = (ev) => {
    pokemons.push({
      "name": name,
      "evolution": evolution,
      "types": [type1, type2],
      "url": picture
    })
    setPokemons([...pokemons])
    setName("");
    setEvolution("");
    setType1("");
    setType2("");
    setPicture("");


    // console.log(newData);
    // setPokemons([...pokemons, newData]);
    // setFilter(newData);
    // lo que ya teniamos más el array nuevo. person es el array de JSON y newData es el nuevo array modificado por la usuaria al añadirlo
  };
  console.log(pokemons);



  const handleFilter = (inputValue) => {
    //console.log("Han cambiado el input de mi hija con el valor ", inputValue);
    setFilter(inputValue);
    //console.log(filter);
  };

  const handleName = (value) => {
    //debugger;
    setName(value);
  };

  const handleType1 = (value) => {
    setType1(value);
  };
  const handleType2 = (value) => {
    setType2(value);
  };

  const handleEvolution = (value) => {
    setEvolution(value);
  };

  const handlePicture = (value) => {
    setPicture(value);
  };



  const isValidForm = () => {

    if (
      name !== "" &&
      evolution !== "" &&
      type1 !== "" &&
      type2 !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  //render
  const filteredItems = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="page">
      <HeaderFilter handleFilter={handleFilter} />

      <main>
        <PokeList pokemons={filteredItems} />
        <Form
          name={name}
          type1={type1}
          type2={type2}
          evolution={evolution}
          picture={picture}
          handleName={handleName}
          handleType1={handleType1}
          handleType2={handleType2}
          handleEvolution={handleEvolution}
          handlePicture={handlePicture}
          handleForm={handleForm}

          isValidForm={isValidForm}
        />
      </main>
    </div>
  );
}

export default App;
