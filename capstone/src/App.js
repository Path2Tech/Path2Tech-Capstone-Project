import React from 'react';
import {Routes,Route} from 'react-router-dom';
// Step four, import routes, route
import './App.css';
import About from './components/About';
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ShopAll from './components/ShopAll';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className= "App">
      <Header/>


      {/* Step five, create routes. Place page content in routes path underneath, follow syntax of route path
      Make sure path and to always match */}
      <Routes>
     
      <Route path='/about' element = {<About/>} />
      <Route path='/' element ={<Landing/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/shop-all'element={<ShopAll/>} />
      <Route path='/checkout'element={<Checkout/>} />
     </Routes>

    
     <Footer className="Footer"/> 
    </div>
  
  
  );
}

export default App;

