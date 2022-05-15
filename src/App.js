import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import UserSignUp from './components/UserSignUpForm';
import UserSignIn from './components/userSignIn';
// import {Calendar as ReactCalendar} from 'react-calendar';
import Calendarview from './components/Calendarview';
import Snack from './components/Snack'
import Beverage from './components/Beverage'


function App() {

  const welcomeTitle = 'Welcome to the Food App'

  return (

    <div>
    <main>
      <div className='pretty-calendar'>
        <WelcomePage title = {welcomeTitle} />
        <UserSignIn />
        <UserSignUp />
        <Calendarview />
        <Snack />
        <Beverage />
      </div>
    </main>
    </div>
  );
}

export default App;