import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col px-5 md:px-10 border-gray dark:border-white border-t border-t-[#3F3E45] bg-gray-300 dark:bg-zinc-900 relative z-10 w-full overflow-hidden`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full max-w-[1280px]`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="Smartnodes logo"
          className="w-[266px] sm:h-[70px] h-[62.14px] sm:px-0 px-1 object-contain bg-gray-400 rounded-xl max-w-full"
        />
        <p className={`${styles.paragraph} mt-4 ml-2 max-w-[312px]`}>
          Empowering innovation with scalable, distributed networks for data processing and computation in Python.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[19px] leading-[27px] text-grey-700 dark:text-white mt-4">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-grey-700 dark:text-dimWhite hover:text-secondary cursor-pointer mb-3 ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45] max-w-[1280px]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] dark:text-white text-grey-700">
        Copyright Ⓒ 2025 Smartnodes. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
