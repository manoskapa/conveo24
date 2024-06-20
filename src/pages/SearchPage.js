import React, { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import { searchMovies } from '../services/apiService';
import ElementCard from '../components/ElementCard';
import './SearchPage.css';
const SearchPage = () => {
  const [elements, setElements] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(''); 

  const handleSearch = async (query) => {
    try {
      const data = await searchMovies(query);
      if(data.length==0){
        setMessage('No results found. Please try another title'); 
        setElements([]); 
      }
      setElements(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  };

  return (
    <div className="search-container">
      <h1>Search Movies</h1>
      <SearchComponent onSearch={handleSearch} />
      {error && <div>{error}</div>}
      <div className="row">
        {elements.map((element) => (
          <div className="col-lg-4 col-md-6 col-12 mb-3" key={element.imdbID}>
          <ElementCard element={element} />
        </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;