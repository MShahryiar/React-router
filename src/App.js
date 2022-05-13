import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Searched from './Pages/Searched';

function App() {
  return (
    <>
   <BrowserRouter>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path="/searched/:search" element={<Searched/>}/> */}
      </Routes>
      
   </BrowserRouter>
   </>
   
  );
}

export default App;
