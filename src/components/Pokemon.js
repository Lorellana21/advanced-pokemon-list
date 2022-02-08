import PropTypes from "prop-types";
import "../styles/components/Pokemon.scss";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.item.types.map((type, index) => {
      return (
        <li className="pokemon__type" key={index}>
          {type}
        </li>
      );
    });
  };

  return (
    <>
      <article className="pokemon__item">
        <img
          className="pokemon__img"
          src={props.item.url}
          alt={props.item.name}
        />
        <p className="pokemon__name">
          <label className="pokemon__label">Name:</label>
          {props.item.name}
        </p>
        <p className="pokemon__name">
          <label className="pokemon__label">Evolution:</label>
          {props.item.evolution}
        </p>
        <p className="pokemon__name">
          <label className="pokemon__label">Types:</label>
        </p>
        <ul className="pokemon__types">{renderTypes()}</ul>
      </article>
    </>
  );
};

Pokemon.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
    evolution: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};

export default Pokemon;
