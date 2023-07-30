import React from 'react'

function CalorieIntake() {

  const [calorieIntake, setCalorieIntake] = useState('');



  return (
    <div className="App">
    <h1>Calorie Intake Tracker</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Calorie Intake:</label>
        <input
          type="number"
          value={calorieIntake}
          onChange={(e) => setCalorieIntake(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
    <div>
      <h2>Calories Intake List</h2>
      <ul>
        {caloriesList.map((entry, index) => (
          <li key={index}>
            Date: {entry.date}, Calories: {entry.calorieIntake}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default CalorieIntake