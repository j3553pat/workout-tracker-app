import React, { useState } from 'react'
import axios from 'axios'

export const BMIcalc = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

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
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);
        if (isNaN(heightNum) || isNaN(weightNum) || heightNum <= 0 || weightNum <= 0) {
          alert("Please enter valid height and weight values.");
          return;
        }
      }

      const bmi = (weightNum / (heightNum * heightNum)).toFixed(2)

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
    </div>
  )
}

// const options = {
//   method: 'GET',
//   url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial',
//   params: {
//     weight: '210',
//     height: '71'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'ee5a17c0e8msh3e890c40e1d0415p18139bjsnef5537eecd68',
//     'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
//   }
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);