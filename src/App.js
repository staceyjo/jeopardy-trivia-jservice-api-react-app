//  jService API: has Jeopardy trivia questions and answers available to the public
// as an open source api
// http://jservice.io/
// npx create-react-app jservice-api
// cd jservices-api
// npm start
// under src- make components folder
// in components folder, create Score.js
// in App.js import Score

import './App.css';
import GetTrivia from './components/getTrivia';
// import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      {/* <Score /> */}
      <GetTrivia />
    </div>
  );
}

export default App;
