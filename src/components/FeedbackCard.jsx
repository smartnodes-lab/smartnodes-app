import AnimatedLottie from "./AnimatedLottie";

const FeedbackCard = ({ content, name, title, img, blur, link }) => (
  <a href={link} className="no-underline mr-5">
    <div className={`flex flex-col px-10 mx-5 py-12 rounded-[20px] sm:h-[400px] md:h-[500px] xl:h-[550px] max-w-[500px] lg:max-w-[390px] md:max-w-[320px] my-5 feedback-card ${blur ? 'blur' : ''}`}>
      <div className="flex flex-row items-center">
        <div className="max-w-[100px] min-w-[30px] ss:block hidden">
          <AnimatedLottie
            animationData={img}
            alt={name}
            loop={true}
          />
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-xl leading-[32px] text-white mb-1">
            {title}
          </h4>
          <h4 className="font-poppins text-xl leading-[24px] text-gray-200">
            {name}
          </h4>
        </div>
      </div>
      <p className="font-poppins font-normal sm:text-[16px] md:text-[14px] lg:text-[16px] leading-[32.4px] text-white my-10">
        {content}
      </p>
    </div>
  </a>
);

export default FeedbackCard;
