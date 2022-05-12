import React from 'react';




function UserSignUp(){
    return(
        <div>

            
            <main>
                 <h1>Sign UP Information</h1>
                    <form method="POST" action= "">
                        <div >
                            <label htmlFor="firstName">First Name :</label>
                            <input id="firstName" name="firstName" required />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name :</label>
                            <input type="text" id = 'lastName' name ="lastName" required />
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
                            <input type="userEmailAddress" id = 'userEmailAddress' name = 'userEmailAddress'required/>
                        </div>
                    
                        <div>
                        <input type="submit" value="Sign Up"/>
                        </div>

                    </form>
            </main>
            
     

            
        </div>





    )
    
}

export default UserSignUp;