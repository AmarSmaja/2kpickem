import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Lakers from './pages/Lakers';
import Players from './pages/Players';
import Teams from './pages/Teams'

import Celtics from './pages/celtics/Celtics';
import Nets from './pages/nets/Nets';
import Knicks from './pages/knicks/Knicks';
import Philly from './pages/philly/Philly';
import Raptors from './pages/raptors/Raptors';
import Bulls from './pages/bulls/Bulls';
import Bucks from './pages/bucks/Bucks'
import Cavs from './pages/cavs/Cavs'
import Hawks from './pages/hawks/Hawks'
import Heat from './pages/heat/Heat'
import Hornets from './pages/hornets/Hornets'
import Magic from './pages/magic/Magic'
import Pacers from './pages/pacers/Pacers'
import Pistons from './pages/pistons/Pistons'
import Wizards from './pages/wizards/Wizards'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />  } />

        <Route path="/players" element={<Players /> } />
        
        <Route path="/lakers" element={<Lakers />} />
        <Route path="/celtics" element={ <Celtics /> } />
        <Route path='/nets' element={ <Nets /> }/>
        <Route path='/knicks' element={ <Knicks /> } />
        <Route path='/philly' element={ <Philly /> } />
        <Route path='/raptors' element={ <Raptors /> } />
        <Route path='/bulls' element={ <Bulls /> } />
        <Route path='/bucks' element={ <Bucks /> } />
        <Route path='/cavs' element={ <Cavs /> } />
        <Route path='/hawks' element={ <Hawks /> } />
        <Route path='/heat' element={ <Heat /> } />
        <Route path='/hornets' element={ <Hornets /> } />
        <Route path='/magic' element={ <Magic /> } />
        <Route path='/pacers' element={ <Pacers /> } />
        <Route path='/pistons' element={ <Pistons /> } />
        <Route path='/wizards' element={ <Wizards /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
