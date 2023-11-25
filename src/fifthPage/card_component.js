import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black', // Black background
    borderRadius: '16px', // Rounded corners
    boxShadow: '0 0 10px purple', // Initial glowing purple outline
    border: '3px solid transparent', // Transparent border
    color: 'white', // Text color
    width: '300px', // Width of the card
    height: '500px', // Height of the card, making it a tall rectangle
    transition: 'all 0.3s ease-in-out', // Smooth transition for effects
    opacity: 0.85,
    '&:hover': {
      boxShadow: '0 0 50px purple', // Larger glow effect on hover
      transform: 'scale(1.05) rotateX(10deg) rotateY(-10deg)', // Apply 3D rotations
      border: '1px solid purple', // Changing border color on hover
      opacity: 1,

    },
    // Additional styles can be added here
  },
  // Additional component styles can be defined here
}));

function MyCardComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">
          Your Text Here
        </Typography>
        {/* You can add more content here */}
      </CardContent>
    </Card>
  );
}

export default MyCardComponent;
