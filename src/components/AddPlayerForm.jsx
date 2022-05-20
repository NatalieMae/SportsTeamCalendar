import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const teams =['None','team1','team2', 'team3', 'team4']

function AddPlayerForm(){

    const [currentSelectedTeam, setCurrentSelectedTeam] = useState('None')
    const [data, setData] = useState('none')

    const handleTeamChange = (event)=>{
        setCurrentSelectedTeam(event.target.value)
        console.log(event.target.value)
        
    }

    const handleDataChange = (event) =>{
       setData(event.target.value)
       console.log(event.target.value)
       
    }

    // const handleData=({target})=>{
    //     const{name,value} = target
    //     console.log(name,value)
    //     setSignUpCredentials({[name]: value})

    // }
   
    return(

        <main>
            <h1>Add a New Player</h1>
            <h3>Please fill out the form</h3>
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
                        name='playerFirstName'
                        type='text'
                        onChange={handleDataChange}
                        maxLength = {10}
                        />
                        
                        <TextField id="Last Name" 
                        label="Last Name" 
                        variant="outlined"
                        name='playerLastName'
                        type='text'
                        onChange={handleDataChange}
                        maxLength = {10}
                        />
                        <TextField id="Date of Birth" 
                        label="Date of Birth" 
                        variant="outlined"
                        name="playerDOB"
                        type='date'
                        onChange={handleDataChange}
                        maxLength = {10}
                        />

                        <InputLabel id="Select a team">Select Player's Team</InputLabel>
                            <Select
                            id="team"
                            label="player_Team"
                            value={currentSelectedTeam}
                            onChange={handleTeamChange}
                            
                            >
                             {teams.map(team => (
                                <MenuItem value={team}> {team} </MenuItem>

                             ))}
                            
                            </Select>

                        <Button variant = 'contained' type="submit" size = "large">
                            Add New Player
                        </Button>

                    
                    </Box>
                </form>
            </main>





    )
    
}

export default AddPlayerForm;
