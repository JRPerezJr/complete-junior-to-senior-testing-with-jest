const googleSearch = require('./main');

dbMock = [
  'doge.com',
  'dogepictures.com',
  'cheese.com',
  'bunnies.com',
  'cats.com',
];

describe('googleSearch', () => {
  it('this is a sanity test', () => {
    console.log('Sanity Test Passed!');
  });

  it('runs a google search', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual([
      'doge.com',
      'dogepictures.com',
    ]);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('it does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
