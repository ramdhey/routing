
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
import { Navbarnya } from './Komponen/NavBar/Navbarnya';
import { Banner } from './Komponen/Banner/Banner';
import { List } from './Komponen/crud/List';
import { Berita } from './Komponen/berita/Berita';

function App() {
  return (
    
    <BrowserRouter>
    
    <div className="App">
      <Navbarnya/>
      <Routes>
        <Route path="/" element={<Banner />} />
        {/* <Route path="/" component={Banner} /> */}
        <Route path="/todolist" element={<List />} />
        <Route path="/berita" element={<Berita />} />
        
        
      </Routes>
      
    </div>
    </BrowserRouter>

   
    
  );
}

export default App;
