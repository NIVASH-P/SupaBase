import { Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MiniDrawer from "./maindash";
import { Link } from "react-router-dom";

export default function AmountTransfer()
{
    return(
        <div>
            <MiniDrawer/>
        <Container component="main" maxWidth="xs"style={{
            backgroundColor: "#fffb",
            backdropFilter: "blur(12px)",
            position: "absolute",
            top: "85%",
            left: "52%",
            transform: "translate(-50%,-50%)",
            // marginTop:"140px"
          }}>
            <Box sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
                <CssBaseline />
                <h2>BANK TRANSFER</h2>
                <br />
                <br />
                <TextField id="outlined-basic" label="Enter Account Number" variant="outlined" fullWidth />
                <br />
                <h4 >Transfer Account Details</h4>
                <TextField id="outlined-basic" label="Enter Account Number" variant="outlined" fullWidth />
                <br />
                <TextField id="outlined-basic" label="Re-Enter Account Number" variant="outlined" fullWidth />
                <br />
                <TextField id="outlined-basic" label="CIF Number" variant="outlined" fullWidth />
                <br />
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                <br />
                <Link to='/Pay'>Continue
                </Link> 
                <br />
                <br />
            </Box >
        </Container>
        </div>
    )
}