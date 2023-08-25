import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const ExerciseEntry = (props) => {
  console.log(props)
  const [exerciseName, setExerciseName] = useState('');
  const [minutes, setMinutes] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [toggle, setToggle] = useState(false)

  return (
  <div>
    <center>
    <Link to="/exerciseapi">Don't know any exercises? Here is this Link to help you out!</Link>
    <form>
      <label>
        Exercise Name:
        <input type="text" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
      </label>
      <br />
      <label>
        Minutes:
        <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
      </label>
      <br />
      <label>
        Reps:
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
      </label>
      <br />
      <label>
        Sets:
        <input type="number" value={sets} onChange={(e) => setSets(e.target.value)}/>
      </label>
      <button type="button"
          onClick={(e) => {
            e.preventDefault();
            setToggle(true);
          }}>Submit</button>
    </form>
    <div className='log'>
    <h2>Log</h2>
    {
      toggle && 
      <ul>
        <li>
          Exercise Name: {exerciseName}
        </li>
        <li>
          Minutes: {minutes}
        </li>
        <li>
          Reps: {reps}
        </li>
        <li>
          Sets: {sets}
        </li>
      </ul>
    }
    </div>
    </center>
    </div>
  );
};

export default ExerciseEntry;