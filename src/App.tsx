import { Route, Routes } from 'react-router-dom';
import './config/i18n';
import './assets/css/app.css';
import Navbar from './layouts/navbar';
import Home from './pages';
import Sidebar from './layouts/sidebar';

function App() {
  return (
    <>
      <Navbar />
      <div className="lg:grid grid-cols-12 ">
        <div className="hidden lg:block col-span-3">
          <Sidebar type="SIDEBAR" />
        </div>
        <main className="col-span-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/resume" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
