import styles, { layout } from "../../style";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { NavButton } from "..";


const Mining = () => (
    <section className="px-6 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
      <div className="xs:ml-10 lg:ml-0 ml-2 text-left mt-12 max-w-[1280px] justify-center items-center">
        <div className="flex items-center mb-6 mt-5">
          <div className="bg-red-600 h-8 w-2 mr-4 rounded-lg"></div>
          <h1 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Running a Node (Mining)</h1>
        </div>
        <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5`}>
          Contributing compute to Tensorlink is as simple as running a node. Whether you're a hobbyist with a spare GPU or managing a cluster of machines, your hardware can help power real-world machine learning workflows across the network. By mining with Tensorlink, you join a decentralized ecosystem that rewards contributors for supporting distributed inference and training jobs, no special setup required.
        </p>
        
        <h3 className={`${styles.landingText2} mt-10 text-xl font-semibold text-gray-800 dark:text-gray-200`}>1. Download the Node Binary</h3>
        <p className={`${styles.landingText} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 text-base leading-relaxed`}>
            Visit the <a href="https://github.com/smartnodes-lab/tensorlink/releases" className="text-blue-500 underline hover:text-blue-700 transition-colors">Tensorlink GitHub Releases </a>
            to download the latest <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">tensorlink-miner</code> binary for your operating system. Ensure you have <strong>Python 3</strong> and a 
            <strong> CUDA-enabled GPU </strong> installed. <br /><em className="text-gray-600 dark:text-gray-400">Note:</em> Multi-GPU utilization and Windows support are not yet available.
        </p>

        <h3 className={`${styles.landingText2} mt-10 text-xl font-semibold text-gray-800 dark:text-gray-200`}>2. Node Configuration</h3>
        <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 text-base leading-relaxed`}>
            Open the <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">config.json</code> file included in the downloaded release and add the following details:
        </p>
        <ul className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5 text-base leading-relaxed`}>
            <li className="mb-2"><strong className="font-medium">Your Base Wallet Address:</strong> Used to receive rewards.</li>
            <li className="mb-2"><strong className="font-medium">Optional Idle Script Path:</strong> Specify a GPU mining script or other process to run while the worker is idle.</li>
            <li>Set <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">"mining": "true"</code> to enable mining mode if desired.</li>
        </ul>

        <h3 className={`${styles.landingText2} mt-10 text-xl font-semibold text-gray-800 dark:text-gray-200`}>3. Run the Worker Node</h3>
        <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 text-base leading-relaxed`}>
            Use the provided script to launch your node:
        </p>

        <div className="ml-10">
            <SyntaxHighlighter language="bash" className="max-w-[500px]" style={vscDarkPlus}>
                {`./run-worker.sh`}
            </SyntaxHighlighter>    
        </div>
    
        <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5`}>
            Once started, your node will begin participating in the Tensorlink network, contributing computational resources and earning rewards.
        </p>
        </div>
        <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
            <NavButton className="text-left" title="Nodes" subtitle="Previous" page="docs/nodes" />
            <NavButton title="Community" subtitle="Next" page="docs/community" />
        </div>
    </section>
);

export default Mining;
