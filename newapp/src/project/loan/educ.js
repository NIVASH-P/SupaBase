//education.js
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./educ.css";
import NavBar from '../homepage/nav1';
import Navbar3 from '../homepage/nav2';

export const Edu = () => {
  return (
    <div style={{backgroundColor:"lightblue" , height:"1000px",width:"1550px"}}>
      <NavBar/>
      <Navbar3/>
    <div className='she' style={{
          backgroundColor: "#fffb",
          backdropFilter: "blur(12px)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height:"680px",
          width:"1150px",
          marginTop:"180px"
        }}
        
        sx={{
          p: 4,
          borderRadius: "20px",
        }}>
    {/* <h4>Our Education Loan Program is designed to support aspiring students in pursuing their higher education goals. We offer flexible and affordable loan options to ensure that finance is not a barrier to achieving academic dreams.
    </h4> */}
      <h3> Features and Benefits</h3>
      <p>
        <ArrowForwardIcon /> Enjoy attractive interest rates tailored for educational loans.
    Flexible Repayment Options: Choose from a variety of repayment plans to suit your financial capacity.
    Moratorium Period: Benefit from a moratorium period, allowing you to focus on your studies before starting the repayment.
    Loan Coverage: Our scheme covers tuition fees, accommodation, books, and other related expenses.
      </p>
      <h3>Eligibility Criteria</h3>
      <p>
        <ArrowForwardIcon /> Student Status: Available for Indian residents pursuing undergraduate, postgraduate, or professional courses in recognized institutions.
    Co-applicant: Parents, guardians, or spouses can act as co-applicants to support the loan application.
    Academic Performance: Satisfactory academic background and admission to recognized institutions.
      </p>
      <p>
        <ArrowForwardIcon />Association of  persons, Cooperatives, firms,  companies etc.,
      </p>
      <h3> Documentation Required:

     </h3>
      <p>
        <ArrowForwardIcon /> Proof of Identity: Aadhar Card, Passport, or any other government-issued ID.
    Proof of Residence: Recent utility bills, rental agreement, or any valid address proof.
    Admission Letter: A copy of the admission letter from the educational institution.
    Income Proof: Salary slips, IT returns, or other income-related documents of co-applicant.
      </p>
      <p>
        <ArrowForwardIcon /> Cash Credit
      </p>
      <h3>Application Process


     </h3>
      <p>
        <ArrowForwardIcon />  Online Application: Easily apply through our user-friendly online application process.
    Document Submission: Upload the necessary documents securely via the online portal.
    Verification: Our team will promptly review your application and documentation.
    Loan Approval: Once approved, you will receive the loan offer and repayment details.
    Heading: Repayment Options

      </p>
      <p>
        <ArrowForwardIcon /> EMI Options: Choose from various Equated Monthly Installment (EMI) options.
    Grace Period: A grace period is provided before the repayment begins.
    Online Repayment: Conveniently make repayments through our secure online platform.
      </p>
      
    </div>
    </div>
    
  );
};