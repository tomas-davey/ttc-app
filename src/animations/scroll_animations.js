import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = ({ className, animation_location, starttrigger, endtrigger }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // HERE

  useEffect(() => {
    if (!isVideoLoaded || !videoRef.current) return; // HERE
    // if (!videoRef.current) return;
    // Trigger animation when the video is 50% visible
    const startTrigger = starttrigger; // 'top 90%';
    const endTrigger = endtrigger ;// 'bottom 70%';

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: videoRef.current,
      start: startTrigger,
      end: endTrigger,
      scrub: true, // smooth scrubbing, consider adjusting this
      onUpdate: (self) => {
        const scrollPosition = self.progress; // Value between 0 and 1
        const videoTime = videoRef.current.duration * scrollPosition;

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
  }, [isVideoLoaded, endtrigger, starttrigger]);

  return (
    <video
      ref={videoRef}
      src={animation_location}
      muted
      className={className}
      preload="auto"
      onLoadedMetadata={() => console.log("Video is loaded and ready.")}
      onLoadedData={() => setIsVideoLoaded(true)} // Set video loaded status // HERE
      onCanPlayThrough={() => setIsVideoLoaded(true)} // Additional check for video readiness // HERE
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default ScrollVideo;
