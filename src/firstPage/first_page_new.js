// LandingPage.js
import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography, Grid  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import sample from './backgroundVideo.mp4';
import CustomAppBar from '../navBar/navbar';
const useStyles = makeStyles((theme) => ({
  bgBlur: {
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to bottom, transparent, #000)', 
      zIndex: -1,
  },
  videoBg: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  container: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto', 
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingTop: '6rem',
      paddingBottom: '6rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '5rem',
      paddingRight: '15rem',
      paddingTop: '14rem',
      paddingBottom: '14rem',
    },
    maxWidth: '1400px',
    display: 'flex',
    alignItems: 'flex-end',
  },
   text: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left', 
    color: '#fff',
    fontSize: '5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
    }
  },
  subText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left', 
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      }
  },
  branding: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left', 
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      }
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const videoRef = useRef(null);
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      const newHeight = Math.min(Math.max(window.innerHeight, 600), 1400);
      setHeight(`${newHeight}px`);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      video.pause();
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);


  return (
    <div className={classes.bgBlur}>
      {/* <CustomAppBar /> */}
      <video
        ref={videoRef}
        className={classes.videoBg}
        style={{ height }}
        src={sample}
        type="video/mp4"
        autoPlay
        muted
      />
      <Container className={classes.container} style={{ height }}>
      <Grid container spacing={2}>
  <Grid item xs={12}>
  <Typography className={classes.branding}>
      TTC
    </Typography>
    <Typography variant="h4" className={classes.text}>
      Your Business,
      <br />
      Our Tech
    </Typography>
  </Grid>
  <Grid item xs={12}>
    <Typography className={classes.subText}>
      Merging AI, data, and web development to boost businesses from barber shops to restaurants. Elevate with us.
    </Typography>
  </Grid>
</Grid>
      </Container>
    </div>
  );
};

export default LandingPage;