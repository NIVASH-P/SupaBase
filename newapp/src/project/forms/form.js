import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavBar from '../homepage/nav1';
import Navbar3 from '../homepage/nav2';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Account-Opening-Forms',
    buttonText1: 'Savings Account',
    buttonText2: 'Student Account',
    buttonText3: 'Primary Account',
    buttonVariant: 'Text',
    image_url: 'https://media.istockphoto.com/id/1411837217/photo/businessman-using-smartphone-and-fingerprint-scanning-unlock-and-online-banking-and-icon-on.jpg?s=2048x2048&w=is&k=20&c=zRR3Mxl-9YVPE2y3z6pPydAZveECEM3dJF2rmmm7Nx8='
  },
{
    title: 'Loan-Applying-Forms',
    buttonText1: 'Agri Loan Forms',
    buttonText2: 'Education Loans',
    buttonText3: 'Gold/Jewel Loan',
    buttonVariant: 'Text',
    image_url: 'https://media.istockphoto.com/id/1012049010/photo/survey-form-customer-satisfaction-feedback-poll-resume-for-job-application-or-for-college-man.jpg?s=2048x2048&w=is&k=20&c=0gYvUSitsoIT5TYcZcffrk2JF-UbWEo2g2fTPwZMQx4='
},
{
    title: 'Customer-Service Forms',
    buttonText1: 'ATM Apply Forms',
    buttonText2: 'ATM Block Forms',
    buttonText3: 'Athar Link Forms',
    buttonVariant: 'Text',
    image_url: 'https://cdn.pixabay.com/photo/2018/03/07/08/12/books-3205452_1280.jpg'
  },
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <div style={{
    backgroundColor:"lightblue",
    height:"780px",
    width:"1500px"
    }}>
      <NavBar/>
        <Navbar3/>
    <ThemeProvider theme={defaultTheme}>
        <br />
        <br />
        <br />
      <GlobalStyles styles={{ ul: {listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}

                />
                <CardMedia component={'img'} image={tier.image_url} width={250} height={300}/>
                <CardContent sx={{padding:0}}>
                    <br />
                    <br />
                 
                  
                  <Button fullWidth variant={tier.buttonVariant} sx={{transition: 'transform 1s','&:hover': {backgroundColor:'darkblue',color:'white', transform:'scale(1.06)'}, }}>
                    {tier.buttonText1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardIcon />
                  </Button>
                  <Button fullWidth variant={tier.buttonVariant} sx={{transition: 'transform 1s','&:hover': {backgroundColor:'darkblue',color:'white', transform:'scale(1.06)'}, }}>
                    {tier.buttonText2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ArrowForwardIcon />
                  </Button>
                  <Button fullWidth variant={tier.buttonVariant} sx={{transition: 'transform 1s','&:hover': {backgroundColor:'darkblue',color:'white', transform:'scale(1.06)'}, }}>
                    {tier.buttonText3}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ArrowForwardIcon />
                  </Button>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
    </div>
  );
}