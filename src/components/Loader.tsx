import { AnimatePresence, motion, Variants } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: () => void;
}

function Loader({ isLoading, setIsLoading }: LoaderProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading();
    }, 1900);

    return () => clearTimeout(timeoutId);
  }, [setIsLoading]);

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6 } },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="loader" initial="hidden" animate="visible" exit="exit">
          {/* <img src="/favicon.png" alt="Loading..." width="50" height="50" /> */}
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            variants={svgVariants}
            custom={0}
          >
            <title>Narinder Pal Singh</title>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8892AF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#CCD6F6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <g>
              {/* Letter N */}
              <motion.rect
                x="10"
                y="15"
                width="20"
                height="70"
                fill="url(#grad1)"
                stroke="#8892AF"
                strokeWidth="2"
                variants={svgVariants}
                custom={1}
              />
              <motion.rect
                x="10"
                y="15"
                width="50"
                height="20"
                fill="url(#grad1)"
                stroke="#8892AF"
                strokeWidth="2"
              />
              <motion.rect
                x="40"
                y="15"
                width="20"
                height="70"
                fill="url(#grad1)"
                stroke="#8892AF"
                strokeWidth="2"
              />

              {/* Letter P */}
              <motion.rect
                x="65"
                y="15"
                width="20"
                height="70"
                fill="url(#grad1)"
                stroke="#8892AF"
                strokeWidth="2"
              />
              <motion.circle
                cx="80"
                cy="35"
                r="15"
                fill="url(#grad1)"
                stroke="#8892AF"
                strokeWidth="2"
              />

              {/* Letter S */}
              <motion.path
                d="M 90 20 Q 70 5, 50 20 T 30 40 Q 50 60, 70 75 T 90 85"
                fill="none"
                stroke="#8892AF"
                strokeWidth="5"
                variants={pathVariants as Variants}
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Loader;