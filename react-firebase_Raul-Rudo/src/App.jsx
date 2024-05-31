// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexMenu from './pages/IndexMenu';
import MoviesList from './pages/MoviesList';
import MoviesAdd from './pages/MoviesAdd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexMenu />} />
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
