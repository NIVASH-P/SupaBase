import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';

export default function Card1() {
  return (
    <Card
      sx={{
        width: 300,
        height: 220,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        transition: 'transform 0.3s',
        '&:hover': {
          backgroundColor: 'white', // Change background color to white on hover
          color: '#2196f3',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transform: 'scale(1.12)'
        },
      }}
    >
      <CardActionArea>
        <CardContent style={{ justifyContent: 'center' }}>
          <AirplaneTicketOutlinedIcon
            sx={{
              fontSize: '15vh',
              marginLeft: '15vh',
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginLeft: '16vh',
              fontSize: '3vh',
            }}
          >
            <b>E-Tickets</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
