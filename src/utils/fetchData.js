// List of keys
const keys = [process.env.REACT_APP_RAPID_API_KEY, process.env.REACT_APP_RAPID_API_KEY2];

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": keys[Math.floor(Math.random() * 2)],
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": keys[Math.floor(Math.random() * 2)],
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
