import { useState } from 'react';
import './App.css';

const emojiDictionary = {
  '😀': 'smiley',
  '😥': 'sad',
  '💌': 'love letter',
  '💖': 'love'
};

function App() {

  let [emojiMeaning, setEmoji] = useState("");

  function emojiHandeler(event){
    let userInput = event.target.value;

    emojiMeaning = emojiDictionary[userInput];
    // console.log(emojiMeaning);
    if(userInput in emojiDictionary){
      setEmoji(emojiMeaning);
    }else {
      emojiMeaning = `we don't have this emoji in our database`;
      setEmoji(emojiMeaning);
    }

    // setUserInput(userInput);
    // console.log(userInput);
  }

  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      {/* <button onClick={myLikesCounter}>like</button> {likeCounter} */}
      <input class="userInput" type="text" name="userInput" onChange={emojiHandeler} />
      <h2>😀 😥 💌 💖</h2>
      <h2> this is a {emojiMeaning} emoji</h2>
    </div>
  );
}

export default App;
