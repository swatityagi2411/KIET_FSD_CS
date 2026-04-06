import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Details from './components/Details'

const App=()=>
{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    
    
    </BrowserRouter>
  )
}
export default App;