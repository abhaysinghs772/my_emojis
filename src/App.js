import { useState } from 'react';
import './App.css';

const emojiDictionary = {
  '😀': 'smiley',
  '😥': 'sad',
  '💌': 'love letter',
  '💖': 'love'
};

// creating the array of keys from emojiDictionary
const emojis = Object.keys(emojiDictionary);

function App() {

  let [emojiMeaning, setEmoji] = useState("");

  // this function checks what emoji is being searched by the user
  function emojiHandeler(event) {

    let userInput = event.target.value;

    emojiMeaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setEmoji(emojiMeaning);
    } else {
      emojiMeaning = `we don't have this emoji in our database`;
      setEmoji(emojiMeaning);
    }
  }

  function emojiClickHandeler(index) {
    // console.log(emojis[index]);

    let userInput = emojis[index];
    emojiMeaning = emojiDictionary[userInput];

    if(userInput in emojiDictionary){
      // console.log("yes");
      setEmoji(emojiMeaning);
    }
  }

  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      {/* <button onClick={myLikesCounter}>like</button> {likeCounter} */}
      <input class="userInput" type="text" name="userInput" onChange={emojiHandeler} />

      <div style={{ padding: "10px" }} >
        {
          emojis.map(function (emoji, index) {
            // console.log(emoji);
            return <span onClick={() => emojiClickHandeler(index)} style={{ padding: '1rem', cursor: 'pointer', fontSize: '25px' }} >{emoji}</span>
          })
        }
      </div>

      <h2> this is a {emojiMeaning} emoji</h2>
    </div>
  );
}

export default App;