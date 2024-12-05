
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Details from "./pages/details"


function App() {
  return (
    <>
   
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='details' element={<Details/>}/>

</Routes>


    
    
    
    </>
  );
}

export default App;
