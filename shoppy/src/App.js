import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ShoppingCart from './components/shopping/ShoppingCart';
import HomeScreen from './components/home_page/HomeScreen';
import Bag from './components/shopping/Bag';
import Login from './components/login/Login';
import About from './components/aboutUs/About';
import Sing_in from './components/login/Sing_in';


function App() {

  return (
      <>

          <div>
              <Routes  >

                  <Route exact path='/' element={<HomeScreen />}></Route>

                  <Route exact path='/ShoppingCart' element={<ShoppingCart />}></Route>

                  <Route exact path='/Bag' element={<Bag />}></Route>

                  <Route exact path='/Login' element={<Login />}></Route>

                  <Route exact path='/About' element={<About />}></Route>

                  <Route exact path='/Sing_in' element={<Sing_in />}></Route>

              </Routes  >
          </div>

      </>
  );
}

export default App;
