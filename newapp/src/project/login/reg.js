import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavBar from '../homepage/nav1';
import Navbar3 from '../homepage/nav2';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const[FirstName,setFirstName]=React.useState(' ');
  const[LastName,setLastName]=React.useState(' ');
  const[MobileNumber,setMobileNumber]=React.useState(' ');
  const[Email,setEmail]=React.useState(' ');
  const[Password,setPassword]=React.useState(' ');
  const[RePassword,setRePassword]=React.useState(' ');
  const[PostResponse,setPostResponse]=React.useState(null);
  const HandleSubmit = async (event) => {
    event.preventDefault();
    // console.log(details);
    const PostUsers = {
      firstName: FirstName,
      lastName: LastName,
      mobileNumber: MobileNumber,
      email: Email,
      password: Password,
      rePassword: RePassword,
    };
    console.log(PostUsers)
    // React.useEffect(()=>{
      axios.post('http://localhost:3001/Users',PostUsers)
      .then(response=>{
        setPostResponse(response.data);
      })
      .catch(error=>{
        console.log('PostError',error);
      })
      // },[])
  }

  return (
    <div style={{

      backgroundColor:"lightblue",
      height:"1100px",
      width:"1515px"
      
      }}>
        <NavBar/>
        <Navbar3/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{
          marginTop:"260px",
        backgroundColor: "#fffb",
        backdropFilter: "blur(12px)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        
      }}
        
        sx={{
          p: 4,
          borderRadius: "20px",
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            REGISTRATION
          </Typography>
          <Box component="form" onSubmit={HandleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Mobile-Number"
                  name="Mobile-Number"
                  value={MobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  autoComplete="Mobile-Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirm-password"
                  label="Confirm-Password"
                  type="Confirm-password"
                  id="Confirm-password"
                  value={RePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  autoComplete="Confirm-new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept this"
                />
                {/* <a href='#'>terms and Conditions</a> */}
              </Grid>
            </Grid>
            {/* <h6 style={align:{center}}>Signin with</h6> */}
            <Button variant="Outlined" startIcon={<GoogleIcon />}>Google</Button>
            <Button variant="Outlined" startIcon={<FacebookIcon />}>FaceBook</Button>
            <Button variant="Outlined" startIcon={<LinkedInIcon />}>LinkedIn</Button>
            <Link to="/log">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            > Sign Up
            </Button></Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                    <Link to='/Log'>
                    Already have an account? Sign in
                    </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}