import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">My list of pokemons</h1>
      <form>
        <input
          className="header__search"
          autoComplete="off"
          type="search"
          name="search"
          placeholder="Filter pokemons by name"
        />
      </form>
    </header>
  );
};

export default Header;
