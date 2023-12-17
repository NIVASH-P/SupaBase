import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from '../login/log';
import Body from './body';
import SignUp from '../login/reg';
import CustomizedTimeline from '../about/aboutpg';
import Pricing from '../forms/form';
import Servicecard from '../service/serv';
// import Main from '../profile/main';

const pages = [
  {
    name:'Home',
    link: '/'
  },
  {
    name:'Products & Services',
    link: '/ser'
  },
  {
    name:'About',
    link: '/about'
  },
  {
    name:'Forms',
    link: '/form'
  },
  {
    name:'Contact Us',
    link: '/us'
  },
]

const settings = [
{
  name:'Profile',
  link: '/dash'
},
{
  name:'logout',
  link: '/'
},];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 const handleSub = () => {
    // Perform login logic
    // For demonstration, set isLoggedIn to true
    setIsLoggedIn(true);
    
  };

  return (
    <nav>
        <Router>
      <AppBar position="static" >
        <Container maxWidth="">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page,id) => (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} >
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' , textDecoration: 'none'}}
                >
                {page.name}
                </Button>
               </Link>
              ))}
            </Box>

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
                  <Link to={setting.link}>
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
        <Routes>
           <Route exact path='/'
          element ={<Body/>}></Route>
          <Route exact path='/log' 
          element={<SignIn/>}></Route>
          <Route exact path='/Sign' 
          element={<SignUp/>}></Route>
          <Route exact path='/about' 
          element={<CustomizedTimeline/>}></Route>
          <Route exact path='/form'
          element={<Pricing/>}></Route>
          <Route exact path='/ser'
          element={<Servicecard/>}></Route>
          

         </Routes>
      </Router>
    </nav>
  );
}

export default ResponsiveAppBar ;
