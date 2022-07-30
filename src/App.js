import React from "react";

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
  <div>
    <h1>안녕하세요?</h1>
    <Food fav="kimchi" />
    <Food fav="삽겹살" />
    <Food fav="쭈꾸미" />
  </div>
  );  
}

export default App;
