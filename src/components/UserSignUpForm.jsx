import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



function UserSignUp(){

    // const [team, setTeam] = useState('');

    const handleSelectedTeam = ({target}) => {
        const{value} =  target
        // setTeam({team: value});
        setSignUpCredentials({'team': value})
        console.log(value)
        console.log('team selected')
    };

    const [signUpCredentials, setSignUpCredentials] = useState(null)


    const handleData=({target})=>{
        const{name,value} = target
        console.log(name,value)
        setSignUpCredentials({[name]: value})

    }
   
    return(

        <main>
            <h1>Sign Up</h1>
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
                        name = 'firstName'
                        type = 'text'
                        onChange = {handleData}
                        maxLength = {10}
                        />
                        <TextField id="Last Name" 
                        label="Last Name" 
                        variant="outlined"
                        name = 'lastName'
                        type = 'text'
                        onChange = {handleData}
                        maxLength = {10}
                        />
                        <TextField id="Date of Birth" 
                        label="Date of Birth" 
                        variant="outlined"
                        name = "dob"
                        type = 'date'
                        onChange = {handleData}
                        maxLength = {10}
                        />

                        <TextField id="Email address" 
                        label="Email address" 
                        variant="outlined"
                        name = 'userEmailAddress'
                        type = 'email'
                        onChange = {handleData}
                        maxLength = {10}
                        />

                        <TextField id="Child First's Name" 
                        label="Child's Name" 
                        variant="outlined"
                        name = 'childFirstName'
                        type = 'text'
                        onChange = {handleData}
                        maxLength = {10}
                        />
                        <TextField id="Child Last's name" 
                        label="Child's Last Name" 
                        variant="outlined"
                        name = 'childLastName'
                        type = 'text'
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

                       <h2>Select your user and password</h2>
                       <TextField id="outlined-basic" 
                        label="Username" 
                        variant="outlined"
                        name = 'userName'
                        type = 'text'
                        onChange = {handleData}
                        maxLength = {10}
                        />
                        <TextField id="outlined-basic" 
                        label="Password" 
                        variant="outlined"
                        name = 'userPassword'
                        type = 'password'
                        onChange = {handleData}
                        maxLength = {10}
                        />

                        <Button variant = 'contained' type="submit" size = "large">
                            Sign Up
                        </Button>

                    
                    </Box>
                </form>
            </main>





    )
    
}

export default UserSignUp;