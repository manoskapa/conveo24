import React from 'react';
import './Home.css'; // Make sure the CSS path is correct
import MyImage from '../assets/cinemapic.avif'; // Ensure the image path is correct

const Home = () => {
  return (
    <div className="image-banner">
      <img src={MyImage} alt="Cinema" className="img-fluid" /> 
      <div className="text-overlay">
      <p>Welcome to the movie search application.Type Search to search for a movie</p>
    </div>
    </div>
  );
};

export default Home;


