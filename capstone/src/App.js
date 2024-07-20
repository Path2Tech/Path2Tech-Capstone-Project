import React from 'react';
import './App.css';
import About from './components/about'
import {Routes,Route} from 'react-router-dom'
// Step four, import routes, route
import Landing from './components/landing';
import Header from './components/header';
import Footer from './components/footer';
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
