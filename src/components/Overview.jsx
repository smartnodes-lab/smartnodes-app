import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../style";
import { NavButton } from "../components";

const Overview = () => (
  <section className="bg-slate-50 dark:bg-gray-900 px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="text-left px-20 xs:px-0 mt-20 max-w-[1280px] justify-center items-center">
      <h1 className={`${styles.subheading}`}>
        Scaling Neural Network Training
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink is a decentralized platform designed to scale neural network training and inference in PyTorch by distributing models across a network of peers. This approach enables users to efficiently train and execute large models on consumer hardware without the use of centralized cloud services. By incentivizing individuals to contribute their idle compute power, Tensorlink aims to create a distributed models capable of rivaling supercomputers.
      </p>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Key Features
      </h2>
      <ul className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5`}>
        <li className="mt-4">
          <strong>Model Wrapping:</strong> Tensorlink acts as a transparent layer over your existing models, enabling distributed training without altering existing workflows. This ensures easy integration while preserving the integrity of your original model.
        </li>
        <li className="mt-4">
          <strong>Model Distribution:</strong> Utilizing pipeline and data parallelism, Tensorlink scales the training of large models. It overcomes common inefficiencies associated with internet-based distributed learning systems, offering enhanced performance and scalability.
        </li>
        <li className="mt-4">
          <strong>Data Privacy and Security:</strong> Tensorlink provides various options for secure model distribution, including mechanisms that safeguard training data and obfuscate model structures through fragmentation.
        </li>
        <li className="mt-4">
          <strong>Consensus:</strong> Tensorlink utilizes a proof-of-learning protocol enforced by collateralized validator nodes. This system enforces the accuracy and reliability of distributed learning activities across the network.
        </li>
      </ul>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Comparison with Existing Systems
      </h2>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        While existing approaches to distributed computation have made strides, they present limitations in machine-learning specific tasks, often requiring custom distributed workflows, being constrained by the computational power of individual nodes, or lacking parallel acceleration. In contrast, Tensorlink aims to create a universal framework for implementing neural network offloading and acceleration in PyTorch through a plug-and-play solution that automatically handles model distribution, including models from popular libraries like HuggingFace, enhancing accessibility and usability of these larger models.
      </p>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Privacy-Preserved Training
      </h2>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink also offers specialized workflows for privacy-preserving training, safeguarding sensitive data throughout the scaling process. By offloading neural network submodules, Tensorlink obfuscates input data and fragments models to enhance privacy. While future advancements like homomorphic encryption could provide additional layers of security, implementing these techniques requires further technological and research breakthroughs.
      </p>

      <h2 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Proof of Learning (PoL)
      </h2>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        In the Tensorlink ecosystem, the Proof of Learning (PoL) concept is essential for ensuring the integrity and reliability of distributed learning systems. Worker nodes play a critical role in this process by storing vital data related to model updates, input-output tensors, and gradients. Efficient and inexpensive checks are conducted between workers operating on the same subsection of the model, as the modules are already loaded, allowing for rapid verification of proofs related to the model, input/output, gradient updates, and other parameters.
      </p>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        In parallel, collateralized validators are crucial for performing more thorough and resource-intensive checks on individual workers or even the entire pipeline. This dual-layered approach ensures robustness and reliability throughout the learning process, enhancing the overall transparency and accountability of distributed learning activities.
      </p>
    </div>

    <div className="flex mt-10 mb-10 justify-between w-full">
      <NavButton className="text-left" title="Home" subtitle="Previous" page="" />
      <NavButton className="text-right" title="Installation" subtitle="Next" page="docs/install" />
    </div>
  </section>
);

export default Overview;
