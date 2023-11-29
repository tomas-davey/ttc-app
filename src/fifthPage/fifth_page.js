import React from 'react';
import { Grid, makeStyles, Typography, Container  } from '@material-ui/core';
import MyCardComponent from './card_component';
import tom1_replacement from '../fifthPage/linkedin_profile.jpg'
import tom2_replacement from '../fifthPage/tom_davey_linkedin_1.png'



// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1400px',
    marginBottom: '20px'
  },
  gridContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: "center",
    },
  },
  pageTitle: { // New style for the page title
    fontSize: '6rem',
    fontWeight: 'bold',
    color: 'transparent',
    textAlign: 'center', // Center the title
    marginBottom: '2%',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      fontSize: '13vw',
    },
  },
}));

function FifthPage() {
  const classes = useStyles();

  return (
    <>
    <Container sx={{ maxWidth:'100%'  }} maxWidth={false} className={`${classes.transparentBackground} ${classes.container}`}>
    <Typography variant="h2" className={classes.pageTitle}>
    MEET US
  </Typography>
    <Grid container spacing={5} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={6} className={classes.gridItem}>
            <MyCardComponent
              img={tom2_replacement}
              title1="Tomas Davey"
              title="Co-Founder"
              text="A professional software engineer, working on projects ranging from an interactive AI robot to full stack app developlemt"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.gridItem}>
            <MyCardComponent
              img={tom1_replacement}
              title1="Thomas Al-Hariri"
              title="Co-Founder"
              text="A professional software engineer,mainly working on automating processes and integrating AI solutions in business"
            />
          </Grid>
    </Grid>
    </Container>
    </>
  );
}

export default FifthPage;
