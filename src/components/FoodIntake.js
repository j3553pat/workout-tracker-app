import React from 'react'

function FoodIntake() {

  const [foodIntake, setFoodIntake] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Food Intake:', foodIntake);
    console.log('Date:', date);
  };

  return (
    <div className="App">
    <h1>Food Intake Tracker</h1>
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default FoodIntake