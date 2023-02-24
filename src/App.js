import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Lakers from './pages/Lakers';
import Players from './pages/Players';
import Teams from './pages/Teams'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />  } />
        <Route path="/players" element={<Players /> } />
        <Route path="/lakers" element={<Lakers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
