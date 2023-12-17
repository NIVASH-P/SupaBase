import { Box,Tooltip,IconButton,Avatar,Button,Menu,MenuItem } from "@mui/material"
import {Link} from "react-router-dom"
import React,{ useState } from "react";


export default function Profile(){
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElNav, setAnchorElNav] = useState(null);
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    const handleSub = ({value}) => {
        // Perform login logic
        // For demonstration, set isLoggedIn to true
        setIsLoggedIn(value);
        
      };
    return(
        <div>
            <Box sx={{ flexGrow: 0 }}>
              {isLoggedIn ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              ) : (
              
                <Link to='/log'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSub}
            > 
             Login

            </Button>
                    </Link>
                      
                   

              )}
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {/* <Typography textAlign="center">{setting}</Typography> */}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
        </div>
    )
}