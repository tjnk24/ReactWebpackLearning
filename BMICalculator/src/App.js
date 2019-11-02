import React, {useState} from 'react';
import './App.css';
import Range from "./Components/Range";
import Output from "./Components/Output";

function App() {

  const [height, setHeight] = useState(170),
        [weight, setWeight] = useState(60),
        [bmi, setBmi] = useState(22.49),
        [bmiClass, setBmiClass] = useState('Normal');

    console.log(bmi);
    console.log(bmiClass);

  let heightChange = (height) => {
        setHeight(height);
        configureBmi();
  };

  let weightChange = (weight) => {
        setWeight(weight);
        configureBmi();
  };

  let configureBmi = () => {
    let tmp = ((weight / height / height) * 10000).toFixed(2);
    setBmi(tmp);
    setBmiClass(getBmiClass(tmp));
  };

  let getBmiClass = (b) => {
      if(b <= 18.5) return 'Underweight';
      if(b >= 18.5 && b <= 24.99) return 'Normal';
      if(b >= 25 && b <= 29.99) return 'Overweight';
      if(b >= 30) return 'Obese';
  };
  return (
    <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <label>Height</label>
          <Range value={height} onChange={heightChange.bind(this)}/>
        </form>
        <form>
          <label>Weight</label>
          <Range value={weight} onChange={weightChange.bind(this)}/>
        </form>
        <br/>
        <br/>
        <Output data={}/>
    </div>
  );
}

export default App;
