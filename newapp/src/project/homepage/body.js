import React from "react";
import { Button } from "@mui/material";
import SlideWithCards from "./cards/no1";
import Slideeee from "./slide";
import ActionAreaCard1 from './cards/no1';
import ActionAreaCard2 from './cards/n02';
import ActionAreaCard3 from './cards/no3';
import ActionAreaCard4 from './cards/no4';
import Footer from "./footer";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavBar from "./nav1";
import Navbar3 from "./nav2";
import home from "./asserts/Bank2.jpg"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
export default function Body()
{
    return(
        <div style={{
          backgroundImage:`url('${home}')` ,
          width:"1515px",
          
        }}>
          <NavBar/>
        <Navbar3/>
        <div style={{
           width:"1330px",
           height:"620px"
            
             }}>
                <div class="login_bar" style={{
            color:"blue",
            fontWeight:"bold",
            paddingLeft:"145px",
            // paddingRight:"164px "
          }}>
         
         <marquee>Do not share your bank account login ID, password, PIN or OTP with anyone, not even with bank officials.  Do not respond to offers for getting KYC updated/expedited. Always access the official website of bank/NBFC/e-wallet provider or contact the branch. Always access the official website of Bank for contact details.  Contact numbers on internet search engines may be fraudulent.Do not download any unknown app on your phone/device. The app may access your confidential data secretly.  Transactions involving receipt of money do not require scanning barcodes/QR codes or entering MPIN.  If you receive an OTP for debiting your account for a transaction not initiated by you, inform your bank immediately.</marquee>
         </div>
           <div style={{
            color:"white",
            fontFamily:"unset",
            paddingLeft:"140px",
            paddingTop:"55px"
           }}>
              <h1 style={{color:"darkblue"}}><b>A bank is a place that will<br/> lend you money if you can prove<br/> that you don't need it.</b> </h1><br/>
              <p>If you owe the bank $100 that's your problem. If you owe the<br/> bank $100 million, that's the bank's problem.<br/>- Paul Getty</p><br/>

              <Button variant="contained">Contact our experts</Button>


           </div>
            {/* <footer> */}
              <p style={{
                color:"white",
                paddingLeft:"140px",
                paddingRight:"100px",
                paddingTop:"60px"
              }}> Banking holds a crucial role in our day-to-day life. We must adhere to the banking system as responsible citizens. The banking system acts as a crucial base for the financial system as well as the entire economic system of the country. </p>
            {/* </footer> */}
            
        </div>
        <div style={{
    //         backgroundImage: "url('https://www.nirvanacanada.com/businessonline/wp-content/uploads/2021/05/Boost-Website-Traffic.jpg')" ,
    //         backgroundSize:" cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // width:"1246px",
    height:"600px",
    backgroundColor:"lightblue"
     }}>
           <div >
              <ul style={{
                display:"flex",
                paddingTop:"80px",
                justifyContent:"space-between",
                listStyleType:"none"
              }}>
                <li style={{
                   paddingLeft:"25px"
                }}><ActionAreaCard1/></li>
                <li ><ActionAreaCard4/></li>
                <li style={{
                    paddingRight:"60px"
                }}> <ActionAreaCard3/></li>
                
              </ul>
             
              
           </div>
           <footer 
           style={{
            justifyContent:"flex-end",
            marginTop:"57px",
            backgroundColor:"#3333"
           }}>
          

    <MDBFooter className='text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <GoogleIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <TwitterIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FacebookIcon/>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <InstagramIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <LinkedInIcon />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <GitHubIcon/>
          </MDBBtn>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        @further Reference : 
        <a className='text-white' href='#'>
        parthi'sbanking.com
        </a>
      </div>
      
    </MDBFooter>
  
           </footer>
           </div>
        </div>
    )
}