import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ShoppingCart from './components/shopping/ShoppingCart';
import HomeScreen from './components/home_page/HomeScreen';
import Bag from './components/shopping/Bag';


function App() {

  return (
      <>

          <div>
              <Routes  >

                  <Route exact path='/' element={<HomeScreen />}></Route>

                  <Route exact path='/ShoppingCart' element={<ShoppingCart />}></Route>

                  <Route exact path='/Bag' element={<Bag />}></Route>

              </Routes  >
          </div>

      </>
  );
}

export default App;
