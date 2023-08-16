import React, { useState } from "react";

const CalorieIntake = (props) => {
  console.log(props)
  const [calorieBurned, setCalorieBurned] = useState("");
  const [calorieGained, setCalorieGained] = useState("");
  const [calorieTDEE, setCalorieTDEE] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="App">
      <h1>Calorie Intake Tracker</h1>
      <form>
        <div>
          <label>Calorie Burned:</label>
          <input
            type="number"
            value={calorieBurned}
            onChange={(e) => setCalorieBurned(e.target.value)}
          />
        </div>
        <div>
          <label>calorie TDEE:</label>
          <input
            type="number"
            value={calorieTDEE}
            onChange={(e) => setCalorieTDEE(e.target.value)}
          />
        </div>
        <div>
          <label>calories Gained:</label>
          <input
            type="number"
            value={calorieGained}
            onChange={(e) => setCalorieGained(e.target.value)}
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>
      <div>
        <h2>net calories</h2>
        {/* <ul> */}
        {/* {calorielist.map((entry, index) => (
          <li key={index}>
           Calories: {entry.calorieIntake}
          </li>
        ))} */}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default CalorieIntake;
