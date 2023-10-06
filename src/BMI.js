
import React,{useState} from 'react';

const Bmi = (props) => {
    const [height,setHeight] = useState()
    const [weight,setWeight] = useState()
    const OnHeightChange = (event) =>{
        setHeight(event.target.value)
    }
    const OnWeightChange = (event) =>{
        setWeight(event.target.value)
    }
    const CalBMI=()=>{
        let high = height/100;
        return weight/Math.pow(high,2);
    }
    const Reset=()=>{
        setHeight('')
        setWeight('')
    }
    return(
        <div>
            <input 
                type="text"
                value={height}
                placeholder='type heigh!'
                onChange={(event)=>OnHeightChange(event)}
            />
            <input 
                type="text"
                value={weight}
                placeholder='type weight!'
                onChange={(event)=>OnWeightChange(event)}
            />
            <button onClick={()=>Reset()}>Reset</button>
            <p>BMI: {CalBMI()}</p>
        </div>
    )
}
export default Bmi;