"use client";
import { useInView } from "react-intersection-observer";
const ViewIntersect = ({ children }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,

    /* The options below work together */
    // trackVisibility: true,
    // delay: 1000,
  });
  console.log(`Header inside viewport ${inView} .`);
  return <div ref={ref}>{children}</div>;
};

export default ViewIntersect;
