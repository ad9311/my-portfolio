import { Route, Routes } from 'react-router-dom';
import './config/i18n';
import './assets/css/app.css';
import Home from './pages';

function App() {
  return (
    <>
      <main className="pt-10 px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
