import './App.css';
import React, {useEffect } from "react";
import LoginButton from './hooks/LoginButton';
import NavBar from "./hooks/Navbar";
import Search from './hooks/Search';

function App() {
  useEffect(()=>{
    if(!localStorage.getItem("expiresIn")){
      localStorage.clear();
      
    }
  })

  //localStorage.clear();
  //const token = localStorage.getItem("accessToken");
  const exp = localStorage.getItem("expiresIn");
  //console.log(token);
  //console.log(exp);
  
  return (
    <div className="App">
      <NavBar/>
      <div className="App-body">

      {exp ? <Search /> : <LoginButton />}
        
      </div>
    </div>
  );
}

export default App;
