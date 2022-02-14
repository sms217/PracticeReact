import { React, useState } from "react";
function KmToMiles(){
    const[amount, setAmount]=useState("");
    const[flipped, setFlipped] = useState(false);
    function onChange(event){
        console.log(event.target.value);
        setAmount(event.target.value)
    }
    function reset(){
        setAmount(0);
    }
    function onFlip(){
        reset();
        setFlipped((current)=>!current);
    }
    return(
        <div className="App">
            <h3>Km to Miles</h3>
            <p>Km : <input placeholder="km" onChange={onChange} disabled={flipped} value={!flipped ? amount : amount/0.6214}></input></p>
            <p>Miles : <input placeholder="miles" onChange={onChange} disabled={!flipped} value={flipped ? amount : amount*0.6214}></input></p>
            <button onClick={onFlip}>flip</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default KmToMiles;