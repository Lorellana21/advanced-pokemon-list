import React from "react";
import "../styles/components/Header-filter.scss";

const Header = (props) => {
  const handleInput = (ev) => {
    props.handleFilter(ev.target.value);
  };
  return (
    <header className="header">
      <h1 className="header__title">My list of pokemons</h1>
      <form>
        <input
          className="header__search"
          autoComplete="off"
          type="search"
          id="search"
          name="search"
          placeholder="Filter by name"
          onChange={handleInput}
        />
      </form>
    </header>
  );
};

export default Header;
