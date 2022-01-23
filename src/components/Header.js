import React from "react";

const Header = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <header className="header">
      <h1 className="header__title">My list of pokemons</h1>
      <form>
        <input
          className="header__search"
          autoComplete="off"
          type="search"
          id="name"
          name="name"
          placeholder="Filter pokemons by name"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
