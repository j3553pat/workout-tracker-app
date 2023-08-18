import React, { useState } from 'react'

 const BMIcalc = () => {


  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0)
  const heightNum = parseInt(height);
  const weightNum = parseInt(weight);

  
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "height") {
          setHeight(value);
        } else if (name === "weight") {
          setWeight(value);
        }
      };

      const calculateBMI = (e) => {
        e.preventDefault();
        console.log('first function bmi:', bmi)

        if (isNaN(heightNum) || isNaN(weightNum) || heightNum <= 0 || weightNum <= 0) {
          alert("Please enter valid height and weight values.");
          return;
        } else {
          let bmiCalc = (weightNum / (heightNum * heightNum)).toFixed(2)
          console.log('calculated bmi:', bmi)
          setBmi(bmiCalc)
          // return bmi
        }
      }


  return (
    <div>
        <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <div>
          <label htmlFor="height">Height (meters):</label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {
        bmi > 0 ? <div className='results'>{bmi}</div> : null
      }
      {/* <div className='results'>{bmi}</div> */}
    </div>
  )
}
export default BMIcalc

