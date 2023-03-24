import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import {Routes,Route} from "react-router-dom";




function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/contact" element={<Contact/>} />
        <Route path= "/project" element={<Projects/>} />

      </Routes>
      
     

    </div>
    </>
  );
}

export default App;
