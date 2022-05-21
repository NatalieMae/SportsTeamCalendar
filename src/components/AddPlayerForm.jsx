import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


    
const teams =['None','team1','team2', 'team3', 'team4']

function AddPlayerForm(){

    const [currentSelectedTeam, setCurrentSelectedTeam] = useState('None')
    const [data, setData] = useState('none')
    const [allergyStatus, setAllergyStatus] =useState(false)

    const handleTeamChange = (event)=>{
        setCurrentSelectedTeam(event.target.value)
        console.log(event.target.value)  
    }

    const handleDataChange = (event) =>{
       setData(event.target.value)
       console.log(event.target.value)
    }
    const handleAllergicStatus =(e)=>{
        setAllergyStatus(e.target.value)
        console.log(e.target.value)
    }

   
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
                       
                       <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Allergy Status</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={allergyStatus}
                                onChange={handleAllergicStatus}
                            >
                                <FormControlLabel value="false" control={<Radio />} label="No Allergies" />
                                <FormControlLabel value="true" control={<Radio />} label="Allergies" />
                            </RadioGroup>
                        </FormControl>

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
