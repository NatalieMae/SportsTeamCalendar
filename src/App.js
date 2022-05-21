import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import PrimaryNavbar from './components/Navbar';
// import WelcomePage from './components/WelcomePage';
import UserSignUp from './components/UserSignUpForm';
import UserSignIn from './components/userSignIn';
import Calendarview from './components/Calendarview';
import Snack from './components/Snack'




function App() {

  // const welcomeTitle = 'Welcome to the Food App'

  return (

    <BrowserRouter>
    <main>
      <div className='App-header'>
        <PrimaryNavbar /> 
        {/* <WelcomePage title = {welcomeTitle} /> */}
      </div>
      <div className='pretty-calendar'>

            <Routes>
              <Route path="/index" element={<Calendarview />}/> 
              <Route path="/snacks" element={<Snack />}/>
              <Route path="/auth/sign-in" element={<UserSignIn />}/>
              <Route path="/auth/sign-up" element={<UserSignUp />}/>
            </Routes>  
      </div>
    </main>
   </BrowserRouter>

  );
}

export default App;

