// 1. Make a button labeled "Random Trivia Question" or 
//    "Get Question" or something descriptive
// 2. On click, have this button make a GET request to get random 
//    trivia data
// 3. for random trivia use url:  http://jservice.io/api/random
// 4. Make some html elements like a div where you will display the 
//    trivia question(question), category(category: title) and points(value)
// NOTE: Look at the data that is returned to you
//      - think back about how to access data from different datatypes
//      - Is it an array within an object? 
//      - How do you access the info?


// import "react"; // do not need since we used npx create-react-app
// Using the state hook: https://reactjs.org/docs/hooks-state.html
// let's us use state without writing a class
// mimicking Counter example for Score
// The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element

// import {useState, useEffect} from "react";
import { useState } from "react";

const GetTrivia = (props) => {
    // set url to pull random trivia from open source api
    const url = "https://jservice.io/api/random";

    // set state to hold trivia data
    const [question, setQuestion] = useState(null);


    // set state variable to hold score, and initially set to 0
    const [score, setScore] = useState(0);

    // fetching data from api url
    const getQuestion = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            if (data) {
                setQuestion(data);
            }
            setTextHidden("false");
            console.log();
        } catch (e) {
            console.error(e);
        }
    };

    // to handle click for score increase based on trivia point value
    const handleIncrease = () => {
        setScore(score + question[0].value);
      };
    // to handle click for score decrease based on trivia point value
    const handleDecrease = () => {
        setScore(score - question[0].value);
      };
    // to handle click for score reset
    const handleReset = () => {
        setScore(0);
      };

    // set state to hide solution
    const [isTextHidden, setTextHidden] = useState(true);

    // to handle click for hidden text to not be hidden
    const onClick = () => setTextHidden(!isTextHidden);


    return (
        <div>
            <h1>Welcome to Jeopardy<span id="reg">®</span> Trivia!</h1>

            <span id="score">Score: <span id="number">{score}</span></span>

            <section className="buttons">

                <button id="increase" onClick={handleIncrease}>Increase</button>
                <button id="decrease" onClick={handleDecrease}>Decrease</button>
                <button id="reset" onClick={handleReset}>Reset</button>

                <h2>Let's play!</h2>
            </section>

            <div>
                {/* <h5>Click below to get a random trivia question</h5> */}
                <button id="triviabtn" onClick={getQuestion}>Get NEW Trivia</button>
                
                <div>
                    <h3>Trivia: <span id="solution">{question == null ? "" : question[0].question}</span></h3>
                    
                    <h4>Category: <span id="category">{question == null ? "" : question[0].category.title}</span></h4>
                    
                    <span><h4>Point value: <span id="points">{" "}{question == null ? "" : question[0].value}</span></h4></span>
                    
                    <button id="revealbtn" onClick={onClick}>
                        {isTextHidden ? "Reveal Solution" : "Hide Solution"}
                    </button>
                    
                    <h3> What is/ what are: {!isTextHidden ? <span id="category"><span>{question[0].answer}</span>?</span> : null}</h3>

                </div>
                <footer id="footer">W10D3. Content provided from jservice.io. This is not associated with jeopardy productions, inc.</footer>
            </div>
        </div>

    )

}

export default GetTrivia