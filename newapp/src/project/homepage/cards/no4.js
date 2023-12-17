import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard4() {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/beyond-banking/what-is-the-impact-of-it-on-the-banking-sector-717x404.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Digital Banking
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Digital banking is part of the broader context for the move to online banking, where banking services are delivered over the internet. The shift from traditional to digital banking has been gradual.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
