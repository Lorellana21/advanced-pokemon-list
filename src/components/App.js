import "../styles/App.scss";
import React, { useState, useEffect } from "react";
import data from "../data/data.json";
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

        {/* new contact */}
        <form className="new-pokemon__form">
          <h2 className="new-pokemon__title">Add a new pokemon</h2>
          <input
            className="new-pokemon__input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="new-pokemon__input"
            type="text"
            name="types"
            id="types"
            placeholder="Types"
          />
          <input
            className="new-pokemon__input"
            type="text"
            name="evolution"
            id="evolution"
            placeholder="Evolution"
          />
          <input
            className="new-pokemon__input"
            type="picture"
            name="picture"
            id="picture"
            placeholder="Picture"
          />
          <input className="new-pokemon__btn" type="submit" value="Add" />
        </form>
      </main>
    </div>
  );
}

export default App;
