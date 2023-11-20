import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import spacemanImage from '../secondPage/spaceman2.png'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'left', 
    marginTop: theme.spacing(3),
    maxWidth: '100%'
  },
  spacemanImage: {
    width: '80%',
    height: 'auto',
    margin: '0 auto',
  },
  featureTitle: {
    fontSize: '8vw',
    fontWeight: 'bold',
    color: 'transparent',
    textAlign: 'left',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(-10),
    paddingLeft: '0.5rem',

    [theme.breakpoints.down('sm')]: {
      fontSize: '12vw',
      textAlign: 'center',
      marginTop: '0.5rem',
      // paddingLeft: '0.5rem',
    },
  },
  secondaryTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '2.3rem',
    textAlign: 'left',
    paddingLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
      textAlign: 'center',
    },
  },
  whiteText: {
    color: '#67687A',
    fontSize: '1rem',
    paddingLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  // ... (add any other styles you need)
}));

function SecondPageContent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>

      <Grid item xs={12} md={6}>
        <Typography variant="h2" className={classes.featureTitle}>
          WHY
        </Typography>
        <Typography variant="h4" className={classes.secondaryTitle}>
        Your vision
          <br />
          is our mission
        </Typography>

        <Typography variant="body1" className={classes.whiteText}>
        At TTC, our approach sets us apart. We understand that every project is a unique opportunity for improvement. Our team excels in customizing solutions to fit your specific needs, embracing each challenge as a chance to push your business to new boundaries. We're not just about delivering software; we're about collaborating closely with you, turning your vision into reality. Our commitment to quality and reliability ensures that the solutions we provide are not only advanced but also dependable. Join us in shaping the future of technology—one groundbreaking solution at a time.

</Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <img className={classes.spacemanImage} src={spacemanImage} alt="Spaceman floating" />
      </Grid>

    </Grid>
  );
}

export default SecondPageContent;
