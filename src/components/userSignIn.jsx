import React from 'react';
import {useState, useEffect} from 'react';



function UserSignIn(){
//get values from username & password
    const [userCredentials, setUserCredentials] = useState({})
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
        
    
    <div>
        

       <form  action="" onSubmit = {handleSubmit}>
           <label htmlFor = "username">
               <p>Username</p>
                <input name = 'userName' type="text" onChange = {handleData} maxLength= {10} required />
               <p>Password</p>
                <input name = 'userPassword' type="password" onChange = {handleData} maxLength={20} required />
           </label>


           
           <br />
           <input type="submit" value="Entry" />

        
       </form>
        
    </div>
    
    )

   
}


export default UserSignIn;