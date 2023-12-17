import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

export default function Card2() {
  return (
    <Card
      sx={{
        width: 300,
        height: 220,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        transition: 'transform 0.3s', // Add transition for smooth color change
        '&:hover': {
          color: '#2196f3', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',// Blue color on hover
          transform: 'scale(1.12)'
        },
      }}
    >
      <CardActionArea>
        <CardContent style={{ justifyContent: 'center' }}>
          <CreditCardOutlinedIcon
            sx={{
              fontSize: '15vh',
              marginLeft: '15vh',
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginLeft: '5vh',
              fontSize: '3vh',
            }}
          ><b>
            Cridet Card(VISA) Bill Pay</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
