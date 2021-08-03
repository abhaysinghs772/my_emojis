import { useState } from 'react';
import './App.css';

function App() {
  let userName = 'Abhay';
  // let likeCounter = 0;

  const [likeCounter, newLikeCounter] = useState(0);

  function myLikesCounter() {
    // mutablity and immutability
    // let increamentedLikes = likeCounter++; 
    // this line will gives error because we can't assign value to a constant variable "likeCounter"

    let increamentedLikes = likeCounter + 1; // this will not throw error because we are incrementing the value by 1 insted of assigning it a value 
    
    newLikeCounter(increamentedLikes);
    // console.log("liked", likeCounter);
  }

  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      <h2>welcome {userName}</h2>
      <button onClick={myLikesCounter}>like</button> {likeCounter}
    </div>
  );
}

export default App;
