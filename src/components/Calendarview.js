// import { render } from "@testing-library/react";
import React, { useState } from "react";
import {Calendar as ReactCalendar} from 'react-calendar';
// import styled from 'styled-components';



function Calendarview() {

    const [date, setDate] = useState([
        new Date(),
    ]);
    
    // const [value, onChange] = useState(new Date());

    return (
        <div className="pretty-calendar">
        <h1 className="text-center">Game Day Information</h1>
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