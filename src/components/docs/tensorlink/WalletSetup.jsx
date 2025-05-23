import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../../style";
import { NavButton } from "../..";
import { Link } from "react-router-dom";

const WalletSetup = () => (
  <section className="px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center h-full">
    <div className="text-left justify-center items-center max-w-[1280px]">
      <h1 className={`${styles.subheading} mt-10 pt-10`}>  
        Wallet config
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5 font-bold`}>
        As Tensorlink is in alpha, this step is unnecessary. Please conitinue to the <Link to="/docs/model-example" className="underline text-blue-400">next page.</Link>
      </p>

      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        To utilize Tensorlink for larger models and rate-limit-free services, you'll need Smartnodes tokens (SNO) to compensate workers and validators for their services. 
        SNO is an ERC20 token, enabling you to easily connect any web wallet to access services (e.g., MetaMask, Trust Wallet, etc.)
      </p>
    
      <h1 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Signing Up
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        To access Tensorlink's full services, you must first sign up as a User on the Smart Nodes contract. 
        If you have already registered, you may skip to the next step. 
      </p>

      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Visit the <Link to="/app" className="underline text-blue-400">Smart Nodes Interface</Link> and connect your web wallet with the account that you want associated with Tensorlink. 
        Once connected, navigate to the "Create User" option on the sign-up screen. Here you will be required to 
        input a user ID hash. This value belongs to a set of credentials that are automatically generated for you when installing Tensorlink. 
        These keys are essential for accessing Tensorlink's services and should be kept secure. Select "Import Public Key" and find the public_key.pem file
        in the Tensorlink directory.
      </p>
    </div>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton className="text-left" title="Node Setup" subtitle="Previous" page="tensorlink/docs/nodes" />
      <NavButton className="text-right" title="Runnig a Model" subtitle="Next" page="tensorlink/docs/model-example" />
    </div>
  </section>
);

export default WalletSetup;
