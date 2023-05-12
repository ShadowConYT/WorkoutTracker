export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'da17454e3emsha2610acfeb00ec3p1499bdjsna65d7762f003',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'da17454e3emsha2610acfeb00ec3p1499bdjsna65d7762f003',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
