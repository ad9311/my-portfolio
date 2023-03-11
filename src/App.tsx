import { Route, Routes } from 'react-router-dom';
import './config/i18n';
import './assets/css/app.css';
import Navbar from './layouts/navbar';
import Home from './pages';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/resume" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
