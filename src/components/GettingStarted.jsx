import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../style";

const codeString = `from tensorlink.roles import User

user = User(wallet_address)

# Example usage
d_model = user.request_job(nn.Module)

Existing PyTorch code...
`;

const GettingStarted = () => (
  <section className="bg-slate-50 dark:bg-gray-900 blur-overlay items-center flex flex-col border-t border-t-white ">
    <div className="text-left mt-20">
      <h1 className="text-5xl font-bold dark:text-white text-black mb-4">
        Getting Started with Tensorlink
      </h1>
      <p className="text-lg dark:text-gray-300 text-black mb-5">
        Jumpstart your journey with Tensorlink by integrating our Python code into your project.
      </p>
    </div>

    <SyntaxHighlighter language="python" style={vscDarkPlus}>
        {codeString}
    </SyntaxHighlighter>
    <p className="dark:text-gray-300 text-black mt-4">
        Thats all it takes to get started!
    </p>
  </section>
);

export default GettingStarted;
