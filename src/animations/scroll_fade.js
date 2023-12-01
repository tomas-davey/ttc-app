import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FadeTextComponent = ({ triggerClasses }) => {
  useEffect(() => {
    const startTrigger = 'top 100%';
    // const endTrigger = 'bottom 70%';

    const scrollTriggerInstances = triggerClasses.map((triggerClass) => {
      return ScrollTrigger.create({
        trigger: `${triggerClass}`,
        start: startTrigger,
        // end: endTrigger,
        scrub: true,
        onEnter: () => {
          gsap.to(`${triggerClass}`, { opacity: 1, duration: 1 });
          console.log(`UPDATE for ${triggerClass}`);
        },
      });
    });

    return () => {
      scrollTriggerInstances.forEach((scrollTriggerInstance) => {
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();
        }
      });
    };
  }, [triggerClasses]); // Add triggerClasses as a dependency
};

export default FadeTextComponent;