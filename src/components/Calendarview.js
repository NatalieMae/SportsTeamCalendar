
import React, { useState } from "react";
// import { render } from 'react-dom';
import {Calendar as ReactCalendar} from 'react-calendar';
// import DatePicker from 'sassy-datepickers';

// import 'react-calendar/dis/Calendar.css';


function Calendarview() {

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
      };

    return (
        <div className="pretty-calendar">
        <h1>Game Day Information</h1>
        <div className="calendar-container">
        <ReactCalendar 
                onChange={onChange} 
                calendarType= 'US'
                onViewChange={onChange}
                maxDetail= 'month'
                value={date}
                minDate={new Date()}
                minDetail='year' />
                {console.log(date)}
                {date.toString()}
        </div>
        </div>
    );
}

export default Calendarview;