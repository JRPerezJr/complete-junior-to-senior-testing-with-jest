const fetch = require('node-fetch');

const getPokemonPromise = fetch => {
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
      //   console.log(data);
      return { count: data.count, results: data.results };
    });
};

// console.log(getPokemon(fetch));

const getPokemonAsyncAwait = async fetch => {
  const getRequest = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await getRequest.json();

  //   console.log(data);
  return { count: data.count, results: data.results };
};

// getPokemonAsyncAwait(fetch);
