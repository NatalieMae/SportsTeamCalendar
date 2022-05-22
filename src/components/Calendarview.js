
// import { Button, Popover } from "@mui/material";
// import { render } from "@testing-library/react";
import React, { useState } from "react";
import {Calendar as ReactCalendar} from 'react-calendar';
import DatePicker from 'sassy-datepickers';

// import 'react-calendar/dis/Calendar.css';


function Calendarview() {

    const [date, setDate] = useState([
        new Date(),
    ]);
      const onChange = (date) => {
        console.log(date.toString());
      };

    return (
        <div className="pretty-calendar">
        <h1 className="text-center">Game Day Information</h1>
        <div className="calendar-container">
          <DatePicker onChange={onChange} />
        <ReactCalendar 
                onChange={setDate} 
                value={date}
                minDate={new Date()}
                minDetail='year'
            />
        </div>
        </div>
    );
}

export default Calendarview;