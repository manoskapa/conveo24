import React from 'react';
import './Home.css'; 
import MyImage from '../assets/cinemapic.avif'; 

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


