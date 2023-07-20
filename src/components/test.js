import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Test() { 
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
       await axios.get('http://localhost:4000/users/list')
        .then(response => {
            console.log(response)
            setUsers(response.data)
        })
    } 

    useEffect(() => {
        fetchUsers()
    }, [])
  return (
    <div>test</div>
  )
}

export default Test