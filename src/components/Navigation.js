import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import cookie from "cookie"
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
    const navigate = useNavigate();

    return (
      <AppBar position="relative">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            My Workout Tracker! 
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/about">BMI</Link>
            </li>
            <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
                navigate("/login");
              }}
            >
              Logout
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
}

export default Navigation