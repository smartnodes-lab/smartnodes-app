import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../style";
import { NavButton } from "../components";

const codeString = `from tensorlink.roles import User

user = User(wallet_address)

# Example usage
d_model = user.request_job(nn.Module)

Existing PyTorch code...
`;

const GettingStarted = () => (
  <section path="/docs/install" className="bg-slate-50 dark:bg-gray-900 px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="text-left px-20 xs:px-0 mt-20 max-w-[1280px] justify-center items-center">
      <h1 className={`${styles.subheading}`}>
        Getting Started with Tensorlink
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Welcome to the quickstart guide for Tensorlink! Whether you are experienced with PyTorch or
        just starting out, this guide will help you set up and run your first distributed training task
        using Tensorlink. While a general knowledge of Python and PyTorch is assumed, we have tried to make this guide accessible
         even to those who are new.
      </p>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        This guide will walk you through the complete process of leveraging distributed training with a Large Language Model (LLM) 
        from the Hugging Face library. We will cover all the necessary steps to get you started with Tensorlink, including how to 
        request free training jobs for sub-8Gb models on the network, as well as the preparations needed for training larger models.
      </p>

      <h1 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Installation
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Before installing Tensorlink, ensure you have the following requirements:
        <li className="mt-4 ml-5">Python 3.11.9+</li>
        <li className="mt-2 mb-5 ml-5">PyTorch 2.3+ (installed as dependency, ensure model is compatible)</li>
        Tensorlink can be installed using pip. Open your terminal and run the following command:
      </p>
      <div className="mx-5 sm:mx-20">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter">
          pip install tensorlink
        </SyntaxHighlighter>
      </div>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        This command will download and install Tensorlink along with its dependencies. If you are
         using a virtual environment (recommended), make sure it's activated before running the install command.
      </p>
    </div>

    <div className="flex mt-10 mb-10 justify-between w-full">
      <NavButton className="text-left" title="Overview" subtitle="Previous" page="docs/overview" />
      <NavButton className="text-right" title="Wallet Config" subtitle="Next" page="docs/wallet" />
    </div>

    {/* <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter">
        {codeString}
    </SyntaxHighlighter>
    <p className="dark:text-gray-300 text-black mt-4">
        Thats all it takes to get started!
    </p> */}
  </section>
);

export default GettingStarted;
