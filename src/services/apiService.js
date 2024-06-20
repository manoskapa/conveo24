import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://omdb-api4.p.rapidapi.com';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL1 = `${PROXY_URL}https://omdb-api4.p.rapidapi.com/`;

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/`, {
      params: { s: query },
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'omdb-api4.p.rapidapi.com',
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


