import React from 'react';
import Calendar from 'react-calendar';
import './App.css';

function App() {
  return (
    <div>
      <header>
        "Snack APP!"
      </header>
      <main>
        <div className='pretty-calendar'>
        <Calendar />
        </div>
      </main>
    </div>
  );
}

export default App;
