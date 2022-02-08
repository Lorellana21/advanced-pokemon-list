import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../styles/components/Pokemon-list.scss";

const PokeList = (props) => {
  const pokeItems = props.pokemons.map((pokemon, id) => {
    return (
      <li key={id} className="pokemon__list">
        <Pokemon item={pokemon} />
      </li>
    );
  });

  return <ul className="pokemon__list">{pokeItems}</ul>;
};

PokeList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PokeList;
