import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import MiddleNavbar from './components/middle_navbar/MiddleNavbar';
import Projects from './components/projects/Projects';
import './App.css';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NoMatch from './components/noMatch/NoMatch';

const App = () => (
  <Router>
    <Header />
    <MiddleNavbar />
    <main>
      <Routes>
        <Route exact path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
