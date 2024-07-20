import React from 'react';
import './App.css';
import About from './components/About'
import {Routes,Route} from 'react-router-dom'
// Step four, import routes, route
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>


      {/* Step five, create routes. Place page content in routes path underneath, follow syntax of route path
      Make sure path and to always match */}
      <Routes>
     
      <Route path='/about' element = {<About/>} />
      <Route path='/' element ={<Landing/>} />

     
      </Routes>


     <Footer/>
      
    </div>
  );
}

export default App;
{/* <Routes>
     
<Route path='' element = {} />


</Routes> */}
