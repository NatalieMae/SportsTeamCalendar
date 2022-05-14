import React from 'react';
// import {Calendar as ReactCalendar} from 'react-calendar';
import Calendarview from './components/Calendarview';
// import 'react-calendar/dis/Calendar.css';
import './App.css';
import Snack from './components/Snack'
import Beverage from './components/Beverage'


function App() {
  return (
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