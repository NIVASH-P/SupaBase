import TextField from '@mui/material/TextField';


export default function EnterOtp(){
    return(
        <TextField
              margin="normal"
              required
              fullWidth
              id="Mobile-number"
              label="Mobile-number"
              name="Mobile-Number"
              autoComplete="Mobile-Number"
              autoFocus
            />
    )
}