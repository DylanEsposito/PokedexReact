import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './routes/About';
import Pokedex from './routes/Pokedex';
import SinglePokemon from './routes/SinglePokemon';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Pokemon/" element={<SinglePokemon />} />
          <Route path="/Pokemon/:id" element={<SinglePokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
