import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import spacemanImage from './Spaceman3.png'; 
import ScrollVideo from '../animations/scroll_animations';
// import iphoneAnimation from '../animations/iphone_animation_2.mp4';
import FadeTextComponent from '../animations/scroll_fade';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    // paddingLeft: '5%',
    // paddingRight: '5%',
    marginLeft: 'auto',
    marginRight: 'auto', // Center the container horizontally
    maxWidth: '1400px',
  },
  spacemanImage: {
    opacity: 0,
    height: 'auto',    // Allow the height to be determined by the container
    width: '50%',     // Fill the entire width of the container
    maxWidth: '1000px',
    // padding: '30%',
    minWidth: '200px',  // Set a minimum width (adjust as needed)
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  featureTitle: {
    opacity: 0,
    fontSize: '6rem',
    fontWeight: 'bold',
    color: 'transparent',
    textAlign: 'center',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: '13vw',
    //   textAlign: 'center',
    },
  },

  secondaryTitle: {
    opacity: 0,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '1.9rem',
    textAlign: 'center',
    paddingBottom: '10px'
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: '1rem', // Adjust the font size for larger screens
    // },
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '1.2rem',
    //   textAlign: 'center',
    // },
  },
  whiteText: {
    opacity: 0,
    color: '#FFFFFF',
    fontSize: '1.3rem',
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: '1rem', // Adjust the font size for larger screens
    // },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '1rem',
    // },
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white, // Set font color to white
    maxWidth: '100%'
  },
  spacemanContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ... (add any other styles you need)
}));

function SecondPageContent() {
  const classes = useStyles();
  
  return (
    <Container sx={{ maxWidth:'100%'  }} maxWidth={false} className={`${classes.transparentBackground} ${classes.container}`}>
       <FadeTextComponent triggerClasses={[`.${classes.featureTitle}`, `.${classes.secondaryTitle}`, `.${classes.whiteText}`, `.${classes.spacemanImage}` ]} />
      <Grid container className={classes.root} spacing={2}>

        <Grid item xs={12} md={7} className={classes.textContainer}>
          <Typography variant="h2" className={classes.featureTitle}>
            WHY
          </Typography>
          <Typography variant="h4" className={classes.secondaryTitle}>
          Your vision is our mission
          </Typography>

          <Typography variant="body1" className={classes.whiteText}>
          At TTC, our approach sets us apart. We understand that every project is a unique opportunity for improvement. Our team excels in customizing solutions to fit your specific needs, embracing each challenge as a chance to push your business to new boundaries. 
          <br /><br />
          We're not just about delivering software; we're about collaborating closely with you, turning your vision into reality. Our commitment to quality and reliability ensures that the solutions we provide are not only advanced but also dependable. Join us in shaping the future of technology—one solution at a time.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5} className={classes.spacemanContainer}>
          {/* <img className={classes.spacemanImage} src={spacemanImage} alt="Spaceman floating" /> */}
          <ScrollVideo className={classes.spacemanImage} animation_location="https://ttcbucket.s3.eu-west-2.amazonaws.com/ttc-iphone_3.mp4" starttrigger={'top 90%'} endtrigger={'bottom 80%'}/>

        </Grid>

      </Grid>
    </Container>
  );
}

export default SecondPageContent;
