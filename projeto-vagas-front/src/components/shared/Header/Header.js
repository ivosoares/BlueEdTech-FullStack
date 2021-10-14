import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Portal de Vagas
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>            
            </li>
            <li className="nav-item">
              <Link to="/cadastro" className="nav-link">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;