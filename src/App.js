import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
//import Pagenotfound from "./pages/Pagenotfound";




function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/menu" element={<Menu/>}/>
    
     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App;

// <Route path="*" element={<Pagenotfound/>}/> 