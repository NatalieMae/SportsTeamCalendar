import React from 'react';
import {useState, useEffect} from 'react';



function UserSignIn(){

    const [username, setUsername] = useState()
    const [userPassword, setUserPassword] = useState()
    const goToMainPage = ()=>{


    }

    return( 
    
    <div>
       <form method="POST" action="">
           <label htmlFor = "username">
               <p>Username</p>
               <input type="text" onChange = {e => setUsername(e.target.value)}  />
           </label>
           <label htmlFor="userPassword">
               <p>Password</p>
               <input type="password" onChange = {e => setUserPassword(e.target.value)} />
           </label>
           <br />
           <input type="submit" value="Entry" onClick = {goToMainPage}/>

        
       </form>
        
    </div>
    
    )

   
}


export default UserSignIn;