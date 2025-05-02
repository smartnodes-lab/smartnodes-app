import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../style";
import { NavButton } from "..";

const codeString = `from tensorlink.roles import User

user = User(wallet_address)

# Example usage
d_model = user.request_job(nn.Module)

Existing PyTorch code...
`;

const GettingStarted = () => (
  <section path="/docs/install" className="px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center h-full w-full">
    <div className="text-left px-5 xs:px-0 mt-20 max-w-[1280px] justify-center items-center">
      <div className="flex items-center mb-6 mt-5">
        <div className="bg-purple-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h1 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Getting Started with Tensorlink</h1>
      </div>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        If you're here to run a distributed model in Python, continue through this section. If not, check out some of our 
        other useful sections:
      </p>
      <ul className="sm:px-10 text-lg dark:text-gray-300 text-black mb-5 ml-10 list-disc">
        <li className="mt-2">
          <a href="/mining" className="text-blue-400 hover:underline">
            Contributing Resources (Mining)
          </a>
        </li>
        <li className="mt-2">
          <a href="/inference" className="text-blue-400 hover:underline">
            Inference APIs
          </a>
        </li>
      </ul>

      <div className="flex items-center mb-6 mt-16">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h2 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Installation</h2>
      </div>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Before installing Tensorlink, ensure you meet the following requirements:
      </p>
      <ul className="sm:px-10 text-lg dark:text-gray-300 text-black mb-5 ml-10 list-disc">
        <li className="mt-2">UNIX/MacOS (Windows support coming soon...)</li>
        <li className="mt-2">Python 3.10+</li>
        <li className="mt-2">PyTorch 2.3+ (ensure model compatibility with torch version)</li>
      </ul>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        While version constraints will be relaxed in future releases, Python 3.10+ and a UNIX-based OS are currently required for stable usage.
      </p>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        To install Tensorlink, simply use pip:
      </p>
      <div className="mx-5 sm:mx-20">
        <SyntaxHighlighter language="bash" style={vscDarkPlus} className="syntax-highlighter">
          pip install tensorlink
        </SyntaxHighlighter>
      </div>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        This command will install Tensorlink and all its dependencies. If you're working in a virtual environment (recommended), make sure it's activated before installing.
      </p>
    </div>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton className="text-left" title="Overview" subtitle="Previous" page="docs/overview" />
      <NavButton className="text-right" title="Model Setup" subtitle="Next" page="docs/model-setup" />
    </div>
  </section>
);

export default GettingStarted;
