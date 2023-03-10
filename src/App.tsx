import { Route, Routes } from 'react-router-dom';
import './assets/css/app.css';
import Home from './pages';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
