// import { HdrEnhancedSelectOutlined } from "@mui/icons-material";
// import { Button, Popover } from "@mui/material";
// import { render } from "@testing-library/react";
import React, { useState } from "react";
// import  Typography  from "@mui/material/Typography";
import {Calendar as ReactCalendar} from 'react-calendar';
// import 'react-calendar/dis/Calendar.css';


function Calendarview() {

    const [date, setDate] = useState([
        new Date(),
    ]);

    // const [button, setButton] = useState([
    //     new Button(),
    // ]);

    // const handleClick = (event: React.MouseEventHandler) => {
    //     render(event.currentTarget)
    // }
    
    
    
    return (
        <div className="pretty-calendar">
        <h1 className="text-center">Game Day Information</h1>
        <div className="calendar-container">
        {/* <Button aria-describedby={date} variant="contained" onClick={handleClick}> */}
        <ReactCalendar 
                onChange={setDate} 
                value={date}
                minDate={new Date()}
                minDetail='year'
            />
            {/* </Button> */}
{/* <Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
  <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
</Popover> */}
                    
        </div>
        </div>
    );
}

export default Calendarview;