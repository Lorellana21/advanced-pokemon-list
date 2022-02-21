import PropTypes from "prop-types";
import "../styles/components/Pokemon.scss";

const Pokemon = (props) => {

  const renderTypes = () => {
    return props.item.types.map((type, index) => {
      switch (type) {
        case "fire":
          return <li className="pokemon__type fire" key={index}>{type}</li>;
        case "water":
          return <li className="pokemon__type water" key={index}>{type}</li>;
        case "grass":
          return <li className="pokemon__type grass" key={index}>{type}</li>;
        case "poison":
          return <li className="pokemon__type poison" key={index}>{type}</li>;
        case "flying":
          return <li className="pokemon__type flying" key={index}>{type}</li>;
        case "bug":
          return <li className="pokemon__type bug" key={index}>{type}</li>;
        case "electric":
          return <li className="pokemon__type electric" key={index}>{type}</li>;
        //seguir con los tipos que me faltan

        default:
          return <li className="pokemon__type" key={index}>{type}</li>;


      };
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
