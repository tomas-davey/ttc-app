

import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import myVideo from './ttc-laptop_6.mp4';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger) 


const ScrollVideo = ({ className }) => {
  const videoRef = useRef(null);
  const startScrollPercentage = 0.12404;
  const endScrollPercentage = 0.289;

  useEffect(() => {
    if (!videoRef.current) return;
  
    // Create and store the ScrollTrigger instance
    const scrollTriggerInstance = ScrollTrigger.create({
      start: startScrollPercentage * document.body.offsetHeight,
      end: endScrollPercentage * document.body.offsetHeight,
      onUpdate: (self) => {
        const scrollPosition = self.progress; // Value between 0 and 1
        const videoTime = videoRef.current.duration * scrollPosition;

        // next 4 lines can be deleted, just for getting the scroll percentage
        // const actualScrollPosition = window.scrollY || window.pageYOffset;
        // const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
        // const scrollPercentage = (actualScrollPosition / totalScrollHeight) ;
        // console.log(`Actual scroll position as a percentage: ${scrollPercentage.toFixed(2)}%`);


  
        if (isFinite(videoTime) && videoTime >= 0 && videoTime <= videoRef.current.duration) {
          videoRef.current.currentTime = videoTime;
        } else {
          console.log(`Invalid video time: ${videoTime}`);
        }
      }
    });
  
    // Cleanup function
    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);
  

  return (
    <video
      ref={videoRef}
      src={myVideo}
      muted
      className={className} // Apply the passed className
      preload="auto"

      onLoadedMetadata={() => console.log("Video is loaded and ready.")}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default ScrollVideo;

