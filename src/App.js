import "./App.css";

import Layout from "./components/Layout"
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Pagenotfound from "./Pages/Pagenotfound";

function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/about" element={<Contact/>}/>
    <Route path="/about" element={<Menu/>}/>
    <Route path="/about" element={<Pagenotfound/>}/>

    
  </Routes>
  </BrowserRouter>
 
    </div>
  
   
  
  );
}

export default App;
