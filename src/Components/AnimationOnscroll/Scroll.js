import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const AnimationOnscroll = () => {
    const animationControls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true, // Animation triggers only once
      threshold: 0.2, // Percentage of element visibility to trigger the animation
    });
  
    const animationVariants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 },
    };
  
    React.useEffect(() => {
      if (inView) {
        animationControls.start('visible');
      } else {
        animationControls.start('hidden');
      }
    }, [inView, animationControls]);
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={animationControls}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
        className="content opacity-0 transform transition-opacity duration-500 ease-in-out"
      >
        <h1 className="text-white text-4xl">Animated Content</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </motion.div>
    );
  };
  