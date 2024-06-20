import React from 'react';
import { Link } from 'react-router-dom';

const ElementCard = ({ element }) => {
  return (
    
      <div className="card mb-4 shadow-sm">
        <img src={element.Poster} className="card-img-top" alt={element.Title} />
        <div className="card-body">
          <h5 className="card-title">{element.Title}</h5>
          <p className="card-text">Year: {element.Year}</p>
          <Link to={`/details/${element.imdbID}`} className="btn btn-primary">
            More Info
          </Link>
        </div>
      </div>
  
  );
};

export default ElementCard;