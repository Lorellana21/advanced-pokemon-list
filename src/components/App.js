
import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import Form from "./Form";
import HeaderFilter from "./HeaderFilter";
import PokeList from "./PokeList.js";

function App() {
  const [pokemons, setPokemons] = useState(data);
  const [filter, setFilter] = useState("");

  const handleFilter = (inputValue) => {
    //console.log("Han cambiado el input de mi hija con el valor ", inputValue);
    setFilter(inputValue);
    //console.log(filter);
  };

  //render
  const filteredItems = data.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="page">
      <HeaderFilter handleFilter={handleFilter} />

      <main>
        <PokeList pokemons={filteredItems} />
        <Form />



      </main>
    </div>
  );
}

export default App;
