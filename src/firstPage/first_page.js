// FirstPage.js
import React from 'react';
import FloatyMan from './FloatyMan.png';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomAppBar from '../navBar/navbar';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center', // Center the grid items on smaller screens
    },
  },
  rightColumn: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftColumn: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatyMan: {
    maxWidth: '80%',
    height: 'auto',
  },
  headerText: {
    color: 'white',
    fontSize: '2.6rem',
    fontWeight: 'bold',
  },
  subtext: {
    color: 'white',
    fontSize: '1rem',
    display: 'block',
    padding: '5%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  subtext2: {
    color: 'white', // Set the text color to white
    fontSize: '1.5rem', // Set the font size to 1.5rem for the second Typography
  },
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginLeft: 'auto',
    marginRight: 'auto', // Center the container horizontally
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  noBorder: {
    border: 'none',
    borderRadius: 0,
    // padding: '10%'
  },
  secondaryTypography: {
    textAlign: 'center',
    marginTop: theme.spacing(4), // Add top margin for spacing
    marginBottom: theme.spacing(2), // Add bottom margin for spacing
    [theme.breakpoints.down('md')]: {
      display: 'block', // Show the second row when below 768px
    },
  },
  [theme.breakpoints.up('md')]: {
    wordsGrid: {
      display: 'block',
    },
    secondaryTypography: {
      display: 'none',
    },
  },
  wordsGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function FirstPage() {
  const classes = useStyles();

  return (
    <>
      <CustomAppBar />
      <Container className={`${classes.transparentBackground} ${classes.container}`}>
        <Grid container spacing={3} className={classes.gridContainer}>
          {/* First Row */}
          <Grid item xs={12} sm={6} className={`${classes.leftColumn} ${classes.wordsGrid}`}>
            <Paper elevation={0} className={`${classes.transparentBackground} ${classes.noBorder}`}>
              <Typography variant="h4" className={classes.headerText}>
                Your Idea,
                <br />
                Your Business,
                <br />
                Our Tech
              </Typography>
              <Typography variant="body1" className={`${classes.subtext} ${classes.headerText}`}>
                Merging AI, data, and web development to boost businesses from barber shops to restaurants. Elevate with us.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.rightColumn}>
            <img src={FloatyMan} alt="FloatyMan" className={classes.floatyMan} />
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} className={classes.secondaryTypography}>
            <Typography variant="body1" className={classes.subtext2}>
              Merging AI, data, and web development to boost businesses from barber shops to restaurants. Elevate with us.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default FirstPage;
