import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import spacemanImage from './spaceman2.png';
import businessAnalLogo from './2nd_logos/business_anal_logo.png';
import phoneLogo from './2nd_logos/phone_logo.png';
import stocksLogo from './2nd_logos/stocks_logo.png';
import myGif from './apple_android_animation.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'left',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      // Styles for screens below 600px
      textAlign: 'center', // Center the text
    },
  },
  spacemanImage: {
    width: '80%',
    height: 'auto',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      // Adjustments for small screens
      width: '100%', // Increase width
      display: 'none',
    },
  },
  gridContainer: {
    maxWidth: '85%',
    margin: '0 auto', // Changed margin for consistent centering
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%', 
    },
    // Added a media query for zoom levels
    '@media screen and (min-width: 1200px)': { 
      maxWidth: '100%', // Adjust the maxWidth for larger screens
    },
  },
  cardContentFlex: {
    display: 'flex', 
    alignItems: 'center', 
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    // Adjusted the media query for flex direction
    '@media screen and (min-width: 960px)': { 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
    },
  },
  cardMedia: {
    width: 60,
    height: 60,
    // display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      // Adjustments for small screens
      maxWidth: '20vw',
      maxHeight: '20vw',
      marginRight: theme.spacing(1),
    },
  },
  featureTitle: {
    fontSize: '8vw',
    fontWeight: 'bold',
    color: 'transparent',
    textAlign: 'left',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(-7),
    [theme.breakpoints.down('sm')]: {
      fontSize: '17vw',
      textAlign: 'center',
      marginTop: '0.5rem',
      // Hide on small screens
      // display: 'none',
    },
  },
  gridItem: {
    textAlign: 'center',
  },
  gridItemImage: {
    maxWidth: 60,
    maxHeight: 60,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20vw',
      maxHeight: '20vw',
    },
  },
  cardTransparent: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    // border: '1px solid white', // Add white border
    // borderRadius: '10px', // Curved corners
  },
  secondaryTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '2.3rem',
    textAlign: 'left', // Align to left
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.3rem', // Larger size for small screens
      textAlign: 'center',
      
      // Hide on small screens
      display: 'none',
    },
  },
  gridItemTitles: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem', // Adjust for responsiveness
    },
  },
  whiteText: {
    color: '#67687A',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem', // Slightly larger on small screens
    },
  },
}));
function SecondPageContent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={6}>
        <img className={classes.spacemanImage} src={spacemanImage} alt="Spaceman floating" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h2" className={classes.featureTitle}>
          FEATURES
        </Typography>
        <Typography variant="h4" className={classes.secondaryTitle}>
          Explore Our Professional
          <br />
          Technology Solutions
        </Typography>

        <Grid container spacing={1} className={classes.gridContainer}>
          {[{ logo: businessAnalLogo, title: 'Business analytics', description: 'Optimize your business processes with our top-notch data analytics tools.' },
            { logo: myGif, title: 'Digital design', description: 'Craft stunning web and mobile applications tailored to your needs.' },
            { logo: phoneLogo, title: 'Pure automation', description: 'Harness the power automation and achieve true efficiency.' },
            { logo: stocksLogo, title: 'AI solutions', description: 'Use AI in your workflow to improve everything' }]
            .map((item, index) => (
              <Grid item xs={12} sm={6} key={index} className={classes.gridItem}>
                <Card className={classes.cardTransparent}>
                  <CardContent className={classes.cardContentFlex}>
                    <CardMedia
                      component="img"
                      image={item.logo}
                      title={item.title}
                      className={classes.cardMedia}
                    />
                    <div>
                      <Typography variant="h6" className={classes.gridItemTitles}>{item.title}</Typography>
                      <Typography variant="body2" className={classes.whiteText}>{item.description}</Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SecondPageContent;