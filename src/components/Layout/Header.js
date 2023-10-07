import React, { useState } from 'react'
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from '@mui/material';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import "../../styles/HeaderStyles.css";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrowerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  // Menu Drower
  const drawer = (
    <Box onClick={handleDrowerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'#ff5e14'} variant='h4' component="div" sx={{ flexGrow: 1 }}>

        <FastfoodIcon /> GuruKrapa

      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li><NavLink activeClassName='active' to={'/'}> Home</NavLink></li>
        <li><NavLink to={'/menu'}>Menu </NavLink></li>
        <li><NavLink to={'/about'}>About </NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery </NavLink></li>
        <li><NavLink to={'/contact'}>Contact </NavLink></li>

      </ul>

    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }} >
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge="start"
              sx={{ mr: 2, display: { sm: "none" }, }} onClick={handleDrowerToggle}>
              <MenuIcon />
            </IconButton>

            <Typography color={"#ff5e14"} variant='h4' component="div" sx={{ flexGrow: 1 }}>
              <FastfoodIcon />
               GuruKrapa
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li><NavLink activeClassName='active' to={'/'}> Home</NavLink></li>
                <li><NavLink to={'/menu'}>Menu </NavLink></li>
                <li><NavLink to={'/about'}>About </NavLink></li>
                <li><NavLink to={'/gallery'}>Gallery </NavLink></li>
                <li><NavLink to={'/contact'}>Contact </NavLink></li>


              </ul>
            </Box>

          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary' open={mobileOpen} onClose={handleDrowerToggle}
            sx={{
              display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": {
                boxSizing: 'border-box',
                width: "240px"

              },
            }}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header