import React from 'react';
// import {Calendar as ReactCalendar} from 'react-calendar';
import Calendarview from './components/Calendarview';
// import 'react-calendar/dis/Calendar.css';
import './App.css';


function App() {
  return (
    <div>
      <header>
        "Snack APP!"
      </header>
      <main>
        <div className='pretty-calendar'>
          <Calendarview />
        </div>
      </main>
    </div>
  );
}

export default App;