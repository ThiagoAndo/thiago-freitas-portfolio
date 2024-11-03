import AnimatedCursor from "react-animated-cursor";

const AnimateCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="26, 115, 232"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </>
  );
};

export default AnimateCursor;
