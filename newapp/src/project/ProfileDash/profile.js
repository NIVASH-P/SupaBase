import { Avatar } from "@mui/material";


export function UserProfile()
{
    return(
        <div style={{backgroundColor:'lightblue'}}>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsHoXv8g5_IrR-RlyqbS8GZDYmsRa23g1Nw&usqp=CAU"
              sx={{ width: 200, height: 200 }}
            />
        </div>
    )
}