export const scaleAnime = {
  init: { scale: 0, opacity: 0 },
  anime: { scale: [0.8, 0.9, 1], opacity: 1 },
  end: { scale: [1, 1.2, 1.3], opacity: 0 },
  transition: { duration: 1 },
};

export const bgAnime = {
  init: { scale: 0, opacity: 0 },
  anime: { scale: [1.2, 1.1, 1], opacity: 1 },
  end: { scale: [1, 0.9, 0.8], opacity: 0},
  transition: { duration: 1},
};

export const staggerChildren = {
  framer: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 2,
        staggerChildren: 0.2,
      },
    },
  },
  items: {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -80,
    },
    visible: {
      opacity: 1,
      scale: [0.8, 1.5, 1],
      y: 0,

      transition: {
        duration: 1,
        type: "spring",
      },
    },
  },
};

const notUsed = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 1.25,
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
