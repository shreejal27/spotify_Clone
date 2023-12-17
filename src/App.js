
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Search from './pages/Search'
import Album from './pages/Album'

function App() {
  return (
    <div>

      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/album" element={<Album/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
