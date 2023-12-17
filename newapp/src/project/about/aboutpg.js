import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import Typography from '@mui/material/Typography';
import "./about.css";
import NavBar from '../homepage/nav1';
import Navbar3 from '../homepage/nav2';
export default function CustomizedTimeline() {
  return (
    <div style={{  backgroundColor:"lightblue",  height:"790px",  width:"1518px"}} >
      <NavBar/>
        <Navbar3/>
    <Timeline position="alternate" style={{
          backgroundColor: "#fffb",
          backdropFilter: "blur(12px)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height:"550px",
          width:"1150px",
          marginTop:"90px"
        }}
        
        sx={{
          p: 4,
          borderRadius: "20px",
        }}>
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          1907
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AccountBalanceSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color:"black"}}>
            Incorporated
          </Typography>
          <Typography style={{color:"black"}}> Bank was incorporated on March 5, 1907 with an Authorized Capital of Rs 20 lakhs and commenced its business on August 15, 1907.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          1921
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <AccountBalanceSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color:"black"}}>
            growth
          </Typography>
          <Typography style={{color:"black"}}>Bank’s capital was raised to Rs 60 lakhs from Rs 20 lakhs.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
         1932
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <AccountBalanceSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color:"black"}}>
            Silver jubilee
          </Typography>
          <Typography style={{color:"black"}}>Bank celebrated its Silver Jubilee.Bank opened its first overseas operations in Colombo.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          1941
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <AccountBalanceSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span"  style={{color:"black"}}>
            Global growth
          </Typography>
          <Typography style={{color:"black"}}>Singapore branch was opened.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          1957
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <AccountBalanceSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color:"black"}}>
            Golden jubilee
          </Typography>
          <Typography style={{color:"black"}}>Bank celebrated its Golden Jubilee.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          1967
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <AccountBalanceSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color:"black"}}>
            Diamond Jubilee
          </Typography>
          <Typography style={{color:"black"}}>Bank celebrated its Diamond Jubilee.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}