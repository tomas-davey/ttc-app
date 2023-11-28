import React from 'react';
import { Grid, makeStyles, Typography  } from '@material-ui/core';
import MyCardComponent from './card_component';
import tom1_replacement from '../fifthPage/linkedin_profile.jpg'
import tom2_replacement from '../fifthPage/tom_davey_linkedin.jpg'



// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: "center",
  },
  pageTitle: { // New style for the page title
    fontSize: '6rem',
    fontWeight: 'bold',
    color: 'transparent',
    textAlign: 'center', // Center the title
    marginBottom: '2%',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: '13vw',
    },
  },
}));

function FifthPage() {
  const classes = useStyles();

  return (
    <>
    <Typography variant="h2" className={classes.pageTitle}>
    MEET US
  </Typography>
    <Grid container spacing={3} className={classes.gridContainer}>
      <Grid item>
      <MyCardComponent
  img={tom2_replacement}
  title1="Tomas Davey"
  title="Co-Founder" 
  text="A professional software engineer, working on projects ranging from an AI robot to watch TV with full stack app developlemt"
/>
      </Grid>
      <Grid item>
      <MyCardComponent
  img={tom1_replacement}
  title1="Thomas Al-Hariri"
  title="Co-Founder"
  text="A professional software engineer,mainly working on automating business processes and integrating AI solutions in businesses"

/>
      </Grid>
      {/* <Grid item>
        <MyCardComponent />
      </Grid> */}
    </Grid>
    </>
  );
}

export default FifthPage;
