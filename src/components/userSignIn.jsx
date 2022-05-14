import React from 'react';
import {useState, useEffect} from 'react';



function UserSignIn(){

    const [userCredentials, setUserCredentials] = useState({})
  
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submitted')
    }
    const handleData =({target})=> {
        
        const {name, value} = target
        console.log(name,value)
        setUserCredentials({[name]: value});
        console.log(userCredentials)

    }

    
    return( 
        
    
    <div>
        

       <form  action="" onSubmit = {handleSubmit}>
           <label htmlFor = "username">
               <p>Username</p>
               <input name = 'userName' type="text" onChange = {handleData}  />
           </label>


           <label htmlFor="userPassword">
               <p>Password</p>
               <input name = 'userPassword' type="password" onChange = {handleData} />
           </label>
           <br />
           <input type="submit" value="Entry" />

        
       </form>
        
    </div>
    
    )

   
}


export default UserSignIn;