import NavBar from './components/navbar';
import './notloggedin.css'

export default function NotLoggedIn() {
    return (
      <div className = "NLI">
        <NavBar/>
        <br></br>
        <br></br>
        <br></br>
        <p>PLEASE SIGN IN TO USE THIS FUNCTION</p>
      </div>
    );
  }
  