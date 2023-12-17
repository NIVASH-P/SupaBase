// Agri.js
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./agri.css";
import NavBar from '../homepage/nav1';
import Navbar3 from '../homepage/nav2';

export const Agri = () => {
  return (
    <div style={{backgroundColor:"lightblue" , height:"800px",width:"1530px"}}>
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
          marginTop:"90px"
        }}
        
        sx={{
          p: 4,
          borderRadius: "20px",
        }}>
    
      <h3>Purpose / Objective :</h3>
      <p>
        <ArrowForwardIcon /> For construction of new Agri Godowns or cold storages, market yards, silos / expansion of existing units / modernization of existing units, irrespective of their location.
      </p>
      <h3>Eligibility :</h3>
      <p>
        <ArrowForwardIcon />Individuals, Group of Individuals
      </p>
      <p>
        <ArrowForwardIcon />Association of  persons, Cooperatives, firms,  companies etc.,
      </p>
      <h3>Types Of Facility Available :

     </h3>
      <p>
        <ArrowForwardIcon /> Term loan
      </p>
      <p>
        <ArrowForwardIcon /> Cash Credit
      </p>
      <h3>Amount Of Loan :


     </h3>
      <p>
        <ArrowForwardIcon /> Term loan : Based on the Project Cost

      </p>
      <p>
        <ArrowForwardIcon /> Working Capital: Cash budget method to assess the WC irrespective of limits.
      </p>
      
    </div>
    </div>
  );
};