import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Navigation from './components/Navigation'; 
import Details from './pages/Details';
function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} /> 
          <Route path="/details/:id" element={<Details />} />

          </Routes>
      </div>
    </Router>
  );
}


export default App;


