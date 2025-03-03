import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../style";
import { NavButton } from "..";

const exampleCode = `
"""
Example of running Tensorlink node types on a local network to distribute a machine learning task.

This script shows how three nodes—ValidatorNode, UserNode, and WorkerNode—work together on a local network.
  - ValidatorNode: Validates jobs.
  - UserNode: Initiates and coordinates jobs.
  - WorkerNode: Processes and trains the model.

You can use binaries or the tensorlink.nodes contents to set up this workflow on multiple devices. This example runs in a single environment for simplicity.
"""

if __name__ == "__main__":
    # Launch Nodes
    validator = ValidatorNode(upnp=False, off_chain_test=True, local_test=True, print_level=logging.DEBUG)
    user = UserNode(upnp=False, off_chain_test=True, local_test=True, print_level=logging.INFO)
    worker = WorkerNode(upnp=False, off_chain_test=True, local_test=True, print_level=logging.DEBUG)

    # Connect roles
    val_key, val_host, val_port = validator.send_request("info", None)
    worker.send_request("connect_node", (val_key, val_host, val_port))
    user.send_request("connect_node", (val_key, val_host, val_port))

    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = Dummy()

    distributed_model, distributed_optimizer = user.create_distributed_model(
        model=model,
        n_pipelines=PIPELINES,
        optimizer_type=torch.optim.Adam,
        dp_factor=1
    )
    distributed_optimizer = distributed_optimizer(lr=0.001, weight_decay=0.01)

    # Train model
    for _ in range(10):
        distributed_optimizer.zero_grad()
        x = torch.zeros((1, 10), dtype=torch.float)
        outputs = distributed_model(x)
        loss = mse_loss(outputs, outputs)
        loss.backward()
        distributed_optimizer.step()

    user.cleanup()
    validator.cleanup()
    worker.cleanup()
`;

const Nodes = () => (
  <section className="bg-slate-50 dark:bg-gray-900 px-5 sm:px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="text-left justify-center items-center sm:max-w-[1280px]">
      <h1 className={`${styles.subheading} mt-10`}>Running a Node</h1>
      <p className={`${styles.landingText2} sm:px-5 md:px-10  dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink is designed for deployment on local, private, and public networks. Its greatest potential lies in the public network, 
        where contributors from around the globe share computational resources to drive innovation. By running a <strong>Worker Node</strong>, 
        you contribute to cutting-edge machine learning and computational projects while earning rewards for your contributions.
      </p>

      <h2 className={`${styles.subheading2} mt-10`}>Why Run a Tensorlink Node?</h2>
      <ul className={`${styles.landingText2} sm:px-5 md:px-10  dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5`}>
        <li><strong>Support Innovation:</strong> Join a global effort to power machine learning and computational research.</li>
        <li><strong>Earn Rewards:</strong> Monetize your idle GPU power by running PyTorch jobs for others.</li>
        <li><strong>Be Part of the Community:</strong> Collaborate with a decentralized network pushing the limits of technology.</li>
      </ul>

      <h2 className={`${styles.subheading2} mt-10`}>Getting Started</h2>

      <h3 className={`${styles.landingText2} mt-5`}>1. Download the Node Binary</h3>
      <p className={`${styles.landingText} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5`}>
        Visit the <a href="https://github.com/smartnodes-lab/tensorlink/releases" className="text-blue-500 underline">Tensorlink GitHub Releases </a>
        to download the latest <code>tensorlink-miner</code> binary for your operating system. Ensure you have <strong>Python 3</strong> and a 
        <strong> CUDA-enabled GPU </strong> installed. <br /><em>Note:</em> Multi-GPU utilization and Windows support are not yet available.
      </p>

      <h3 className={`${styles.landingText} mt-5`}>2. Set Up the Configuration</h3>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5`}>
        Open the <code>config.json</code> file included in the downloaded release and add the following details:
      </p>
      <ul className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5`}>
        <li><strong>Your Base Wallet Address:</strong> Used to receive rewards.</li>
        <li><strong>Optional Idle Script Path:</strong> Specify a GPU mining script or other process to run while the worker is idle.</li>
        <li>Set <code>"mining": "true"</code> to enable mining mode if desired.</li>
      </ul>

      <h3 className={`${styles.landingText} mt-5`}>3. Run the Worker</h3>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5`}>
        Use the provided script to launch your node:
      </p>
      <SyntaxHighlighter language="bash" className="max-w-[500px]" style={vscDarkPlus}>
        {`./run-worker.sh`}
      </SyntaxHighlighter>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5`}>
        Once started, your node will begin participating in the Tensorlink network, contributing computational resources and earning rewards.
      </p>
    
      <h2 className={`${styles.subheading2} md:pt-10 pt-5 border-t border-t-black dark:border-t-white mt-10`}>Node Types</h2>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5`}>
      Tensorlink utilizes three primary node classes, each tailored to fulfill distinct roles within a distributed machine learning workflow. 
        These nodes collaborate to ensure efficient coordination, resource sharing, and job validation. Nodes can operate on a public, smart 
        contract-secured network for shared access or on a private network for localized jobs on dedicated machines.
      </p>
      <ul className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5`}>
        <li>
          <code>UserNode</code>: Initiates jobs and facilitates communication to works for distributed models.
        </li>
        <li>
          <code>WorkerNode</code>: Processes model segments and provides training or inference outputs to the UserNode.
        </li>
        <li>
          <code>ValidatorNode</code>: Ensures job security, validates tasks, and upholds network integrity.
        </li>
      </ul>

      <h2 className={`${styles.subheading2} mt-10`}>Network</h2>
      <p className={`${styles.landingText2} sm:px-5 md:px-10  dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink nodes by default operate on a public network, providing users access to GPUs. For specialized use cases, 
        nodes can be configured to operate on private networks, enabling custom workflows for local or organization-specific jobs.
        For most use-cases, all that is required is a <code>UserNode</code>, whose usage is described in the upcoming{" "}
        <a href="model-example" className="text-blue-500 underline">Running a Model section</a>.
      </p>

    </div>

    <SyntaxHighlighter language="python" className="flex overflow-scroll max-w-full" style={vscDarkPlus}>
      {exampleCode}
    </SyntaxHighlighter>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton title="Installation" subtitle="Previous" page="docs/install" />
      <NavButton title="Wallet Config" subtitle="Next" page="docs/wallet" />
    </div>
  </section>
);

export default Nodes;
