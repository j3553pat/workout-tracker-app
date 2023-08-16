import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
// import BMI from './components/BMI';
import Login from './components/Login';
import Home from './components/Home'
import CalorieIntake from './containers/CalorieIntake';
import ExerciseEntry from './containers/ExerciseEntry';
import FoodIntake from './containers/FoodIntake'
import Test from './components/test';
import cookie from 'cookie'
import SignUp from './components/SignUp';



    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie);
        return cookies.loggedIn ? true : false;
      };
    
      const ProtectedRoute = (props) => {
        const { component: Component, ...rest } = props;
      
        return checkAuth() === true ? (
          <Component {...rest} />
        ) : (
          <Navigate to="/login" />
        );
      };
      function Router() {
  return (
    <Routes>
      <Route path='/calorieintake' element={<CalorieIntake />} />
      {/* <Route path='/bmi' element={<ProtectedRoute component={BMI} />} /> */}
      <Route path ='/exerciseentry' element={<ExerciseEntry/>}  />
      <Route path ='/foodintake' element={<FoodIntake/>}  />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test/>} />
    </Routes>
  )
};

export default Router