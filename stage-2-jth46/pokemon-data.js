let userSearch = document.getElementById('search-query');
let searchButton = document.getElementById('search-btn');
let addToTeamButton = document.getElementById('add-to-team-button-container');
let team = [];
let pokemonSearched = 0;

const GetPokemonData = async (searchQuery) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`;
    const response = await fetch(apiUrl);
    const pokemon = await response.json();

    document.getElementById('update-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    document.getElementById('update-name').innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById('add-to-team-button-container').innerHTML = "<button class='input-group-text border-0 m-auto' id='add-to-team-btn'>Add to Team</button>";

    if(pokemon.types[1]) {
        document.getElementById('update-type').innerHTML = `${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)} / ${pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}`;
    } else if(!pokemon.types[1]) {
        document.getElementById('update-type').innerHTML = `${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}`;
    }
    pokemonSearched++;
    document.getElementById('num-pokemon-searched').innerText = `Number of Pokemon Searches: ${pokemonSearched}`;
}

const AddToTeam = (pokemonName) => {
    team.push(pokemonName);
    document.getElementById('add-to-team-button-container').innerHTML = "<button class='input-group-text border-0 m-auto' id='add-to-team-btn'>Pokemon Added!</button>";
}

searchButton.addEventListener('click', () => GetPokemonData(userSearch.value));
addToTeamButton.addEventListener('click', () => AddToTeam(userSearch.value));
