import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../style";
import { NavButton } from "../components";

const Overview = () => (
  <section className="bg-slate-50 dark:bg-gray-900 px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="text-left px-20 xs:px-0 mt-20 max-w-[1280px] justify-center items-center">
      <h1 className={`${styles.subheading}`}>
        Overview of Tensorlink
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink is a decentralized platform designed to scale neural network training and inference in PyTorch by arbitrarily distributing models across a network of peers. With Tensorlink, users can efficiently train and execute large models, harnessing the combined computational power of distributed nodes.
      </p>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Key Features
      </h2>
      <ul className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5`}>
        <li className="mt-4">
          <strong>Model wrapping:</strong> Tensorlink acts as a transparent layer over your existing models, enabling distributed computing without altering existing workflows. This allows for easy integration while preserving the integrity of your original model.
        </li>
        <li className="mt-4">
          <strong>Model Distribution:</strong> Leveraging pipeline and data parallelism, Tensorlink effectively scales the training of larger models and addresses the inefficiencies associated with internet-based distributed learning systems.
        </li>
        <li className="mt-4">
          <strong>Data Privacy and Security:</strong> TensorLink offers workflows that protect training data, and help obfuscate model structure through fragmentation.
        </li>
        <li className="mt-4">
          <strong>Consensus:</strong> Tensorlink utilizes a proof-of-learning protocol, supported by collateralized validator nodes and reputation systems. This framework validates the accuracy and integrity of distributed learning activities, and ensures transparent and secure operations across the network.
        </li>
      </ul>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Scaling Neural Network Training
      </h2>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        TensorLink introduces a decentralized system designed to scale neural network training and inference efficiently. Leveraging a network of peers, our system collectively hosts larger models, employing advanced data and model parallelism techniques to optimize training processes. By incentivizing individuals to contribute their idle compute power, we aim to build a distributed network capable of rivaling supercomputers. This approach not only democratizes access to computational resources but also offers a promising alternative to cryptocurrency mining.
      </p>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Comparison with Existing Systems
      </h2>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        While existing approaches to distributed computation, such as BOINC, Akash, and Flux, have made strides, they present limitations in machine-learning specific tasks, requiring custom implementation for model distribution or being constrained by the computational power of individual nodes. In contrast, TensorLink aims to create a universal framework for implementing neural network offloading and acceleration in PyTorch. This plug-and-play solution seamlessly parses and distributes any neural network in PyTorch, including models from popular libraries like HuggingFace, enhancing accessibility and usability of these larger models.
      </p>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Privacy-Preserving Training
      </h2>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Moreover, TensorLink offers specialized workflows designed for privacy-preserving training, safeguarding users' sensitive information throughout the neural network scaling process. This will be realized through an innovative approach to neural network submodule offloading, enabling the obfuscation of input data and the fragmentation of models. While exploring additional privacy methods like homomorphic encryption holds promise for the future, significant technological breakthroughs or advancements in research are required to fully implement them in this context.
      </p>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Proof of Learning (PoL)
      </h2>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        In the TensorLink ecosystem, the concept of Proof of Learning (PoL) plays a pivotal role in ensuring the integrity and reliability of distributed learning systems. Worker nodes are integral to this process, storing essential data related to model updates, input-output tensors, and gradients. Validator nodes, on the other hand, periodically request this data throughout the training process to verify the validity of various components, thereby enhancing transparency and accountability.
      </p>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Inexpensive checks between workers operating on the same subsection of the model are conducted efficiently, as modules are already loaded, allowing for quick verification of proof of model, input/output, gradient updates, and other parameters. Collateralized validators play a crucial role in performing more thorough and resource-intensive checks on individual workers or potentially the entire pipeline, ensuring robustness and reliability in the learning process.
      </p>
    </div>

    <div className="flex mt-10 mb-10 justify-between w-full">
      <NavButton className="text-left" title="Home" subtitle="Previous" page="" />
      <NavButton className="text-right" title="Installation" subtitle="Next" page="docs/install" />
    </div>
  </section>
);

export default Overview;
