import React from 'react';
import './App.css';
import WordCard from './WordCard';


const word = "computer";
function App() {
  return (
    <div>
      <header className="App-header">
        <center><img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.18169-9/22851686_1645089115530921_1167919643511244451_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHOkVrDl7RFBcYgC3IPsJoNsr5_Av54UJayvn8C_nhQltcg3oWvF8j3cXe5jfPoWLr-oZpF03etXDt5YSgtGBa0&_nc_ohc=BJAJyrNAAXoAX9qYma2&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT_Al7Q_3fRe7j-lMQoue7ldkVkU__zRWv4ZUE85ghQx4A&oe=63259653"width= "35%" height="35%"/></center>
        <WordCard value="computer"/>
      </header>
      <center><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Reward for Winners</a></center>
    </div>
    
    )
}

export default App;

