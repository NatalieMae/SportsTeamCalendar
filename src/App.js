import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import PrimaryNavbar from './components/Navbar';
// import WelcomePage from './components/WelcomePage';
import UserSignUp from './components/UserSignUpForm';
import UserSignIn from './components/userSignIn';
import Calendarview from './components/Calendarview';
import Snack from './components/Snack'
import AddPlayerForm from './components/AddPlayerForm';
import NewTeamForm from './components/Addnewteam'
import Home from './components/Home'



function App() {

  // const welcomeTitle = 'Welcome to the Food App'

return (
  <div className='App'>
  <BrowserRouter>
    <main>
      <div className='App-header'>
        <PrimaryNavbar /> 
        {/* <WelcomePage title = {welcomeTitle} /> */}
      </div>
      {/* <div className='pretty-calendar'> */}
      <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/index" element={<Calendarview />}/> 
              <Route path="/snacks" element={<Snack />}/>
              <Route path="/auth/sign-in" element={<UserSignIn />}/>
              <Route path="/auth/sign-up" element={<UserSignUp />}/>
              <Route path="new-player" element={<NewTeamForm />}/>
              <Route path="new-team" element={<AddPlayerForm />}/>
            </Routes>  
      </div>
    </main>
  </BrowserRouter>
  </div>
  );
}

export default App;

