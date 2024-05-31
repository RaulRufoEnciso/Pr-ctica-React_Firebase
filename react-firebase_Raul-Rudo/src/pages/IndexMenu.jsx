// src/pages/IndexMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const IndexMenu = () => {
  return (
    <div>
      <h1>Menú Principal</h1>
      <Link to="/movies/list">
        <div className="card">Llistat de Pel·lícules</div>
      </Link>
      <Link to="/movies/add">
        <div className="card">Afegir una Pel·lícula</div>
      </Link>
    </div>
  );
};

export default IndexMenu;
