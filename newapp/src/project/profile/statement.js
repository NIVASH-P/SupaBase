import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container,Box } from '@mui/material';
import MiniDrawer from './maindash';
import { useState,useEffect,useContext } from 'react';
import supabase from '../../SubaBase';
import { Authcontext } from '../context';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const {data} = useContext(Authcontext);
  const [FetchError,serFetchError]=useState(null);
  const[Smoothies,setSmoothies]=useState([]);
  useEffect(() => {
    const fetchSmooties = async () =>{
      let { data: Statements, error } = await supabase
      .from('Statements')
      .select('*')
      .eq('email', data.user.email)
      console.log(Statements);
      if (error)
          {
            serFetchError('Could not fetch the data')
            console.log(error)
          }
          if(Statements)
          {
            setSmoothies(Statements);
            console.log(Statements)
            serFetchError(null);
          }
      }
      fetchSmooties();
  } ,[])
  return (
    <div>
        <MiniDrawer/>
          <section style={{ backgroundColor: 'white' }}>
            <Container style={{
                backgroundColor: "#fffb",
                backdropFilter: "blur(12px)",
                position: "absolute",
                top: "70%",
                left: "53%",
                transform: "translate(-50%,-50%)",
                borderColor:'black',
                // marginTop:"120px"
              }}>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
              <h1>Statements</h1>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Credits</TableCell>
                  <TableCell>Debits</TableCell>
                  <TableCell >TotalBalance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Smoothies.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell>{row.Credits}</TableCell>
                    <TableCell>{row.Debits}</TableCell>
                    <TableCell >Rs.{row.TotalBalance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
              See more orders
            </Link>
              </Box>
            </Container>
          </section>
    </div>
  );
}