import { useState } from 'react';
import './App.css';

function App() {
  // let userName = 'Abhay';
  // let likeCounter = 0;

  // const [likeCounter, newLikeCounter] = useState(0);
  let [userInput, setUserInput] = useState("");

  // function myLikesCounter() {
  //   // mutablity and immutability
  //   // let increamentedLikes = likeCounter++; 
  //   // this line will gives error because we can't assign value to a constant variable "likeCounter"

  //   let increamentedLikes = likeCounter + 1; // this will not throw error because we are incrementing the value by 1 insted of assigning it a value 
    
  //   newLikeCounter(increamentedLikes);
  //   // console.log("liked", likeCounter);
  // }

  function userInputHandeler(event){
    // console.log(event.target.value);
    userInput = event.target.value;
    setUserInput(userInput);
  }

  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      {/* <button onClick={myLikesCounter}>like</button> {likeCounter} */}
      <input class="userInput" type= "text" name="userInput" onChange={userInputHandeler}/>
      <h2>welcome {userInput}</h2>
    </div>
  );
}

export default App;
