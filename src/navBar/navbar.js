// CustomAppBar.js
import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left', 
    maxWidth: '100%'
  },
  appBar: {
    backgroundColor: 'transparent', // Set the background color of the AppBar to transparent
    boxShadow: 'none', // Remove the box shadow
  },
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginLeft: 'auto',
    marginRight: 'auto', // Center the container horizontally
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
    <Container sx={{ maxWidth:'100%'  }} maxWidth={false} className={`${classes.transparentBackground} ${classes.container}`}>
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
    </Container>
  );
}

export default CustomAppBar;
