
import { useInView } from "react-intersection-observer";
const ViewIntersect = ({ children }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,

    /* The options below work together */
    // trackVisibility: true,
    // delay: 1000,
  });
  console.log(`Header inside viewport ${inView + " " + num} .`);
  return <div ref={ref}>{children}</div>;
};
