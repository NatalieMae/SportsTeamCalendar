import React, { useState } from "react";
import {Calendar as ReactCalendar} from 'react-calendar';

function Calendarview() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="pretty-calendar">
            {/* <input type= "checkbox" onChange={()}></input> */}
            <ReactCalendar onChange={onChange} value={value} />
        </div>
    );
}

export default Calendarview;