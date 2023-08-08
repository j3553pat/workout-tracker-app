import React, { useState } from 'react';

const ExerciseEntry = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);

  const handleExerciseNameChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(Number(e.target.value));
  };

  const handleRepsChange = (e) => {
    setReps(Number(e.target.value));
  };

  const handleSetsChange = (e) => {
    setSets(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExerciseName('');
    console.log('Exercise Name:', exerciseName);
    setMinutes(0);
    console.log('Minutes:', minutes);
    setReps(0);
    console.log('Reps:', reps);
    setSets(0);
    console.log('Sets:', sets);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercise Name:
        <input type="text" value={exerciseName} onChange={handleExerciseNameChange} />
      </label>
      <label>
        Minutes:
        <input type="number" value={minutes} onChange={handleMinutesChange} />
      </label>
      <label>
        Reps:
        <input type="number" value={reps} onChange={handleRepsChange} />
      </label>
      <label>
        Sets:
        <input type="number" value={sets} onChange={handleSetsChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExerciseEntry;