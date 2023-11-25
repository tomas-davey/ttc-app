import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MyCardComponent from './card_component';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginBottom: '2%', // Bottom margin for the grid container
    justifyContent:"center",
    // Other styles can be added here if needed
  },
  // ... You can keep other styles here
}));

function FifthPage() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      <Grid item>
        <MyCardComponent />
      </Grid>
      <Grid item>
        <MyCardComponent />
      </Grid>
      <Grid item>
        <MyCardComponent />
      </Grid>
    </Grid>
  );
}

export default FifthPage;
