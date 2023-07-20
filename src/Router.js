import React from 'react';
import { Routes, Route } from 'react-router';
import BMI from './components/BMI';
import Login from './components/Login';
import CalorieIntake from './components/CalorieIntake';
import Test from './components/test';
import cookie from 'cookie'

 export default function Router() {

    // const checkAuth = () => {
    //     const cookies = cookie.parse(document.cookie);
    //     return cookies.loggedIn ? true : false;
    //   };
    
    //   const ProtectedRoute = (props) => {
    //     const { component: Component, ...rest } = props;
      
    //     return checkAuth() === true ? (
    //       <Component {...rest} />
    //     ) : (
    //       <Navigate to="/login" />
    //     );
    //   };

  return (
    <Routes>
      <Route path='/calorieintake' element={<CalorieIntake />} />
      {/* <Route path='/home' element={<Home />} /> */}
      <Route path='/login' element={<Login/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
  )
};

