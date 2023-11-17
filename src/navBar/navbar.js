// CustomAppBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent', // Set the background color of the AppBar to transparent
    boxShadow: 'none', // Remove the box shadow
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
  },
  title: {
    margin: theme.spacing(0, 1),
  },
  button: {
    margin: theme.spacing(0, 1), // Add some margin to the buttons for spacing
  },
}));

function CustomAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          TTC
        </Typography>
        <Button color="inherit" href="#home" className={classes.button}>
          Home
        </Button>
        <Button color="inherit" href="#services" className={classes.button}>
          Services
        </Button>
        <Button color="inherit" href="#contact" className={classes.button}>
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;