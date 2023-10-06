import './Bmi_II.css';
import React,{ useState, useRef } from 'react';

 const Bmi = (props)=>{
     const [height, setHeight] = useState();
     const [weight, setWeight] = useState();
     const [bmi, setBmi] = useState();
     const bmiCategory = document.querySelector(".bmi-category");


     const inputHeightRef = useRef();
     const inputWeightRef = useRef();

     const calculateBmi = ()=>{
         const hight = height/100;
         setBmi(weight/Math.pow(hight,2));
         
    };


     const getBmiCategory = (bmi) => {
        if (bmi < 18.5 && bmi != 0) {
          return 'น้ำหนักต่ำกว่าเกณฑ์';
        } else if (bmi < 25 && bmi != 0) {
          return 'ปกติ';
        } else if (bmi < 30 && bmi != 0) {
          return 'โรคอ้วนระดับที่ 1';
        } else if(bmi > 30 && bmi != 0){
          return 'โรคอ้วนระดับที่ 2';
        }else if(bmi = 0){
          return '  ';
        }
        
      };
    
    
     const Reset=()=>{
        setHeight('')
        setWeight('')
        setBmi('')
    }
     

     return (
        <div>
          <h1>BMI Calculator</h1>
          <input
            type="text"
            ref={inputHeightRef}
            value={height}
            placeholder="ความสูง (ซม.)"
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="text"
            ref={inputWeightRef}
            value={weight}
            placeholder="น้ำหนัก (กิโลกรัม)"
            onChange={(e) => setWeight(e.target.value)}
          />
          <br></br>
          <button onClick={calculateBmi}>คำนวณ BMI</button>
          <p>BMI: {bmi}</p>
          <p>BMI Category: {getBmiCategory(bmi)}</p>
          <button onClick={()=>Reset()}>Reset</button>
         
        </div>
      );

    };
    
export default Bmi;