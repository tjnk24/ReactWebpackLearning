import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDiVWtjryzpHoUKOSDP3-EDWs8r5ybYqwk",
    authDomain: "react-lesson-survey.firebaseapp.com",
    databaseURL: "https://react-lesson-survey.firebaseio.com",
    projectId: "react-lesson-survey",
    storageBucket: "react-lesson-survey.appspot.com",
    messagingSenderId: "999121934294",
    appId: "1:999121934294:web:ae5c4c23e148e9b4a8b677"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {

    var user, questions;

    let nameField = React.createRef();

    const [id, setId] = useState(uuid.v1()),
          [name, setName] = useState(''),
          [answers, setAnswers] = useState({ q1:'', q2:'', q3:'', q4:''}),
          [submitted, setSubmit] = useState(false);

    console.log(submitted);

    let handleNameSubmit = (event) => {
        var nameVal = nameField.current.value;
        setName(nameVal);
        event.preventDefault();
    };

    let handleQuestionSubmit = (event) => {
        /*console.log('question submitting');*/
        firebase.database().ref('surveys/' + id).set({
            name: name,
            answers: answers
        });
        setSubmit(true);
        event.preventDefault();
    };

    let handleQuestionChange = (event) => {
            let answersVal = answers;
        if (event.target.name === 'q1') {
            answersVal.q1 = event.target.value;
        } else if (event.target.name === 'q2') {
            answersVal.q2 = event.target.value;
        } else if (event.target.name === 'q3') {
            answersVal.q3 = event.target.value;
        } else if (event.target.name === 'q4') {
            answersVal.q4 = event.target.value;
        }
        setAnswers(answersVal);
    };

    handleQuestionChange = handleQuestionChange.bind(this);

    if(name && submitted === false) {
        user = <h2>Welcome, {name}!</h2>;
        questions = <span>
            <h3>Survey Questions</h3>
            <form onSubmit={handleQuestionSubmit.bind(this)}>
                <div>
                    <label>What is your favourite operating system?</label><br />
                    <input type="radio" name='q1' value='Windows' onChange={handleQuestionChange}/>Windows<br />
                    <input type="radio" name='q1' value='OSX' onChange={handleQuestionChange}/>OSX<br />
                    <input type="radio" name='q1' value='Linux' onChange={handleQuestionChange}/>Linux<br />
                    <input type="radio" name='q1' value='Solaris' onChange={handleQuestionChange}/>Solaris<br />
                    <input type="radio" name='q1' value='Other' onChange={handleQuestionChange}/>Other<br />
                </div>
                <div>
                    <label>What's your favourite brand of TV?</label><br />
                    <input type="radio" name='q2' value='Sony' onChange={handleQuestionChange}/>Sony<br />
                    <input type="radio" name='q2' value='Samsung' onChange={handleQuestionChange}/>Samsung<br />
                    <input type="radio" name='q2' value='Panasonic' onChange={handleQuestionChange}/>Panasonic<br />
                    <input type="radio" name='q2' value='Vizio' onChange={handleQuestionChange}/>Vizio<br />
                    <input type="radio" name='q2' value='Other' onChange={handleQuestionChange}/>Other<br />
                </div>
                <div>
                    <label>What's your favourite smartphone brand?</label><br />
                    <input type="radio" name='q3' value='Morning' onChange={handleQuestionChange}/>Morning<br />
                    <input type="radio" name='q3' value='Afternoon' onChange={handleQuestionChange}/>Afternoon<br />
                    <input type="radio" name='q3' value='Apple' onChange={handleQuestionChange}/>Apple<br />
                    <input type="radio" name='q3' value='Xiaomi' onChange={handleQuestionChange}/>Xiaomi<br />
                    <input type="radio" name='q3' value='Other' onChange={handleQuestionChange}/>Other<br />
                </div>
                <div>
                    <label>What's your favourite CPU brand?</label><br />
                    <input type="radio" name='q4' value='Intel' onChange={handleQuestionChange}/>Intel<br />
                    <input type="radio" name='q4' value='AMD' onChange={handleQuestionChange}/>AMD<br />
                    <input type="radio" name='q4' value='Nvidia' onChange={handleQuestionChange}/>Nvidia<br />
                    <input type="radio" name='q4' value='Other' onChange={handleQuestionChange}/>Other<br />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </span>
    }
    else if(!name && submitted === false){
        var n = 'name';
        user = <span>
            <h2>Введите ваше имя для старта</h2>
            <form onSubmit={handleNameSubmit.bind(this)}>
                <input type="text" placeholder="Enter name..." ref={nameField} />
            </form>
        </span>;
        questions = '';
    } else if (submitted === true) {
        user = <h2>Thank You!</h2>
    }

    /*useEffect(() => {
        console.log(name);
    }, []);*/

    return (
      <div className="App">
          <header className="App-header text-center">
                <h2>Simple Survey</h2>
          </header>
          <div className="text-center">
              {user}
          </div>
          <div className='container'>
              {questions}
          </div>
      </div>
    );
}

export default App;
