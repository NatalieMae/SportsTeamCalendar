import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function NewTeamForm(){


    const [newTeam, setNewTeam] = useState()

    const handleNewTeam = (e)=>{
        
        console.log(e.targe.value)
        setNewTeam(e.target.value)
    }
    // const handleData=({target})=>{
    //     const{name,value} = target
    //     console.log(name,value)
    //     setNewTeam({[name]: value})

    // }
   
    return(

        <main>
            <h1>New Team</h1>
            <h3>Please enter the new team name</h3>
                <form action= "">
                    <Box  component="form"
                     sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                         }}
                         noValidate
                        autoComplete="off"
                        >
                        <TextField id="New Team Name" 
                        label="Team Name" 
                        variant="outlined"
                        name='newTeam'
                        type = 'text'
                        onChange={handleNewTeam}
                        maxLength = {10}
                        />
                        <br />
                        
                        <Button variant = 'contained' type="submit" size = "medium">
                            Add Team
                        </Button>

                    
                    </Box>
                </form>
            </main>





    )
    
}

export default NewTeamForm;