import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function UserSignIn(){

// Button config

<Stack spacing={2} direction="row"></Stack>

// initial values
const initialValues = {
    userName : "",
    userPassword :""
}
//get values from username & password
    const [userCredentials, setUserCredentials] = useState(initialValues)
    const handleData =({target})=> {     
            
            const {name, value} = target
            console.log(name,value)
            setUserCredentials({[name]: value});
            console.log(userCredentials)

        }
 
    // Prevent submission
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('not sent')
       
    }
    
    return( 

       <form  action="" onSubmit = {handleSubmit}>
        <Box  component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
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
        </Box>

        <br />
        <Button variant="contained" type = "submit">
               Entry
        </Button>
        
           

        
       </form>
    
   
    )

   
}


export default UserSignIn;