import React, {useState} from 'react';




function UserSignUp(){

    const [title, setTitle] = useState('Sign Up!')
    const [subtitle, setSubTitle] = useState('Please fill out the form')

    const [signUpCredentials, setSignUpCredentials] = useState({})

    const handleData=({target})=>{
        const{name,value} = target
        console.log(name,value)
        setSignUpCredentials({[name]: value})

    }





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
                            <input id="firstName" name="firstName" onChange={handleData} />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name :</label>
                            <input type="text" id = 'lastName' name ="lastName" onChange ={handleData} />
                        </div>
                        <div>
                            <label htmlFor="DOB">Date of Birth:</label>
                            <input id="DOB" type= "date" name="dob" onChange ={handleData} />
                        </div>
                        <label htmlFor="team"> Select Your Team</label>
                        <select name ='team' id='team' onChange ={handleData}>
                                <option value="Select">Select team</option>
                                <option value="team1">team 1</option>
                                <option value="team2">team 2</option>
                                <option value="team3">team 3</option>
                        </select>
                        
                        <div>
                            <label htmlFor="userEmailAddress">Email :</label>
                            <input type="email" id = 'userEmailAddress' name = 'userEmailAddress' onChange ={handleData}/>
                        </div>
                        <div>
                            <label htmlFor="userName">Username</label>
                            <input type="password" name = "userName" onChange ={handleData} maxLength ={20} />
                        </div>
                        <div>
                            <label htmlFor="userPassword">Password</label>
                            <input type="password" name ="userPassword" onChange ={handleData} maxLength ={20} />
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