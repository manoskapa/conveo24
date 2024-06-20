import React from 'react';
import { Link } from 'react-router-dom';

        const Navigation = () => {
            return (
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
                <Link className="navbar-brand" to="/" style={{ marginLeft: '20px' }}>Home</Link>
                <div className="navbar-nav">
                  <Link className="nav-link" to="/search">Search</Link>
                </div>
              </nav>
            );
          };

export default Navigation;
