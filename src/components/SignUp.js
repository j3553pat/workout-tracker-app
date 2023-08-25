import React, { useState } from "react";
import axios from "axios";
import { Button } from '@mui/material'

const SignUp = ({ setSignedUp }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
     WT: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://main--joyful-cactus-17299f.netlify.app//auth/signup", formData).then(() => {
      setSignedUp(true);
      console.log("it works!")
    });
  };

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First name:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Last name:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="WT">WT:</label>
          <input
            type="number"
            name="WT"
            value={formData.WT}
            onChange={handleChange}
            required
          />
        </div>
        <Button variant="contained" color="success" type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
