import './App.css';
import React from 'react';
import PrimaryNavbar from './components/Navbar';


function App() {

 const welcomeTitle = 'Welcome to the Food App'

  return (
    <div>
      <div className=''>
      <main>
        <div className='nav'>
          <PrimaryNavbar />
        </div>
      </main>
      </div>
    </div>
  )
}

export default App;

