import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../style";
import { NavButton } from "..";

const exampleCode = `
if __name__ == "__main__":
    # Launch Nodes
    validator = ValidatorNode(upnp=False, off_chain_test=False, local_test=False, print_level=logging.DEBUG)
    user = UserNode(upnp=False, off_chain_test=False, local_test=False, print_level=logging.INFO)
    worker = WorkerNode(upnp=False, off_chain_test=False, local_test=False, print_level=logging.DEBUG)

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
      <h1 className={`${styles.subheading} mt-10`}>Nodes</h1>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink utilizes three primary node classes, each tailored to fulfill distinct roles within a distributed machine learning workflow. 
        These nodes collaborate to ensure efficient coordination, resource sharing, and job validation. Nodes can operate on a public, smart 
        contract-secured network for shared access or on a private network for localized jobs on dedicated machines.
      </p>
      <h2 className={`${styles.subheading2} mt-10`}>Node Types</h2>
      <p className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink nodes work collaboratively to enable distributed training, managing node communication and synchronization behind the scenes:
      </p>
      <ul className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5 list-disc ml-5`}>
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
      <p className={`${styles.landingText2} sm:px-5 md:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink nodes by default operate on a public network, proving users access to GPUs. For specialized use cases, 
        nodes can be configured to operate on private networks, enabling custom workflows for local or organization-specific jobs.
      </p>

      <h2 className={`${styles.subheading2} mt-5`}>Running a Node</h2>
      <p className={`${styles.landingText} mt-5`}> Coming soon...</p>
      {/* <SyntaxHighlighter language="python" style={vscDarkPlus}>
        {exampleCode}
      </SyntaxHighlighter> */}
    </div>
    <div className="flex mt-10 mb-10 justify-between w-full">
      <NavButton title="Wallet Config" subtitle="Previous" page="docs/wallet" />
      <NavButton title="Model Setup" subtitle="Next" page="docs/model-example" />
    </div>
  </section>
);

export default Nodes;
