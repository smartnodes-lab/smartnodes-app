import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../style";
import { NavButton } from "..";


const codeStringDistributedModel = `from tensorlink import DistributedModel
from torch.optim import AdamW
from my_custom_model import CustomModel  # Optional: Your custom model
import torch

# Option 1: Hugging Face model (Stable)
distributed_model = DistributedModel(
    model="Qwen/Qwen2.5-7B-Instruct",  # Model name (str), nn.Module, or path to weights
    training=False,                    # Set to True only if training; default is inference
    optimizer_type=None,               # Required if training; ignored in inference
    scheduler_type=None,               # Optional: pass a PyTorch scheduler class
    device="cuda",                     # "cuda", "cpu", or None (auto-detect)
    dtype=torch.float16,               # torch.float32 (default), float16, or bfloat16
    trusted=False,                     # Set True only for local/trusted jobs
    verbose=True                       # Enables debug output
)

# Option 2: Custom PyTorch model (⚠️ Experimental)
distributed_model = DistributedModel(
    model=CustomModel(),
    training=True,
    optimizer_type=AdamW
)

# Option 3: Load from local parameters file (⚠️ Experimental)
# distributed_model = DistributedModel(
#     model="path/to/model_weights.pt",  # or .bin
#     training=False,
#     optimizer_type=AdamW
# )

# Create optimizer (only needed for training)
distributed_model.create_optimizer(lr=5e-5)`;

const codeStringTrainingLoop = `# Training loop example
optimizer = distributed_model.create_optimizer(lr=5e-5)
loss_fn = torch.nn.CrossEntropyLoss()

# Training loop
epochs = 3
for epoch in range(epochs):
    for batch in dataloader:
        input_ids = batch["input_ids"].to(device)
        attention_mask = batch["attention_mask"].to(device)
        labels = batch["label"].to(device)

        optimizer.zero_grad()
        outputs = distributed_model(input_ids, attention_mask=attention_mask, labels=labels)
        loss = outputs.loss
        loss.backward()
        optimizer.step()

    print(f"Epoch {epoch + 1}/{epochs} completed")`;

const codeStringInference = `# Inference example
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen2.5-7B-Instruct")

# Prepare input
prompt = "Explain quantum computing in simple terms."
inputs = tokenizer(prompt, return_tensors="pt").to(device)

# Run inference
with torch.no_grad():
    outputs = distributed_model(**inputs)
    
# Process outputs
generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(generated_text)`;


const ModelExample = () => (
  <section className="px-6 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="xs:ml-10 lg:ml-0 ml-3 text-left mt-12 max-w-[1280px] justify-center items-center">
      <div className="flex items-center ml-1 mb-6 mt-5">
        <div className="bg-red-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h1 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Training and Inference with Tensorlink</h1>
      </div>
      
      <p className={`${styles.landingText2} sm:px-10 px-6 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        A <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">DistributedModel</code> is a wrapper that automatically connects your machine to the Tensorlink network and offloads your
        model to available Workers. It behaves like a standard PyTorch model and supports three ways to define the model:
      </p>
      
      <ul className={`list-disc pl-10 mb-8 space-y-2 xs:ml-8 px-6 ${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        <li>A Hugging Face model name (e.g. <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">"Qwen/Qwen2.5-7B-Instruct"</code>)</li>
        <li>A custom <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">torch.nn.Module</code> object</li>
        <li>A local file path to saved model parameters (<code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">.pt</code> or <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">.bin</code>)</li>
      </ul>

      <p className={`${styles.landingText2} sm:px-10 px-6 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        You can also use the distributed model to spawn an optimizer using <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">DistributedModel.create_optimizer</code>, 
        which handles remote synchronization automatically.
      </p>

      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringDistributedModel}
        </SyntaxHighlighter>
      </div>

      <div className="flex items-center mb-6 ml-2 mt-16">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h2 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Inference Example</h2>
      </div>
      <p className={`${styles.landingText2} px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        For inference, initialize your distributed model with <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">training=False</code> (default).
        This optimizes the model for inference workloads.
      </p>
      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringInference}
        </SyntaxHighlighter>
      </div>

      <div className="flex items-center mb-6 ml-5 mt-16">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h2 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Training Example</h2>
      </div>
      <p className={`${styles.landingText2} px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        If you've initialized your distributed model with <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">training=True</code>, 
        you can train it like any PyTorch model. The optimizer created with <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">create_optimizer</code> 
        method will handle the synchronization of gradients across workers. By default, Tensorlink uses Adam, however you can specify
        the optimizer type when initializing your distributed model with <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">optimize_type=AdamW</code>, 
      </p>
      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringTrainingLoop}
        </SyntaxHighlighter>
      </div>
      <div className="bg-blue-100 mx-16 dark:bg-blue-900 p-4 rounded-lg mt-8 mb-12 border-l-4 border-blue-500">
        <p className="text-blue-800 dark:text-blue-200 font-medium mb-2">
          <strong>Coming Soon:</strong> Training progress and network activity will soon be viewable through the 
          <a href="https://smartnodes.ca/app" className="underline ml-1">Smartnodes</a> dashboard (currently under development).
        </p>
      </div>
    </div>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton className="text-left" title="Getting Started" subtitle="Previous" page="docs/install" />
      <NavButton title="Nodes" subtitle="Next" page="docs/nodes" />
    </div>
  </section>
)

export default ModelExample
