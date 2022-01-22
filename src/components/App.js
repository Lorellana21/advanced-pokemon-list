import "../styles/App.scss";
import React, { useState } from "react";
import data from "../data/data.json";
import Header from "./Header";
import PokeList from "./PokeList.js";

function App() {
  const [pokemons] = useState(data);

  return (
    <div className="page">
      {/* header */}
      <Header />

      <main>
        <PokeList data={pokemons} />

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
