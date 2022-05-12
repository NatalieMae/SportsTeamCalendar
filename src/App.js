import './App.css';
import WelcomePage from './components/WelcomePage';
import UserSignUp from './components/UserSignUpForm';
import UserSignIn from './components/userSignIn';


function App() {

 const welcomeTitle = 'Welcome to the Food App'

  return (
    <div>
    <WelcomePage title = {welcomeTitle} />

    <UserSignIn />
    <UserSignUp />
    
  
     


      
    </div>
  );
}

export default App;
