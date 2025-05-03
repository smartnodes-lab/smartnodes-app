import styles, { layout } from "../../../style";
import { NavButton } from "../..";

const Community = () => (
  <section className="px-6 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="xs:ml-10 lg:ml-0 ml-2 text-left mt-12 max-w-[1280px] justify-center items-center">
      <div className="flex items-center mb-6 mt-5">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h1 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Socials & Contributing</h1>
      </div>

      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-8 mt-5`}>
        Tensorlink is a community-driven project for decentralized neural network training. Whether you're a developer, researcher, or enthusiast, there are many ways to get involved and help us grow!
      </p>

      <h3 className={`${styles.landingText2} mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200`}>Contributing 🛠</h3>
      <ul className={`${styles.landingText2} list-disc ml-6 sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-4 text-base leading-relaxed`}>
        <li className="mb-2">
          <strong>Report Issues:</strong> Found a bug or have a feature idea? Submit an issue on our 
          <a href="https://github.com/smartnodes-lab/tensorlink" className="text-blue-500 underline ml-1">GitHub repo</a>.
        </li>
        <li className="mb-2">
          <strong>Submit Pull Requests:</strong> Fork the repo, make your changes, and open a PR to get them reviewed and merged.
        </li>
        <li className="mb-2">
          <strong>Join the Community:</strong> Collaborate with contributors, share ideas, or ask questions in our 
          <a href="https://discord.gg/aCW2kTNzJ2" className="text-blue-500 underline ml-1">Discord server</a>.
        </li>
      </ul>

      <h3 className={`${styles.landingText2} mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200`}>Stay Connected 💬</h3>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mt-4 mb-5`}>
        Follow us and stay up-to-date on development, releases, and community updates:
      </p>
      <ul className={`${styles.landingText2} list-disc ml-6 sm:px-5 md:px-10 dark:text-gray-300 text-black mb-8 text-base leading-relaxed`}>
        <li className="mb-2">
          <a href="https://twitter.com/smartnodes_lab" className="text-blue-500 underline">Twitter (X): @smartnodes_lab</a>
        </li>
        <li className="mb-2">
          <a href="https://github.com/smartnodes-lab/tensorlink" className="text-blue-500 underline">GitHub: smartnodes-lab/tensorlink</a>
        </li>
        <li>
          <a href="https://discord.gg/aCW2kTNzJ2" className="text-blue-500 underline">Discord: Join our community</a>
        </li>
      </ul>

      <h3 className={`${styles.landingText2} mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200`}>Support Development ☕ </h3>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mt-4 mb-6`}>
        Help us keep building by supporting the project. Every bit helps!
      </p>
      <a href="https://www.buymeacoffee.com/smartnodes" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me a Coffee"
          style={{ width: "150px", height: "auto" }}
        />
      </a>
    </div>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton className="text-left" title="Mining" subtitle="Previous" page="tensorlink/docs/mining" />
    </div>
  </section>
);

export default Community;
