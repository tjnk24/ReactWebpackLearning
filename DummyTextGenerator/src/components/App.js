import React, { useState, useEffect }from 'react';
import Output from "./Output";
import css from '../css/style.css';
import Numfield from "./controls/Numfield";

const App = () => {
    const [paras, setParas] = useState(4);
    const [wordsMin, setWordsMin] = useState(5);
    const [wordsMax, setWordsMax] = useState(15);
    const [text, setText] = useState('');

    useEffect(() => {
        getText();
    }, [paras, wordsMin, wordsMax]);

    const getText = (data = {}) => {
        const textUrl = 'https://www.randomtext.me/api/lorem/p-' + paras + '/' + wordsMin + '-' + wordsMax;
        fetch(textUrl)
        .then((response) => {
            response.json().then((data) => {
                setText(data.text_out);
            });
        })
        .catch((err) => {
                throw new Error(err);
            })
    };

    return (
        <div className="container">
            <h1>DummyText Generator</h1>
            <Output value={text}/>
            <h3>Real Time Options</h3>
            <form>
                <div>
                    <label>Paragraphs:</label>
                    <Numfield value={paras} onChanging={setParas.bind(this)}/>
                </div>
                <label>Words range:</label>
                <div className="wordrange">
                    <span>from: </span>
                    <Numfield value={wordsMin} onChanging={setWordsMin.bind(this)}/>
                    <span>to: </span>
                    <Numfield value={wordsMax} onChanging={setWordsMax.bind(this)}/>
                </div>
            </form>
        </div>
    )
};

export default App;