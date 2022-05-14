import React, {useState} from 'react';




function UserSignUp(){

    const [title, setTitle] = useState('Sign Up!')
    const [subtitle, setSubTitle] = useState('Please fill out the form')

    const handleSentFomMessage = ()=>{
        setSubTitle('Your info has been sent!')
    }
    return(
        <div>

            
            <main>
                 <h1>{title}</h1>
                 <h3>{subtitle}</h3>
                    <form action= "">
                        <div >
                            <label htmlFor="firstName">First Name :</label>
                            <input id="firstName" name="firstName"  />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name :</label>
                            <input type="text" id = 'lastName' name ="lastName"  />
                        </div>
                        <div>
                            <label htmlFor="city">DOB:</label>
                            <input id="city" name="city" />
                        </div>
                        <label htmlFor="team"> Select Your Team</label>
                        <select name ='team' id='team'>
                                <option value="Select">Select team</option>
                                <option value="team1">team 1</option>
                                <option value="team2">team 2</option>
                                <option value="team3">team 3</option>
                        </select>
                        
                        <div>
                            <label htmlFor="userEmailAddress">Email :</label>
                            <input type="userEmailAddress" id = 'userEmailAddress' name = 'userEmailAddress'/>
                        </div>
                        <div>
                            <label htmlFor="userPassword">Password</label>
                            <input type="password" />
                        </div>
                    
                        <div>
                        <input type="submit" onClick={handleSentFomMessage} value="Sign Up"/>
                        </div>

                    </form>
            </main>
            
     

            
        </div>





    )
    
}

export default UserSignUp;