import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



function NewPlayer(){


    const [signUpCredentials, setSignUpCredentials] = useState({})


    const handleData=({target})=>{
        const{name,value} = target
        console.log(name,value)
        setSignUpCredentials({[name]: value})

    }
   
    return(

        <main>
            <h1>New Player</h1>
            <h3>Please add the player information</h3>
                <form action= "">
                    <Box  component="form"
                     sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                         }}
                         noValidate
                        autoComplete="off"
                        >
                        <TextField id="First Name" 
                        label="First Name" 
                        variant="outlined"
                        name = 'playerFirstName'
                        type = 'text'
                        onChange = {handleData}
                        maxLength = {10}
                        />
                        <TextField id="Last Name" 
                        label="Last Name" 
                        variant="outlined"
                        name = 'playerLastName'
                        type = 'text'
                        onChange = {handleData}
                        maxLength = {10}
                        />
                        <TextField id="Date of Birth" 
                        label="Date of Birth" 
                        variant="outlined"
                        name = "player-dob"
                        type = 'date'
                        onChange = {handleData}
                        maxLength = {10}
                        />

                        <InputLabel id="Select a team">Select Your Team</InputLabel>
                            <Select
                            id="team"
                            label="Select Your Team"
                            value = 'team'
                            onChange={handleSelectedTeam}
                            
                            >
                                <MenuItem value= "team_0"> --- </MenuItem>
                                <MenuItem value= "team_1">Team 1</MenuItem>
                                <MenuItem value= "team_2">Team 2</MenuItem>
                                <MenuItem value= "team_3">Team 3</MenuItem>
                            </Select>

                        <Button variant = 'contained' type="submit" size = "large">
                            Add New Player
                        </Button>

                    
                    </Box>
                </form>
            </main>





    )
    
}

export default NewPlayer;