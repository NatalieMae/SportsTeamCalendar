import React, { useState } from "react";
import {Calendar as ReactCalendar} from 'react-calendar';
import '../Calendar.css';
import Snack from "./Snack";
import { useNavigate } from "react-router-dom";


function Calendarview() {
    let navigate = useNavigate();
    const snackers = () => {
    navigate("/snacks");
    };
    const [date, setDate] = useState(new Date());
    const [chosenDate, reserveChosenDate] = useState([])
    const onChange = (date) => {
        setDate(date);   
      };
    const dateSelected = (date) => {
        console.log(date)
        reserveChosenDate(chosenDate => chosenDate.concat(date))

    }

    //const [snackers, setSnackers] = useState(Snack);

    // useEffect(() => {
    // }
    

    
    return (
        <div className="pretty-calendar">
            <h1>Game Day Information</h1>
            <div className="calendar-container" onClick={snackers}>
                <center>
                    <ReactCalendar
                        onSelect={dateSelected}
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