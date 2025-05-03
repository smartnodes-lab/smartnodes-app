import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles, { layout } from "../../../style";
import { NavButton } from "../..";

const privateNetworkExample = `from tensorlink import UserNode, ValidatorNode, WorkerNode, DistributedModel
import torch, logging, time
from transformers import AutoTokenizer

# Local setup parameters
LOCAL = True          # Force localhost-only connections (127.0.0.1)
UPNP = not LOCAL      # Disable UPnP to prevent external exposure
OFFCHAIN = LOCAL      # Use off-chain job coordination (fully private)

model_name = 'TinyLlama/TinyLlama-1.1B-Chat-v1.0'

# Run on Device 1
user = UserNode(upnp=UPNP, off_chain_test=OFFCHAIN, local_test=LOCAL, print_level=logging.DEBUG)

# Run on Device 1 (will remove the need for also spawning a validator soon!)
validator = ValidatorNode(upnp=UPNP, off_chain_test=OFFCHAIN, local_test=LOCAL, print_level=logging.DEBUG)

# Run on Device 2+
worker = WorkerNode(upnp=UPNP, off_chain_test=OFFCHAIN, local_test=LOCAL, print_level=logging.DEBUG)

# Connect worker and user to validator manually
val_key, val_host, val_port = validator.send_request("info", None)  # Get device information

# Connected to main device for each other device
worker.connect_node(val_host, val_port, node_id=val_key)
user.connect_node(val_host, val_port, node_id=val_key)

# Request a distributed inference model
distributed_model = DistributedModel(model_name, training=False, node=user)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Perform local inference loop on the user's device
for _ in range(5):
    input_text = "You: Hello Bot."
    inputs = tokenizer(input_text, return_tensors="pt", padding=True, truncation=True)
    with torch.no_grad():
        outputs = distributed_model.generate(
            inputs,
            max_new_tokens=256,
            temperature=0.7,
            eos_token_id=tokenizer.eos_token_id,
            do_sample=True
        )
    print("Bot:", tokenizer.decode(outputs[0], skip_special_tokens=True))

# Shutdown
user.cleanup()
worker.cleanup()
validator.cleanup()`;

const Nodes = () => (
  <section className="px-5 sm:px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="text-left justify-center items-center sm:max-w-[1280px]">
      <div className="flex items-center ml-1 mb-6 mt-16">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h1 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Nodes & Communication</h1>
      </div>
      
      <p className={`${styles.landingText2} sm:px-5 md:px-10  dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink enables secure, distributed computing across local, private, and public networks. Each node, whether a 
        <strong> User</strong>, <strong>Worker</strong>, or <strong>Validator</strong>, plays a role in powering collaborative machine learning workflows.
        By default, the DistributedModel processes spawns a User node in the background, which automatically connects your workflow 
        to tensorlink's public GPU resources. However, these nodes can be customized for running local and private workloads.
      </p>

      <div className="flex items-center ml-1 mb-6 mt-16">
        <h2 className="text-lg sm:text-2xl ml-3 dark:text-zinc-100 font-bold">Node Types</h2>
      </div>
      
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

      <div className="flex items-center ml-1 mb-6 mt-16">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h2 className="text-lg sm:text-2xl ml-3 dark:text-zinc-100 font-bold">Private Workload Example</h2>
      </div>

      <p className={`${styles.landingText2} sm:px-5 md:px-10  dark:text-gray-300 text-black mb-5 mt-5`}>
        The following example demonstrates how nodes could interact for fully closed job on a group of devices,
        all simulated in the same script for this example:
      </p>    

      <div className="max-w-[250px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-full">
        <SyntaxHighlighter language="python" className="flex overflow-scroll max-w-full" style={vscDarkPlus}>
          {privateNetworkExample}
        </SyntaxHighlighter>
      </div>
    </div>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton title="Inference APIs" subtitle="Previous" page="tensorlink/docs/api" />
      <NavButton title="Mining" subtitle="Next" page="tensorlink/docs/mining" />
    </div>
  </section>
);

export default Nodes;
