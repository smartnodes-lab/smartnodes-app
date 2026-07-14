import Spline from "@splinetool/react-spline";
import useReveal from "../hooks/useReveal";

const Opportunity = () => {
  const [sectionRef, visible] = useReveal(0.15);

  return (
    <section
      id="product"
      ref={sectionRef}
      className={`py-20 mt-0 xs:px-5 relative overflow-hidden transition-all duration-700 mb-20 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex justify-between space-x- z-40 pt-20 sm:px-0 px-10">
        {/* Text content section */}
        <div className="flex-1 w-full flex-col md:pl-20 items-center mb-10 max-w-xl">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#EDEFF4] mt-3 leading-tight">
            <span className="text-[#4FD8C4]">Rewarding</span>
            <br className="sm:block hidden" /> Users.
          </h2>
          <p className="text-[#9AA2B4] sm:text-md text-sm leading-relaxed max-w-xl mt-5" style={{ lineHeight: "1.75" }}>
            Share your resources, get rewarded. Users can leverage their computational power or dedicated hardware to complete tasks and earn SNO, the native payment
            and rewards token powering the network. Smartnodes creates a dynamic ecosystem where users are rewarded for enabling decentralized
            infrastructure and advancing open, peer-driven computation.
          </p>
        </div>
      </div>
      <div className="flex-1 w-full flex-col items-center pl-5 hidden md:block md:mb-10 max-w-xl" />

      {/* Spline animation */}
      <Spline
        className="absolute top-10 left-[50vw] md:left-[20vw]"
        scene="https://prod.spline.design/sZvfpvAoCKi8FOTv/scene.splinecode"
      />
    </section>
  );
};

export default Opportunity;
