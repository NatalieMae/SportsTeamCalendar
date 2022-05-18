import React, { useState } from "react";
import {Calendar as ReactCalendar} from 'react-calendar';
// import 'react-calendar/dis/Calendar.css';


function Calendarview() {

    const [date, setDate] = useState([
        new Date(),
    ]);

    return (
        <div className="pretty-calendar">
        <h1 className="text-center">Team Game Day Information</h1>
        <div className="calendar-container">
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