import { Link } from "react-router-dom";
import React from "react";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Icon} from '@mui/material';
import {Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Pricing from '../forms/form';
import Body from './body';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import {Box} from '@mui/material';
// import { colors } from "@mui/material";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-transparent  " 
      style={{
        // backgroundColor:"red",
        justifyContent:"flex-end",
        paddingRight:"150px",
        
    }}>
         <ul className="navbar-nav navbar-right" style={{paddingRight:"20px"}}>
        
          <li className="nav-items"><Link to="/ser">
            <Button style={{color:"darkblue"}}>
             <b>
              Product & service</b>
            </Button></Link>
          </li>
          <li className="nav-items">
            <Button style={{color:"darkblue"}}><b>Online Banking</b></Button>
          </li>
          
          <li className="nav-items" >
            <Button style={{color:"darkblue"}} onClick={handleClickOpen}><b>contact us</b></Button>
          </li>
        </ul>
        
      
      </nav>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            borderRadius: 20, // Adjust the value as needed for the desired curve
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"I can help you...!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All branches of Piggy Bank are Internet Banking enabled. If you already have an account with us, ask your branch to give you Internet Banking, and if there is a problem, please contact our experts...<br/><br/><br/>
          </DialogContentText>
          <div>
            <ul style={{
              display: "flex",
              justifyContent: "space-between",
              listStyleType: "none",
              // paddingBottom:"5px"
            }}>
              <li> <p><b>Phone : <br/>4509-7894-3419 </b></p></li>
              <li> <p><b>Cell : <br/>6374044907</b></p></li>
              <li><p><b>Email : <br/>piggybank567@gmail.com</b></p></li>  
            </ul>
          </div> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
