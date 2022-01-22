import "../styles/App.scss";
import data from "../data/data.json";

function App() {
  return (
    <div className="page">
      {/* header */}
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

      <main>
        {/* contact list */}
        <ul className="pokemon__list">
          <li className="pokemon__item">
            <p className="pokemon__name">
              <label className="pokemon__label">Nombre:</label>Lola Martinez
            </p>
            <p className="pokemon__phone">
              <label className="pokemon__label">Teléfono:</label>
              <a href="tel:603256289" title="Pulsa aquí para llamar a Lola">
                603256289
              </a>
            </p>
            <p className="pokemon__mail">
              <label className="pokemon__label">Email:</label>
              <a
                href="mailto:lmartinez@adalab.es"
                title="Pulsa aquí para escribir a Lola"
              >
                lmartinez@adalab.es
              </a>
            </p>
          </li>
          <li className="pokemon__item">
            <p className="pokemon__name">
              <label className="pokemon__label">Nombre:</label>Martha Houston
            </p>
            <p className="pokemon__phone">
              <label className="pokemon__label">Teléfono:</label>
              <a href="tel:612435678" title="Pulsa aquí para llamar a Martha">
                612435678
              </a>
            </p>
            <p className="pokemon__mail">
              <label className="pokemon__label">Email:</label>
              <a
                href="mailto:mhouston@adalab.es"
                title="Pulsa aquí para escribir a Martha"
              >
                mhouston@adalab.es
              </a>
            </p>
          </li>
          <li className="pokemon__item">
            <p className="pokemon__name">
              <label className="pokemon__label">Nombre:</label>Lillie Moore
            </p>
            <p className="pokemon__phone">
              <label className="pokemon__label">Teléfono:</label>
              <a href="tel:632456789" title="Pulsa aquí para llamar a Lillie">
                632456789
              </a>
            </p>
            <p className="pokemon__mail">
              <label className="pokemon__label">Email:</label>
              <a
                href="mailto:lillie@adalab.es"
                title="Pulsa aquí para escribir a Lillie"
              >
                lillie@adalab.es
              </a>
            </p>
          </li>
          <li className="pokemon__item">
            <p className="pokemont__name">
              <label className="pokemon__label">Nombre:</label>Jane Norton
            </p>
            <p className="pokemon__phone">
              <label className="pokemon__label">Teléfono:</label>
              <a href="tel:603256679" title="Pulsa aquí para llamar a Jane">
                603256679
              </a>
            </p>
            <p className="pokemon__mail">
              <label className="pokemon__label">Email:</label>
              <a
                href="mailto:janenorton@adalab.es"
                title="Pulsa aquí para escribir a Jane"
              >
                janenorton@adalab.es
              </a>
            </p>
          </li>
        </ul>

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
