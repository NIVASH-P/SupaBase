import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard2() {
  return (
    <Card sx={{ maxWidth:300, borderRadius: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.iifl.com/files/iifl_insights/images/Best-Digi-GL-160622-750X400.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Business
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Some accounts were also scored using deposit and transaction limits and business features. Business bank accounts with lower and fewer fees
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}