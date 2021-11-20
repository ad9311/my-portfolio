import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MiddleNavbar from './components/middle_navbar/MiddleNavbar';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <MiddleNavbar />
    <main>
      <Routes>
        <Route exact path="/" element={<h2>Coming soon...</h2>} />
      </Routes>
    </main>
  </Router>
);

export default App;
