import { useLottie } from "lottie-react";
import animation from "../assets/cloud-network.json";

const HeroAnimation = () => {
  const options = {
    animationData: animation,
    loop: false,
  };

  const { View } = useLottie(options);

  return View;
};

export default HeroAnimation;