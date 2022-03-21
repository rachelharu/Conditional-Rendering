import React from "react";
import Login from "./Login";

//creates variable to set login status false
var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

//checks if user is logged in
function App() {
  return (
    <div className="container">
      {
        //ternary
        //isLoggedIn === true ? <h1>Hello</h1> : <Login />
        //And operator
        //currentTime > 12 && <h1>why</h1>
      }
    </div>
  );
}

export default App;
