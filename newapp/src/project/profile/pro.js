import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Orders from './statement';
import { Box, Container, Grid } from '@mui/material';
import MiniDrawer from './maindash';
import { useState,useEffect } from 'react';
import supabase from '../../SubaBase';
import { Authcontext } from '../context';


const UserProfile = () => {
  const {data} = useContext(Authcontext);
  const [FetchError,serFetchError]=useState(null);
  const[Smoothies,setSmoothies]=useState([]);
  
  useEffect(() => {
    const fetchSmooties = async () =>{
      let { data: Basic_Information, error } = await supabase
      .from('Basic_Information')
      .select('*')
      .eq('Email', data.user.email)
      console.log(data);
      if (error)
          {
            serFetchError('Could not fetch the data')
            console.log(error)
          }
          if(Basic_Information)
          {
            setSmoothies(Basic_Information);
            console.log(Basic_Information)
            serFetchError(null);
          }
      }
      fetchSmooties();
  } ,[])
  return (
    <div>
      <MiniDrawer />
    <section >
      <Container style={{
          color:'black'
        }}>
        <Box
          sx={{
            // marginT,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography sx={{ fontSize: 40, color: 'darkblue' }}>Account-Information</Typography>
          <br />
          {
            Smoothies.map((acc) =>(
              <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center',paddingLeft:'250px' }}>
            <Grid item xs={5}>
              <Typography variant='h6' >Name </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6' >:{acc.Name}</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Account Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:{acc.AccountNumber}</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Account-Type </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:{acc.AccountType}</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Mobile-Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:{acc.MobileNumber}</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Athar-Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:{acc.AtharNumber}</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>CIF Number </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:{acc.CIFNumber}</Typography>
            </Grid>
            <Grid item xs={5}>
          <Typography variant='h6'>Branch </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>:Ukkadam</Typography>
            </Grid>
          </Grid>
            ))
          }
          <hr />
        </Box>
      </Container>
    </section>
    </div>
  );
}

export default UserProfile;