
import React, { useState } from "react";
// import { render } from 'react-dom';
import {Calendar as ReactCalendar} from 'react-calendar';
import '../Calendar.css';



function Calendarview() {

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
      };

    return (
        <div className="pretty-calendar">
            <h1>Game Day Information</h1>
            <div className="calendar-container">
                <center>
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
                </center>
            </div>
        </div>
    );
}

export default Calendarview;