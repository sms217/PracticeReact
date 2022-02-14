import {React,useState} from 'react';
function MinutesToHours(){
    const [amount, setAmount] = useState("");
    const [flipped, setFlipped] = useState(false);
    function onChange(event){
      console.log(event.target.value);
      setAmount(event.target.value);
      // setHours(event.target.value/60);
    }
  
    function reset(){
      setAmount('');
    }
    function onFlip(){
      reset();
      setFlipped((current)=>!current);
    }
    return (
      <div className="App">
        <h3>Minutes to Hours</h3>
        <p>Minutes : <input placeholder='minutes' onChange={onChange} disabled={flipped===true} value={flipped ? amount*60 : amount} type="number"></input></p>
        <p>Hours : <input placeholder='hours' type='number' disabled={flipped===false} value={flipped ? amount : Math.round(amount/60)} onChange={onChange}></input></p>
        <button onClick={onFlip}>flip</button>
        <button onClick={reset}>reset</button>
      </div>
    );
}
export default MinutesToHours;