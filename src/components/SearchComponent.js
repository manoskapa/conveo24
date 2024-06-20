import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchComponent;