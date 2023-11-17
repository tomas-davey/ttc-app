import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import spacemanImage from '../secondPage/spaceman2.png'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'left', 
    marginTop: theme.spacing(3),
  },
  pageTitle: {
    color: 'transparent',
    fontWeight: 'bold',
    fontSize: '8vw',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem', // Adjust for responsiveness
      textAlign: 'center',
    },
  },
  secondaryTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign: 'left',
    
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      textAlign: 'center',
    },
  },
  normalText: {
    color: '#67687A',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem', // Slightly larger on small screens
    },
  },
  spacemanImage: {
    width: '80%',
    height: 'auto',
    margin: '0 auto',
  },
}));

function ThirdPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" className={classes.pageTitle}>
          WHO
        </Typography>
        <Typography variant="h4" className={classes.secondaryTitle}>
          We’re professional software engineers with years of experience
        </Typography>
        <Typography variant="body1" className={classes.normalText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque epsa quae ab illo inventore veritatis architecto beatae.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <img className={classes.spacemanImage} src={spacemanImage} alt="Spaceman" />
      </Grid>
    </Grid>
  );
}

export default ThirdPage;
