import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<h2>Coming soon...</h2>} />
    </Routes>
  </Router>
);

export default App;
