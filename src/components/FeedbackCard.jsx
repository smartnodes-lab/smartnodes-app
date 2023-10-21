import AnimatedLottie from "./AnimatedLottie";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-row items-center">
      <div className="max-w-[100px]">
        <AnimatedLottie
          animationData={img}
          alt={name}
        />
      </div>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-2xl leading-[32px] text-white mb-1">
          {title}
        </h4>
        <h4 className="font-poppins text-xl leading-[24px] text-gray-200">
          {name}
        </h4>
      </div>
    </div>
    <p className="font-poppins font-normal text-xl leading-[32.4px] text-white my-10">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
