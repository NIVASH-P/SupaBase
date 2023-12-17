import { Avatar, Button } from '@mui/material';
import React, { useContext } from 'react';
import SavingsIcon from '@mui/icons-material/Savings';
import {Link as muiLink }from '@mui/material/Link';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Authcontext } from '../context';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import MiniDrawer from '../profile/maindash';

function Navbar3() {

  const { loggedIn } =useContext(Authcontext)

  const navigate=useNavigate();
  return (
   
      <div style={{ marginLeft: "140px" }}>
        <nav
          className="navbar navbar-expand-lg shadow "
          style={{
            backgroundColor: "white",
            justifyContent: "flex-end",
            paddingRight: "50px",
            height: "65px",
            width: "1200px",
            borderRadius: "15px", // Add this line to make the border curved
          }}
        >
          <ul className="navbar-nav navbar-right">
            <li
              className="nav-items"
              style={{
                paddingRight: "450px",
                paddingTop: "6px",
                color:"black"
              }}
            >
              <SavingsIcon />  <b>PIGGY BANK</b>
            </li>
            <li className="nav-items">
              <Link to="/">
                <Button><b>Home</b></Button>
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
            <li className="nav-items">
              <Link to="/loan">
                <Button><b>finance & Loans</b></Button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
            <li className="nav-items">
              <Link to="/about">
                <Button><b>About</b></Button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
            <li className="nav-items">
              <Link to="/form">
                <Button><b>Form</b></Button>
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
            <li className="nav-items">
              {
                loggedIn ? 
                <Link to="/profile">
                  <Avatar  style={{backgroundColor:"darkblue"}}  >
                   <PersonIcon  />
                  </Avatar>
                  </Link>
                :
                  <Link to="/log">
                    <Button variant="contained">Login</Button>
                  </Link>
              }
            </li>
          </ul>
        </nav>
      </div>

     
  );
}

export default Navbar3;
