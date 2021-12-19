import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import { Provider } from 'react-redux';
import RootStore from '../Redux/RootStore';
import {Theme} from './Styles/Theme';
import Login from './Pages/Login';
import SuperHero from './Pages/SuperHero';
import Home from './Pages/Home';
import Devices from './Pages/Devices';
import UnderConstruction from './Pages/UnderConstruction';

const App = () => {

  return (
    <Provider store={RootStore}>
        <Theme>
          <Router>
            <Routes>
              <Route path='*' element={<UnderConstruction />} />
              <Route path="/" element={<Login/>}/>

              <Route path="/home"
                element={
                  <PrivateRoute>
                    <Home/>
                  </PrivateRoute>
              }/>
              <Route path="/home/config/generals/devices"
                element={
                  <PrivateRoute>
                    <Devices/>
                  </PrivateRoute>
              }/>
              <Route path="/superheroes"
                element={
                  <PrivateRoute>
                    <SuperHero/>
                  </PrivateRoute>
              }/>
            </Routes>
          </Router>
        </Theme>
      </Provider>
  );
}

export default App;


