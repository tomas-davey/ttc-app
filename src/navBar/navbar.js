// CustomAppBar.js
import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid  } from '@material-ui/core';
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
    flexGrow: 1, // Take up all available space on the left
    margin: theme.spacing(0, 1),
  },
  button: {
    margin: theme.spacing(0, 1), // Add some margin to the buttons for spacing
  },
}));

function CustomAppBar() {
  const classes = useStyles();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
  
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

 
  return (
    <Container sx={{ maxWidth: '100%' }} maxWidth={false} className={`${classes.transparentBackground} ${classes.container}`}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            TTC
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Button color="inherit" onClick={() => scrollTo('1')} className={classes.button}>
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={() => scrollTo('2')} className={classes.button}>
                Features
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={() => scrollTo('3')} className={classes.button}>
                Why
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={() => scrollTo('4')} className={classes.button}>
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default CustomAppBar;
