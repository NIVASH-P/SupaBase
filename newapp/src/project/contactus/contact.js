import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            borderRadius: 20, // Adjust the value as needed for the desired curve
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"I can help you...!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All branches of Piggy Bank are Internet Banking enabled. If you already have an account with us, ask your branch to give you Internet Banking, and if there is a problem, please contact our experts...<br/><br/>
          </DialogContentText>
          <div>
            <ul style={{
              display: "flex",
              justifyContent: "space-between",
              listStyleType: "none"
            }}>
              <li> <p><b>Phone : <br/>4509-7894-3419 </b></p></li>
              <li> <p><b>Cell : <br/>6374044907</b></p></li>
              <li><p><b>Email : <br/>piggybank567@gmail.com</b></p></li>  
            </ul>
          </div> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
