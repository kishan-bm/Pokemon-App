
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonPhoto = document.getElementById("sprite");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const pokemonTypes = document.getElementById("types");
const displayPokemon = document.getElementById("display-pokemon");

const fetchPokemon = () => {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  displayPokemon.style.display = "none";
  const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const pokemons = data;
      pokemonTypes.textContent = "";
      if (
        searchInput === pokemons.name ||
        searchInput === pokemons.id.toString()
      ) {
        displayPokemon.style.display = "block";
        pokemonName.textContent =
          pokemons.name.toUpperCase();
        pokemonId.textContent = `#${pokemons.id}`;
        pokemonWeight.textContent = `Weight:${pokemons.weight}`;
        pokemonHeight.textContent = `Height:${pokemons.height}`;
        pokemonPhoto.src = pokemons.sprites.front_default;
        const pokemonsTypes = pokemons.types;
        pokemonsTypes.forEach((type) => {
          pokemonTypes.innerHTML += `<span class="types" id="types">${type.type.name}</span>`;
        });
        hp.textContent = `${pokemons.stats[0].base_stat}`;
        attack.textContent = `${pokemons.stats[1].base_stat}`;
        defense.textContent = `${pokemons.stats[2].base_stat}`;
        specialAttack.textContent = `${pokemons.stats[3].base_stat}`;
        specialDefense.textContent = `${pokemons.stats[4].base_stat}`;
        speed.textContent = `${pokemons.stats[5].base_stat}`;
      } else if (
        searchInput !== pokemons.name ||
        searchInput !== pokemons.id.toString()
      ) {
        alert("Pokémon not found");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Pokémon not found");
    });
};

searchBtn.addEventListener("click", fetchPokemon);