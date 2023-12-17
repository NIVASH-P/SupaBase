import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';

export default function Card5() {
  return (
    <Card
      sx={{
        width: 300,
        height: 220,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s', // Add transition for smooth color change and box shadow
        '&:hover': {
          color: '#2196f3', // Blue color on hover
          transform: 'scale(1.12)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow on hover
        },
      }}
    >
      <CardActionArea>
        <CardContent style={{ justifyContent: 'center' }}>
          <OnlinePredictionOutlinedIcon 
            sx={{
              fontSize: '15vh',
              marginLeft: '15vh',
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginLeft: '08vh',
              fontSize: '3vh',
            }}
          ><b>
            Mobile/DTH Recharge</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
