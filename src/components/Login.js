import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextField, Button, Container, AppBar } from "@mui/material";
import cookie from "cookie";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
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
      maxAge: 60 * 1,
    });
    navigate("/login");
  };

  return (
    <div className="App">
      <AppBar>
      <Container maxWidth="md">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
            variant="standard"
          />
          <br />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
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
      <p>Create an Account{" "}
        <Link to="/signup"> Signup</Link>
      </p>
      </Container>
      </AppBar>
    </div>
  );
};

export default Login;