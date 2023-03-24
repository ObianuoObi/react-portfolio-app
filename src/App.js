import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
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

      </Routes>
      
     

    </div>
    </>
  );
}

export default App;
