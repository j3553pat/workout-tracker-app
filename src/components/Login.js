import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextField, Button, Container, AppBar } from "@mui/material";
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
      <AppBar>
      <Container maxWidth="md">
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
      <Button vairant="contained" color="secondary"> Create an Account{" "}
        <Link to="/signup"> Signup</Link>
      </Button>
      </Container>
      </AppBar>
    </div>
  );
};

export default Login;