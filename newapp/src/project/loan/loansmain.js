// Loan.js
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import { Route, Router, Routes } from 'react-router-dom';
import { Agri } from './agri';
import NavBar from '../homepage/nav1';
import Navbar3 from '../homepage/nav2';
// import "./Loan.css";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '300px',
  height: '400px',
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: 'center',
  position: 'relative',
}));

const Image = styled('img')({
  display: 'block',
  margin: '0 auto', // Center the image horizontally
  maxWidth: '100%', // Make sure the image doesn't exceed the container width
});

const ReadMoreButton = styled(Button)({
  position: 'absolute',
  bottom: '16px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#2196F3',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1565C0',
  },
});

export default function Variants() {
  return (
    <div style={{backgroundColor:"lightblue", width:"1500px"}}>
      
      <NavBar/>
        <Navbar3/>
      <Grid container spacing={2} className='kol' style=
      {{paddingLeft:'130px',
      paddingTop:"50px",
      paddingBottom:"50px"
      }}>
        <Grid item xs={4}>
          <DemoPaper variant="elevation" className='jo'>
            <Image src="https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/policy/agri-food-policy-reform-in-uk-and-eu-may-raise-prices-farmers-warn/11991942-1-eng-GB/Agri-food-policy-reform-in-UK-and-EU-may-raise-prices-farmers-warn.jpg" alt="Image" />
            <h3>Agricultural Loans</h3>
            <p>Purpose / Objective: For construction of new Agri Godowns or cold storages, market yards, silos / expansion of existing…</p>
            <Link>
           < ReadMoreButton href='/agri' >Read More</ReadMoreButton>
           </Link>
          </DemoPaper>
        </Grid>
        <Grid item xs={4}>
        <DemoPaper variant="elevation" className='jo'>
            <Image src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Image" />
            <h3>Education Loans</h3>
            <p>Education loans are a type of financial aid available to help cover the costs of an academic program such as college, professional school, or career</p>
            {/* <Link href="/agri"> */}
              <ReadMoreButton href='/edu'> Read More</ReadMoreButton>
            {/* </Link> */}
          </DemoPaper>
        </Grid><br/>
        <Grid item xs={4}>
         <DemoPaper variant="elevation" className='jo'>
            <Image src="https://img.freepik.com/premium-photo/saving-money-invest-house-property-future_1418-2427.jpg" alt="Image" />
            <h3>IB Home Loans</h3>
            <p>Eligibility Individuals including Joint borrowers who have Availed the Home Loan from Indian Bank Satisfactorily serviced the Home Loan for…</p>
            {/* <Link href="/go"> */}
              <ReadMoreButton href='/home'>Read More</ReadMoreButton>
            {/* </Link> */}
          </DemoPaper>
        </Grid>
        <Grid item xs={4}>
          <DemoPaper variant="elevation" className='jo'>
            <Image src="https://www.dailyexcelsior.com/wp-content/uploads/2018/12/Personal-Loans.jpg" alt="Image" />
            <h3>Personal Loans</h3>
            <p>Personal Loan Available To Salaried And Business Owners With Low Interest Rates. 100% Paperless Process With CREDMUDRA. Get Instant Approval In Minutes.</p>
            <Link to="/another-component">
              <ReadMoreButton>Read More</ReadMoreButton>
            </Link>
          </DemoPaper>
        </Grid>
        <Grid item xs={4}>
          <DemoPaper variant="elevation" className='jo'>
            <Image src="https://www.designbolts.com/wp-content/uploads/2019/01/Business-Deal-Free-Stock-Photo-1.jpg" alt="Image" />
            <h3>Business Loans</h3>
            <p>Small business loans let eligible business owners borrow funds to cover company-related purchases and operating expenses. </p>
            <Link to="/another-component">
              <ReadMoreButton>Read More</ReadMoreButton>
            </Link>
          </DemoPaper>
        </Grid>
        <Grid item xs={4}>
          <DemoPaper variant="elevation" className='jo'>
            <Image src="https://www.jewelryshoppingguide.com/wp-content/uploads/2019/02/gold-plated-jewelry.jpg" alt="Image" />
            <h3>Gold Loans</h3>
            <p> Gold loan is a type of secured loan where gold jewelry or coins are kept as collateral against the loan amount. Banks and other financial institutions provide these loans</p>
            <Link to="/another-component">
              <ReadMoreButton>Read More</ReadMoreButton>
            </Link>
          </DemoPaper>
        </Grid>
       </Grid>
      
    </div>
  );
}