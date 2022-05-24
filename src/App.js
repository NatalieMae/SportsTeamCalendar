
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

return (
  <div className='App'>
  {/* https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router */}
  <BrowserRouter>
    <main>
      <div className='App-header'>
        <PrimaryNavbar /> 
      </div>
      <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/index" element={<Calendarview />}/> 
              <Route path="/snacks" element={<Snack />}/>
              <Route path="/auth/sign-in" element={<UserSignIn />}/>
              <Route path="/auth/sign-up" element={<UserSignUp />}/>
              <Route path="new-player" element={<AddPlayerForm />}/>
              <Route path="new-team" element={<NewTeamForm />}/>
            </Routes>  
      </div>
    </main>
  </BrowserRouter>
  </div>
  );
}

export default App;