import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../style";
import { NavButton } from "..";

const Overview = () => (
<section className="bg-slate-50 dark:bg-gray-900 px-5 sm:px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
  <div className="text-left justify-center items-center sm:max-w-[1280px]">
    <h1 className={`${styles.subheading} mt-10 pt-10`}>
      Scaling Neural Networks with Tensorlink
    </h1>
    <p className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
      Tensorlink is a library designed to simplify  the scaling of PyTorch model training and inference, offering tools to easily distribute models across
       a network of peers and share computing resources both locally and globally. This approach enables efficient training and execution of large models from 
       consumer-grade hardware, eliminating the need for centralized cloud services. Furthmore, Tensorlink provides a framework for incentivizing individuals to 
       contribute their idle computing power with the aim to create a distributed network that can rival the capabilities of supercomputers.
    </p>

    <h2 className={`${styles.subheading2} mt-10 pt-5 pl-5`}>
      Core Features and Components
    </h2>
    <ul className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5`}>
      <li className="mt-4">
        <strong>Model Distribution:</strong> Tensorlink utilizes pipeline and data parallelism to efficiently scale training across devices, minimizing latency and maximizing performance. The platform seamlessly handles model distribution behind the scenes, offering a variety of options to suit different use cases.
      </li>
      <li className="mt-4">
        <strong>Data Privacy and Security:</strong> Tensorlink safeguards training data by obfuscating input data and fragmenting models. Privacy-preserving workflows are also supported.
      </li>
      <li className="mt-4">
        <strong>Consensus (In Development):</strong> The Proof-of-Learning (PoL) protocol ensures trust and reliability across the network through a dual-layered validation approach.
      </li>
      <li className="mt-4">
        <code>DistributedModel</code>: A wrapper for PyTorch models supporting standard operations like <code>forward</code>, <code>backward</code>, and parameter management. It enables seamless sharing and execution of models across peers.
      </li>
      <li className="mt-4">
        <code>DistributedOptimizer</code>: Synchronizes parameter updates and simplifies distributed training across worker nodes.
      </li>
      <li className="mt-4">
        <code>Nodes</code>: Three node types—WorkerNode, ValidatorNode, and UserNode—support distributed workflows and communication.
      </li>
      <li className="mt-4">
        <strong>Coming soon</strong>: The ability to host entire model workflows off-device and access results through an API.
      </li>
    </ul>

    <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
      Privacy-Preserved Training
    </h2>
    <p className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
      Tensorlink offers specialized workflows for privacy-preserving training, safeguarding sensitive data by obfuscating input data and fragmenting models. Future advancements like homomorphic encryption could provide additional security layers.
    </p>

    <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
      Proof of Learning (PoL)
    </h2>
    <p className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
      The PoL protocol ensures system integrity through efficient checks between WorkerNodes and thorough audits by ValidatorNodes. This dual-layered approach enhances reliability and transparency across distributed learning processes.
    </p>
  </div>
  <div className="flex mt-10 mb-10 justify-between w-full">
    <NavButton className="text-left" title="Home" subtitle="Previous" page="" />
    <NavButton className="text-right" title="Installation" subtitle="Next" page="docs/install" />
  </div>
</section>


);

export default Overview;
