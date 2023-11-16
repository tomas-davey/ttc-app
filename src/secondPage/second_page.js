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
    marginTop: theme.spacing(3)
  },
  spacemanImage: {
    width: '80%',
    height: 'auto',
    margin: '0 auto',
  },
  gridContainer: {
    maxWidth: '85%',
    margin: '-3em',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center', // Center on smaller screens
      margin: '0 auto', // Adjust margin for centering
    },
  },
  cardContentFlex: {
    display: 'flex', 
    alignItems: 'center', 
  },
  cardMedia: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(2), 
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '12vw',
      textAlign: 'center',
      marginTop: '0.5rem'
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
  },
  secondaryTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '2.3rem',
    textAlign: 'left', // Align to center
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem', // Larger size for small screens
      textAlign: 'center',
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
            { logo: stocksLogo, title: 'Database design', description: 'Organize and manage your data with our expert databases.' }]
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