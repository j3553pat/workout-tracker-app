import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import './Login.css'
import cookie from "cookie";
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    first_name: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    let cookies = {};
    document.cookie = cookie.serialize("loggedIn", "true", {
      maxAge: 200 * 1,
    });
    navigate("/foodintake");
    console.log("Logged In")
  };

  return (
    <div className="App">
      {/* <Container maxWidth="lg"> */}
      <h1>Please Log in!</h1>
      <form className="login-form" onSubmit={login}>
        <TextField
          required
          onChange={handleTextChange}
          value={state.email}
          name="email"
          label="email"
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          required
          onChange={handleTextChange}
          value={state.first_name}
          name="first_name"
          label="first name:"
          type="text"
          variant="standard"
        />
        <br></br>
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
      <div className="create-acc">
        <h3>Want to create an Account? </h3>
        <button className="signup-btn">
          <Link to="/signup"> Signup</Link>
        </button>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Login;