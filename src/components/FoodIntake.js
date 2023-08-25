import React, { useState } from "react";

function FoodIntake(props) {
  console.log(props);
  const [foodIntake, setFoodIntake] = useState("");
  const [date, setDate] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <h1>Food Intake Tracker</h1>
      <center>
      <form>
        <div>
          <label>Food Intake Entry:</label>
          <input
            type="text"
            value={foodIntake}
            onChange={(e) => setFoodIntake(e.target.value)}
          />
        </div>
        <div>
          <label>Date Entry:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setToggle(true);
          }}
        >
          Submit
        </button>
      </form>
      <div className="Log">
        <h2>Log</h2>
        {toggle && 
        <ul>
          <li>
            Food Intake: {foodIntake}
          </li>
          <li>
            Date: {date}
          </li>
        </ul>}
      </div>
      </center>
    </div>
  );
}

export default FoodIntake;
