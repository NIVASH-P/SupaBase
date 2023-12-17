import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
export default function Card3() {
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
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Blue color on hover
          transform: 'scale(1.12)'
        },
      }}
    >
      <CardActionArea>
        <CardContent style={{ justifyContent: 'center' }}>
          <CurrencyRupeeOutlinedIcon
            sx={{
              fontSize: '15vh',
              marginLeft: '15vh',
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginLeft: '7vh',
              fontSize: '3vh',
            }}
          ><b>
            Online fees Collection</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
