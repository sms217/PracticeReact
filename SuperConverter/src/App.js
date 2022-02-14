import {React, useState} from 'react';
import MinutesToHours from './MinutesToHours';
import KmToMiles from './KmToMiles';
import './App.css';

function App() {
  const [index, setIndex] = useState("default");
  function onSelect(event){
    console.log(event.target.value);
    setIndex(event.target.value);
  }
  return(
    <div>
      <h2>Super Converter</h2>
      <select value={index} onChange={onSelect}>
        <option value="default">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr/>
      {index==="0" ? <MinutesToHours/> : null}
      {index==="1" ? <KmToMiles/> : null}
    </div>
  )
}

export default App;
