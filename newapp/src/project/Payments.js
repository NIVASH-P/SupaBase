import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Alert, Link as MuiLink } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timer from './login/timer';
import  {useState,useEffect} from "react";
import axios from 'axios';
import { Authcontext } from './context';
import NavBar from './homepage/nav1';
import Navbar3 from './homepage/nav2';
// import SignUp from './reg';
import { useNavigate } from 'react-router-dom';
// import { Alert } from '@mui/material';
function SignInPayment() {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [showTextField, setShowTextField] = React.useState(false);
  const [showTimer, setShowTimer] = React.useState(false);
  const [hideContinueButton, setHideContinueButton] = React.useState(false);
  const [hideTimer, setHideTimer] = React.useState(false);
  const [showSubmitButton, setShowSubmitButton] = React.useState(false);
  const [mobileNumberError, setMobileNumberError] = React.useState('');
  const [timerExpired, setTimerExpired] = React.useState(false);
 const [OTP, setOTP] = React.useState('');

 const { setLoggedIn } = React.useContext(Authcontext);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!mobileNumber) {
      setMobileNumberError('Please enter the Mobile Number');
      return;
    }
    setMobileNumberError('');
    setShowTextField(true);
    setHideContinueButton(true);
    setShowSubmitButton(true);
    setShowTimer(true);
    setHideTimer(true);
  };
  const navigate = useNavigate()
  const handleTimerExpired = () => {
    setHideTimer(false);
    setTimerExpired(true);
  };
  
  const handleResendOtp = () => {
    setHideTimer(true);
    setTimerExpired(false);
  };
  
  const handleLogin = () => {
    // Perform login logic
    // For demonstration, set isLoggedIn to true
    <handleLogin />
    const user = Posts.find(
      (Post) =>
      Post.Number === mobileNumber && Post.Otp === OTP
      )
      if (user)
      {
        
        console.log("Login Successful")
      }
      else{
        console.log("Login unSuccessful")
        alert("Your Number is Not Registered")
        navigate('/Log');
        setHideTimer(true);
        
      }
  };
  const [Posts,setPosts]=useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.error('Error from axios : ' + error)
      })
  }, [])
  return (
    <div >
      
    <div  style={{
backgroundColor:"lightblue",
height:"790px",
width:"1530px"

       }} >
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs"
       style={{
        backgroundColor: "#fffb",
        backdropFilter: "blur(12px)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        marginTop:70
      }}
        
        sx={{
          p: 4,
          borderRadius: "20px",
        }}>
          <CssBaseline />
          <Box
            sx={{
              // marginTop: 3,
             
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            {/* <Router> */}
              <Typography component="h1" variant="h5">
                Payment Verification
              </Typography>
              {/* <Routes> */}
                {/* <Route exact path="" element={<Timer onTimerExpired={handleTimerExpired} />} /> */}
                {/* <Route exact path='/sign' element={}></Route> */}
              {/* </Routes> */}

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Mobile-number"
                  label="UPI-ID"
                  name="Mobile-Number"
                  autoComplete="Mobile-Number"
                  autoFocus
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  error={!!mobileNumberError}
                  helperText={mobileNumberError}
                />

                {/* Render the TextField conditionally based on the state */}
                {showTextField && (
                 <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="OTP"
                    label="Enter Your UPI Paassword"
                    name="OTP"
                    autoComplete="Enter Your OTP"
                    onChange={(e) => setOTP(e.target.value)}
                  />
                )}

                {/* Render the Continue button conditionally based on the state */}
                {!hideContinueButton && (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Get-OTP
                    <Link to="/otp" component={MuiLink} />
                  </Button>
                )}

                {/* Render the Submit button conditionally based on the state */}
                {showSubmitButton && (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleLogin}
                  >
                    Submit
                  </Button>
                )}
                {hideTimer && (
                  <div>
                    <Timer onTimerExpired={handleTimerExpired} />
                  </div>
                )}
                {timerExpired && (
                  <Grid container>
                    <Grid item xs>
                      <MuiLink component='button' href="#" variant="body2" onClick={handleResendOtp}>
                        Resend OTP
                      </MuiLink>
                    </Grid>
                  </Grid>
                )}
              </Box>
            
          </Box>
        </Container>
      </ThemeProvider>
    </div>
    </div>
  );
}

export default SignInPayment;