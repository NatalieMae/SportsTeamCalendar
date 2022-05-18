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



function TeamForm(){

    // const [team, setTeam] = useState('');

    const handleSelectedTeam = ({target}) => {
        const{value} =  target
        // setTeam({team: value});
        setSignUpCredentials({'team': value})
        console.log(value)
        console.log('team selected')
    };

    const [signUpCredentials, setSignUpCredentials] = useState({})


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
                        <TextField id="Team Name" 
                        label="First Name" 
                        variant="outlined"
                        name = 'teamName'
                        type = 'text'
                        onChange = {handleData}
                        maxLength = {10}
                        />
                        
                        <Button variant = 'contained' type="submit" size = "large">
                            Create Team
                        </Button>

                    
                    </Box>
                </form>
            </main>





    )
    
}

export default TeamForm;