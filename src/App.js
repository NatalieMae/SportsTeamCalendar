import React from 'react';
import './App.css';
import PrimaryNavbar from './components/Navbar';
// import WelcomePage from './components/WelcomePage';
import UserSignUp from './components/UserSignUpForm';
import UserSignIn from './components/userSignIn';
// import {Calendar as ReactCalendar} from 'react-calendar';
import Calendarview from './components/Calendarview';
import Snack from './components/Snack'
import Beverage from './components/Beverage'
import AddPlayerForm from './components/AddPlayerForm';


function App() {

  // const welcomeTitle = 'Welcome to the Food App'

  return (


    <main>
      <div className='App-header'>
        <PrimaryNavbar /> 
        {/* <WelcomePage title = {welcomeTitle} /> */}
        </div>
      <div className='pretty-calendar'>
        
      <Calendarview />
      </div>
      <UserSignIn />
        <UserSignUp />
      <div className='snack-calendar'>
        <Snack />
        <Beverage />

    </main>

    </div>
  );
}

export default App;

