import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export default function Card6() {
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
          color: '#2196f3', // Blue color on hover
          transform: 'scale(1.12)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardActionArea>
        <CardContent style={{ justifyContent: 'center' }}>
          <AccountBalanceWalletOutlinedIcon
            sx={{
              fontSize: '15vh',
              marginLeft: '15vh',
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginLeft: '10vh',
              fontSize: '3vh',
            }}
          ><b>
            Balance Enquiry</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
