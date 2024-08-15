"use client";
import { useMediaQuery } from "@uidotdev/usehooks";
import Lottie from "lottie-react";



const AnimationLottie = ({ animationPath, width ,margin}) => {
    const medium = useMediaQuery(
      "only screen and (min-width : 769px) and (max-width : 992px)"
    );
    const large = useMediaQuery(
      "only screen and (min-width : 993px) and (max-width : 1200px)"
    );
    const extraLarge = useMediaQuery(
      "only screen and (min-width : 1201px)"
    );
let isBig =false;
if (width && margin){
  isBig = medium || large || extraLarge; 
}
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width:  width ,
      marginLeft: isBig === true ? margin : "-40px",
    },
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;