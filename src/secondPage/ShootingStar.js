import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  shootingStar: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '10%',
    width: '12px',
    height: '12px',
    animation: '$shootingStarAnimation linear infinite',
    zIndex: 0,
  },
  '@keyframes shootingStarAnimation': {
    '0%': {
      transform: 'translate(0, 0)',
      opacity: 1,
    },
    '100%': {
      transform: 'translate(var(--viewportWidth), var(--viewportHeight))',
      opacity: 0,
    },
  },
  container: {
    overflow: 'hidden',
  },
}));

const ShootingStar = () => {
  const classes = useStyles();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateRandomStar = () => {
        const container = document.body;
        const containerWidth = container.offsetWidth;
        const containerHeight = document.body.scrollHeight;
        // const firstPageWidth = document.getElementById('1').offsetWidth;
        // const firstPageHeight = document.getElementById('1').offsetHeight;
        console.log(containerHeight)
        const left = Math.random() * containerWidth
        const top = Math.random() * containerHeight
        console.log("HERE", top)
        return {
         left,
         top,
          width: Math.random() * 6,
          speed: Math.random()*3 + 1,
          delay: Math.random() * 3,
          viewportWidth: Math.random() * containerWidth,
          viewportHeight: Math.random() * window.innerHeight - top,
          // viewportHeight: 5
        };
      };
      
    const initialStars = Array.from({ length: 15 }, generateRandomStar);
    setStars(initialStars);

    const intervalId = setInterval(() => {
      setStars((prevStars) => prevStars.map(generateRandomStar));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes.container}>
      {stars.map((star, index) => (
        <div
          key={index}
          className={`${classes.shootingStar}`}
          style={{
            ...star,
            width: `${star.width}px`,
            height: `${star.width}px`,
            animationDuration: `${star.speed}s`,
            animationDelay: `-${star.delay}s`,
            '--viewportWidth': `${star.viewportWidth}px`,
            '--viewportHeight': `${star.viewportHeight}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStar;
