// home.js
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./home.css";
import Navbar3 from '../homepage/nav2';
import NavBar from '../homepage/nav1';

export const Homeloan = () => {
  return (
    <div style={{backgroundColor:"lightblue" , height:"800px" , width:"1520px"}}>
     <NavBar/>
      <Navbar3/>
    <div className='she' style={{
          backgroundColor: "#fffb",
          backdropFilter: "blur(12px)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height:"500px",
          width:"1150px",
          marginTop:"80px"
        }}
        
        sx={{
          p: 4,
          borderRadius: "20px",
        }}>
    
      <h3>Flexible Financing Options:</h3>
      <p>
        <ArrowForwardIcon />  Tailor your dream home financing with our flexible options, accommodating various budget constraints and financial goals.
      </p>
      <h3>Competitive Interest Rates:</h3>
      <p>
        <ArrowForwardIcon /> Enjoy the advantage of competitive interest rates, ensuring affordability and cost-effectiveness over the life of your home loan.
      </p>
      <p>
        <ArrowForwardIcon />Association of  persons, Cooperatives, firms,  companies etc.,
      </p>
      <h3>Quick and Easy Approval Process:

     </h3>
      <p>
        <ArrowForwardIcon />Our streamlined approval process ensures a hassle-free experience, getting you one step closer to your dream home in no time.
      </p>

      <h3>Customizable Loan Terms:


     </h3>
      <p>
        <ArrowForwardIcon /> Choose from a range of loan terms that suit your financial strategy, providing the flexibility to manage repayments comfortably.

      </p>
      <p>
        <ArrowForwardIcon /> Working Capital: Cash budget method to assess the WC irrespective of limits.
      </p>
      
    </div>
  </div>
)};