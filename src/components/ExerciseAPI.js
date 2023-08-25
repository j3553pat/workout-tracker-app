import React,  { useState, useEffect }  from 'react'
import axios from 'axios'

function ExerciseAPI(props) {
  

  const [exercises, setExercises] = useState([])

  const options = {
    method: 'GET',
    url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
    params: {muscle: 'biceps'},
    headers: {
      'X-RapidAPI-Key': 'ee5a17c0e8msh3e890c40e1d0415p18139bjsnef5537eecd68',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };
  async function fetchData(){
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setExercises(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>Exercises</h1>
      <center>
      {exercises.map((exercise,index) => {
        return(
          <div
          style={{
            backgroundColor: "#35D841",
            padding: 2,
            borderRadius: 10,
            marginBlock: 10,
          }}
        >
          <p style={{ fontSize: 15, color: 'white' }}>{exercise.name}
          <br />
          <br /> {exercise.equipment}
          <br />
          <br /> {exercise.type}
          <br />
          <br /> {exercise.instructions}</p>
        </div>
        )
      })}</center>
      </div>
  )
}

export default ExerciseAPI