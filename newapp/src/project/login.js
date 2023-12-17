import { Avatar, TextField, Typography } from "@mui/material";
import supabase from "../SubaBase";
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NavBar from "./homepage/nav1";
import Navbar3 from "./homepage/nav2";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { Authcontext } from "./context";

export function Login()
{
    const { setLoggedIn,setData } = React.useContext(Authcontext);
    const [email, setEmail] = React.useState('');
    const [OTP, setOTP] = React.useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{  
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: OTP,
            })
            if (data)
            {
                setData(data);
                navigate('/');
                setLoggedIn(true)
                
            }
        }
        catch(error)
        {
            alert(error)
        }
    }
    return(
        <div style={{backgroundColor:'lightblue',width:'1545px',height:'760px'}}>
            <NavBar />
            <Navbar3 />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            backgroundColor: "#fffb",
            backdropFilter: "blur(12px)",
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width:"400px",
            height:"400px"
            
          }}>
            <Avatar>

            <LockOutlinedIcon />
            </Avatar>
            <br />
                 <TextField
                 id="MobileNumber"
                 label="Email"
                 required
                 name="Mobile-Number"
                 onChange={((e) => setEmail(e.target.value))}>
                 </TextField>
                 <br />
                 <TextField
                 id="Password"
                 label="Password"
                 name="Password"
                 required
                 onChange={((e) => setOTP(e.target.value))}>
                 </TextField>
                 <br />
                 <button onClick={handleSubmit} type="submit">
                    Submit
                 </button>
        </div>
        </div>
    )
}