import React, { useState } from "react";
import './CalorieIntake.css'

const CalorieIntake = (props) => {
  console.log(props)
  const [calorieBurned, setCalorieBurned] = useState("");
  const [calorieGained, setCalorieGained] = useState("");
  const [calorieTDEE, setCalorieTDEE] = useState("");
  const [toggle, setToggle] = useState(false)
console.log(toggle)

  return (
    <div className="App">
      <h1>Calorie Intake Tracker</h1>
      <form>
        <div className="calories">
          <label>Calorie Burned:</label>
          <input
            type="number"
            value={calorieBurned}
            onChange={(e) => setCalorieBurned(e.target.value)}
          />
        </div>
        <div className="calories">
          <label>Calorie TDEE:</label>
          <input
            type="number"
            value={calorieTDEE}
            onChange={(e) => setCalorieTDEE(e.target.value)}
          />
        </div>
        <div className="calories">
          <label>Calories Gained:</label>
          <input
            type="number"
            value={calorieGained}
            onChange={(e) => setCalorieGained(e.target.value)}
          />
        </div>
        <button className= "log-button" type="button" onClick={(e) => {e.preventDefault(); setToggle(true);} }>Add Entry</button>
      </form>
      <div className="Log">
        <h2>Log</h2>
        {
          toggle && 
          <ul>
          <li>
            Calories Burned: {calorieBurned}
          </li> 
          <li>
            Calories Gained: {calorieGained}
          </li>
          <li>
            Daily Expenditure: {calorieTDEE}
          </li>
         </ul>
        }

      </div>
    </div>
  );
};

export default CalorieIntake;
