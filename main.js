const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'fishing.com',
  'hunting.com',
  'catpictures.com',
  'myfavoritecats.com',
];

const googleSearch = searchInput => {
  const matches = googleDatabase.filter(website =>
    website.includes(searchInput)
  );
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('soup'));
