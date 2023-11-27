  import React from 'react'
  import {AppBar, Box, Toolbar, IconButton,Typography } from '@mui/material'
  import FastfoodIcon from '@mui/icons-material/Fastfood';
  import MenuIcon from '@mui/icons-material/Menu';
  import { Link } from 'react-router-dom';
  import './HeaderStyles.css';


  const Header = () => {
    return (
      <div>
        <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
          <Toolbar>
          <IconButton>
                <MenuIcon/>
                
                </IconButton>
          
              

           
       <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
        <FastfoodIcon/>
        My Resturant
       </Typography>
       <Box sx={{display:{xs:'none', sm:"block"}}}>
        <ul className="navigation-menu">
    
            <li>
               <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/about'}>About</Link>
            </li>
            <li>
            <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
            <Link to={'/contact'}>contact</Link>
            </li>
        </ul>
        
       </Box>
       </Toolbar>  
     
        </AppBar>
        </Box>
       
        
      </div>
    )
  }
  
  export default Header