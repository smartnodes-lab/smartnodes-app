import { useLottie } from "lottie-react";

const AnimatedLottie = ({ animationData, loop = false}) => {
  const options = {
    animationData,
    loop,
  };

  const { View } = useLottie(options);

  return View;
};

export default AnimatedLottie;
