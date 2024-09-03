export const scaleAnime = {
  init: { scale: 0, opacity: 0 },
  anime: { scale: [0.8, 0.9, 1], opacity: 1 },
  end: { scale: [1, 1.2, 1.3], opacity: 0 },
  transition: { duration: 1.2, type: "spring", bounce: 0.2 },
};

export const bgAnime = {
  init: { scale: 0, opacity: 0 },
  anime: { scale: [1.2, 1.1, 1], opacity: 1 },
  end: { scale: [1, 0.9, 0.8], opacity: 0 },
  transition: { duration: 1.2, type: "spring", bounce: 0.2 },
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
