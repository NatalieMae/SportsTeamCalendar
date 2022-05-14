import * as React from 'react';
// import { ReactDOM } from 'react-dom';
import Calendarview from './components/Calendarview';
import Button from '@mui/material/Button';
import './App.css';
import Snack from './components/Snack'


function App() {
  return (
    <div>
      <header>
        ""
      </header>
      <main>
        <div className='pretty-calendar'>
          <Calendarview />
          <Snack/>
        </div>
      </main>
      <Button variant='contained' color='primary' >
          {Date}
      </Button>
    </div>
  );
}

export default App;