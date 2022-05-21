import React from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css'
import PrimaryNavbar from './components/Navbar';
// import WelcomePage from './components/WelcomePage';
import UserSignUp from './components/UserSignUpForm';
import UserSignIn from './components/userSignIn';
import Calendarview from './components/Calendarview';
import Snack from './components/Snack'
import Beverage from './components/Beverage'
// import Popup from './components/PopupBox';


function App() {

  // const welcomeTitle = 'Welcome to the Food App'

  return (


    <div className='App'>
    <main>
      <div className='App-header'>
        <PrimaryNavbar /> 
        {/* <WelcomePage title = {welcomeTitle} /> */}
        </div>
      <div className='pretty-calendar'>
        <Calendarview />
        {/* <Popup /> */}
      </div>
        <UserSignIn />
        <UserSignUp />
      <div className='snack-calendar'>
        <Snack />
        <Beverage />
        </div>
    </main>

    </div>
  );
}

export default App;

