import React,{useEffect,useState} from "react";


import "./App.css";

const App = () =>{

  const APP_ID= "2a9a2fa2";
  const APP_KEY= "9e16ac61fc195be9b029ec8a43b7630d";
  
   
  
  
useEffect( () => {
  getRecipes();

},[]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type= "text"/>
        <button  className="search-button" type="submit">
          Search
        </button>
      </form>
      
    </div>
  );
};

export default App;
