import React from 'react';
import {useState, useEffect} from 'react';



function UserSignIn(){

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return( 
    
    <div>
       <form method="POST" action="">
           <label htmlFor = "username">
               <p>Username</p>
               <input type="text" onChange = {e => setUsername(e.target.value)} required />
           </label>
           <label htmlFor="password">
               <p>Password</p>
               <input type="password" onChange = {e => setPassword(e.target.value)} required/>
           </label>
           <br />
           <input type="submit" value="Submit"/>

        
       </form>
        
    </div>
    
    )

   
}

export default UserSignIn;