# ### Mid-term evaluation in the middle of the React module

Intermediate test in Adalab consisting of developing a web site with React, where to render a list of Pokemons.
The Pokemon's information is taken from an array of objects that must be saved in the state of the root component: `App.js`.

```
[
  {
    "id": 1,
    "name": "bulbasaur",
    "types": ["poison", "grass"],
    "evolution": null,
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "id": 2,
    "name": "ivysaur",
    "types": ["poison", "grass"],
    "evolution": "bulbasaur",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    "id": 3,
    "name": "venusaur",
    "types": ["poison", "grass"],
    "evolution": "ivysaur",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    "id": 4,
    "name": "charmander",
    "types": ["fire"],
    "evolution": null,
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    "id": 5,
    "name": "charmeleon",
    "types": ["fire"],
    "evolution": "charmander",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    "id": 6,
    "name": "charizard",
    "types": ["flying", "fire"],
    "evolution": "charmeleon",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    "id": 7,
    "name": "squirtle",
    "types": ["water"],
    "evolution": null,
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    "id": 8,
    "name": "wartortle",
    "types": ["water"],
    "evolution": "squirtle",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    "id": 9,
    "name": "blastoise",
    "types": ["water"],
    "evolution": "wartortle",
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    "id": 10,
    "name": "caterpie",
    "types": ["bug"],
    "evolution": null,
    "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  }
]
```

Project created using HTML, CSS, JS and React.

![image](https://user-images.githubusercontent.com/81922944/150493929-eeb3ade3-cb05-49c0-9a0b-38cf03a6a962.png)

**Steps to perform the exercise**

1. Draw up the structure of components for the website on paper.
2. Create a new React application.
3. Paint 1 card, collecting the information of the props.
4. Paint all cards.
5. In addition to creating the App component we must create two components, PokeList and Pokemon,
   respectively for the list and for the card of each Pokemon.
6. BONUS: the information must be kept in the state of the component.
7. BONUS: The application should allow filtering by contact name.
   - When typing in the header input, pokemons whose name does not match what is typed should be hidden.
   - Of course it doesn't matter if the user writes the text in upper or lower case.
8. BONUS: We also want the user to be able to add more pokemons to the list.
9. Save the data in the local storage.
