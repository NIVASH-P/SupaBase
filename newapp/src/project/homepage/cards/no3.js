import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1353940146/photo/bonus-card-in-envelope-with-red-ribbon-and-piggy-bank.jpg?s=612x612&w=0&k=20&c=RbsCATycDqvp2angTU3oo58NBGF0_Hal11uKpsMKDlg="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bonus
          </Typography>
          <Typography variant="body2" color="text.secondary">
          In anticipation of the upcoming festival of lights, the Piggy Bank, the largest public sector lender in the country, has declared a bonus of Rs 2,500 for each of its employees
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}