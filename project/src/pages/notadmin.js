import NavBar from './components/navbar';
import './notloggedin.css'

export default function NotAdmin() {
    return (
      <div className = "NLI">
        <NavBar/>
        <br></br>
        <br></br>
        <br></br>
        <p>YOU MUST BE ADMIN TO USE THIS FUNCTION</p>
      </div>
    );
  }
  