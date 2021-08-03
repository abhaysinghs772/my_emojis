import { useState } from 'react';
import './App.css';

function App() {
  let userName = 'Abhay';
  let likeCounter = 0;

  function myLikesCounter(){
    likeCounter++;
    console.log("liked" , likeCounter);
  }

  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      <h2>welcome {userName}</h2>
      <button onClick= {myLikesCounter}>like</button> 
    </div>
  );
}

export default App;
