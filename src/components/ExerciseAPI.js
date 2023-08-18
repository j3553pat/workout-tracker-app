import React,  { useState, useEffect }  from 'react'
// const axios = require('axios');
import axios from 'axios'



  

function ExerciseAPI() {

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
    <div>{exercises}</div>
  )
}

export default ExerciseAPI