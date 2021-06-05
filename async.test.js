const fetch = require('node-fetch');
const pokemonApi = require('./async');

describe('Pokemon Async tests', () => {
  it('Sanity test for Async.js', () => {
    console.log('Async Sanity test passed!');
  });

  it('calls the pokemon api with async a call', done => {
    expect.assertions(1); // make the only assertion has ran
    pokemonApi.getPokemonAsyncAwait(fetch).then(data => {
      expect(data.count).toEqual(1118);
      done(); // wait for the api call to finish
    });
  });
  it('calls pokemon api with a promise', () => {
    expect.assertions(2);

    return pokemonApi
      .getPokemonPromise(fetch) // you can use return instead of done()
      .then(data => {
        expect(data.count).toEqual(1118);
        expect(data.results.length).toBeGreaterThan(5);
      });
  });

  it('calls pokemon api returns count and results using mock data', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 1118,
            results: [0, 1, 2, 3, 4, 5],
          }),
      })
    );

    expect.assertions(4);
    return pokemonApi.getPokemonAsyncAwait(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('https://pokeapi.co/api/v2/pokemon');
      expect(data.count).toEqual(1118);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
