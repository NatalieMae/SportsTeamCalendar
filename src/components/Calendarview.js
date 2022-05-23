
import React, { useState } from "react";
import {Calendar as ReactCalendar} from 'react-calendar';
import '../Calendar.css';
import Snack from "./Snack";



function Calendarview() {

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
      };

    const [snackers, setSnackers] = useState(Snack);

    // useEffect(() => {
    // }
    

    
    return (
        <div className="pretty-calendar">
            <h1>Game Day Information</h1>
            <div className="calendar-container">
              <button onClick={() => setSnackers(('/src/components/Snack.js'))}></button>
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
        )    
}    

export default Calendarview;