
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Search from './pages/Search'
import Album from './pages/Album'

function App() {
  return (
    <div className='spotify'>
      <Router>
      <div className='navbar'>
      <Navbar/>
      </div>
          <div className='pages'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/album" element={<Album/>}/>
        </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
