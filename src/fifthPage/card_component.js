import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    borderRadius: '16px',
    boxShadow: '0 0 10px purple',
    border: '3px solid transparent',
    color: 'white',
    width: '400px',
    height: '600px',
    transition: 'all 0.3s ease-in-out',
    opacity: 0.85,
    '&:hover': {
      boxShadow: '0 0 50px purple',
      transform: 'scale(1.05)',
      border: '1px solid purple',
      opacity: 1,
    },
  },
  image: {
    width: '100%',
  },
  title1: {
    marginTop: '10px',
    fontSize: '24px',
  },
  title: {
    marginTop: '10px',
    fontSize: '20px',
  },
  paragraph: {
    marginTop: '10px',
    fontSize: '16px',
  },
}));

function MyCardComponent({ img, title1, title, text }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={img} alt="Card" className={classes.image} />
        <Typography variant="h5" className={classes.title1}>
          {title1}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCardComponent;
