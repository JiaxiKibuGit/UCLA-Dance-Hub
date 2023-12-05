import NavBar from './components/navbar';


export default function OrganizationSearch() {
    
  function redirectToPage(team) {
    window.sessionStorage.setItem("current_team", team);
    window.location.replace("/team");
  }

  
  return (
    <div>
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick = {() => redirectToPage(1)}>samahang</button>
      <button onClick = {() => redirectToPage(2)}>ACA</button>
      <p>Organization Search Page</p>
    </div>

  );
}
  
//search bar -> button -> link
//link -> teampage(1) 

// FIRST PROBLEM - HOW TO GET BUTTON = ID 
// SECOND PROBLEM - HOW TO GET ID => TEAM PAGE ID 