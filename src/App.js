import './App.css';
import WelcomePage from './components/WelcomePage';
import UserSignUp from './components/UserSignUpForm';
import UserSignIn from './components/userSignIn';
import React from 'react';
// import {Calendar as ReactCalendar} from 'react-calendar';
import Calendarview from './components/Calendarview';
// import 'react-calendar/dis/Calendar.css';
import Snack from './components/Snack'
import Beverage from './components/Beverage'


function App() {

 const welcomeTitle = 'Welcome to the Food App'

  return (
    <div>
    <WelcomePage title = {welcomeTitle} />

    <UserSignIn />
    <UserSignUp />
      <div className=''>
      <main>
        <div className='pretty-calendar'>
          <Calendarview />
          <Snack />
          <Beverage />
        </div>
      </main>
    </div>
  );
}

export default App;