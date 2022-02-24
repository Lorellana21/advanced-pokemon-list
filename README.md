# Pokemon evolution

Have you had you a look at [Pokemon List](https://lorellana21.github.io/pokemon-list/)?
Because this is an evolution of such an exercise 🚀

![image](https://user-images.githubusercontent.com/81922944/155576311-b2d96d57-6c08-40ab-94ff-7658a9d5e456.png)

✔ Here it is possible to filter by pokemon name:

🔶 When typing in the header input, pokemons whose name does not match what is typed should be hidden.

🔶 Of course, it doesn´t matter if you write the text in upper or lower case.

![image](https://user-images.githubusercontent.com/81922944/155576536-a532e33c-3406-4f0f-90a3-2ff4a6457796.png)

✔ You also will be able to add more pokemons to the list (your favourite pokemons :)

![image](https://user-images.githubusercontent.com/81922944/155576711-4653301f-4267-46f9-a1e5-7209935a1319.png)



My **ADVICE** is to open this [site](https://www.pokemon.com/es/pokedex/), and search for your favourite pokemon.

Once you have chosen it, enter its name in the **Name input**, the evolution (if it has one) in the **Evolution input**, the types (one or two) in the **Type inputs**, and its image (click on the image and copy its link), in the corresponding **Picture input**, and click the **ADD button**. 

You will see your new pokemon added at the bottom of the list.

![image](https://user-images.githubusercontent.com/81922944/155577387-4b90b76e-f1ba-41ee-b511-c4ef0c9b002a.png)


✔ As all the data is local, it will be saved in the local storage. So, next time you log in you will be able to see the pokemon you added and you will even be able to add more.

---


## What have I learned by doing this exercise? 💪

### 💪 How to pass **props in three-level components**.

That is to say, the component in the middle, ``Form``, is only transmitting props from its parent component ``App`` to its child component ``Input``. It is important to have in mind that when programming several levels of components your concern must be:
   - Think at all times about which component you are programming.
   - Think about which component should receive props.
   - Think about which component should pass props to its children.
   - Use the Chrome extension React DevTools > Components to see if you are doing it right.

### 👀 How to use **Lifting**.

If we want to upload an action or data from the daughters to the mother ``App``, we have to do lifting.
In this case the component ``Input`` is passing the different values to its parent ``App`` with lifting.
In the parent component we have to:
  - Declare a function, for example ``const handleName = () => {}``.
  - Go through props that function to the daughter with ``<Form handleName={handleName}/>``.
In the child component:
We must execute this function in an event handler function with:
```
const handleInputChange = (ev) => {
        props.handleChange(ev.target.value);
    }
```

This function should be executed by passing up the clean data, only the data that the parent needs.

### 🤸‍♀️ How to create **components**:

![image](https://user-images.githubusercontent.com/81922944/153563861-facd591c-32ba-48a2-add2-851535e61670.png)

A component is an element or set of visual elements that:
   - Has its own purpose or functionality.
   - Has its own design.
   - Can be reused.
   - Can be customised.

### 🍄 That each component must have its own **Sass style file**.

This way each component imports or uses only those styles that it needs.
The best way to think about it is: If I take the component ``HeaderFilter.js`` with its respective ``HeaderFilter.scss`` and I take it to another project, will the header of the page still look the same? If the answer is yes, then you are doing it right.

### 🌞 How to use the **Spread** or **Copying arrays in React state**:
```
const handleForm = (ev) => {
    pokemons.push({
      "name": name,
      "evolution": evolution,
      "types": [type1, type2],
      "url": picture
    })
    setPokemons([...pokemons])
     };
 ```

What we are doing with ``...pokemons`` is to Spread the array of pokemons, that is, to expand the elements of the array. With the square brackets ``[ ]`` we create a new array. With ``[...pokemons]`` we combine the two actions, that is, we put the expanded elements in a new array. In short, we are creating a new array with the same elements, creating a new box and copying its elements inside.


 




