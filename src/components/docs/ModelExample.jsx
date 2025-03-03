import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../style";
import { NavButton } from "..";

const codeStringUser = `  from tensorlink.roles import User

  user = User(wallet_address)

  # Max module size
  max_module_size = None

  # Creates a distributed model and connects you to Tensorlink
  d_model = user.request_job(nn.Module)
`;

const codeStringHuggingFace = `  from transformers import BertForSequenceClassification, BertTokenizer
  from torch.utils.data import DataLoader, TensorDataset
  from datasets import load_dataset

  device = "cuda" if torch.cuda.is_available() else "cpu"
  
  # Tokenizer
  tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

  def tokenize_function(example):
    return tokenizer(example["sentence1"], example["sentence2"], truncation=True) 

  # Define the DataLoader
  dataset = load_dataset("glue", "mrpc")

  # Tokenize the dataset
  tokenized_dataset = dataset.map(tokenize_function, batched=True)
  tokenized_datasets.set_format("torch", columns=["input_ids", "attention_mask", "label"])

  # Define the model (non-distributed model)
  model = BertForSequenceClassification.from_pretrained(
    "bert-base-uncased", num_labels=3
  )
`

const codeStringTrainingLoop = `  from torch.optim import AdamW
  from torch.nn import CrossEntropyLoss

  # Define optimizer and loss function
  optimizer = AdamW(d_model.parameters(), lr=5e-5)
  loss_fn = CrossEntropyLoss()

  # Training loop
  epochs = 3
  for epoch in range(epochs):
      for batch in DataLoader(tokenized_dataset["train"], batch_size=8):
          input_ids = batch["input_ids"].to(device)
          attention_mask = batch["attention_mask"].to(device)
          labels = batch["label"].to(device)

          optimizer.zero_grad()
          outputs = d_model(input_ids, attention_mask=attention_mask, labels=labels)
          loss = outputs.loss
          loss.backward()
          optimizer.step()

      print(f"Epoch {epoch + 1}/{epochs} completed")
`;

const codeStringMonitorJob = `  # Check job status
  status = user.check_job_status(d_model)
  print(f"Job Status: {status}")
`;

const codeStringEvaluateModel = `  # Evaluation
  d_model.eval()
  for batch in DataLoader(tokenized_dataset["validation"], batch_size=8):
      input_ids = batch["input_ids"].to(device)
      attention_mask = batch["attention_mask"].to(device)
      labels = batch["label"].to(device)

      with torch.no_grad():
          outputs = d_model(input_ids, attention_mask=attention_mask, labels=labels)
          predictions = outputs.logits.argmax(dim=-1)
          accuracy = (predictions == labels).float().mean()

      print(f"Accuracy: {accuracy.item()}")
`;

const ModelExample = () => (
  <section path="/docs/install" className="bg-slate-50 dark:bg-gray-900 px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
    <div className="xs:ml-10 lg:ml-0 text-left px-0 mt-20 max-w-[1280px] justify-center items-center">
      <h1 className={`${styles.subheading}`}>
        Running Your First Model
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        This section will walk you through the process of running your first model as the user. Before proceeding, ensure you have 
        completed the setup steps outlined in the Getting Started section.
      </p>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Tensorlink utilizes PyTorch, and as a result is also compatible with libraries built on top of PyTorch 
        like HuggingFace. In this example, we will set up a basic LLM using HuggingFace and Tensorlink for accelerated
        training.
      </p>

      <h1 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Model setup
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-8 mt-5`}>
        The following example will set up a basic environment for training a BertModel provided by HuggingFace, a popular transformer library for PyTorch. Again, Tensorlink is designed
        to work with any PyTorch neural network so you may choose to train any model you wish.
        The only limitations to the size of the model you can run is the available memory on your device.
      </p>
      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringHuggingFace}
        </SyntaxHighlighter>
      </div>

      <h1 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Distributed model setup
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Now that we have setup the basic model and dataset, we can now connect to Tensorlink and create our
        distributed model request. Make sure the distributed request comes after instantiating your model and 
        before running the training segment of your code.
      </p>
      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringUser}
        </SyntaxHighlighter>
      </div>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Once this is done, a job request should have been created and you'll be successfully connected to Tensorlink.
      </p>

      <h1 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Training the Distributed Model
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        Now that the model is connected, you can proceed with training. Below is an example of the training loop, where the model is distributed across Tensorlink nodes for accelerated computation.
      </p>
      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringTrainingLoop}
        </SyntaxHighlighter>
      </div>

      <h1 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Monitor the Training Process
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        You can monitor the progress of your distributed training job using Tensorlink’s job status functionality.
      </p>
      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringMonitorJob}
        </SyntaxHighlighter>
      </div>

      <h1 className={`${styles.subheading2} mt-10 pt-10 border-t dark:border-t-white border-t-black`}>
        Evaluating the Model
      </h1>
      <p className={`${styles.landingText2} sm:px-10 text-lg dark:text-gray-300 text-black mb-5 mt-5`}>
        After training is complete, you can evaluate the performance of the trained model.
      </p>
      <div className="flex justify-center w-full">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="syntax-highlighter justify-center items-center sm:mx-20 max-w-[275px] xs:max-w-[350px] ss:max-w-[515px] sm:max-w-[700px] md:max-w-full">
          {codeStringEvaluateModel}
        </SyntaxHighlighter>
      </div>

    </div>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton className="text-left" title="Wallet Setup" subtitle="Previous" page="docs/wallet" />
      {/* <NavButton className="sm:mt-20" title="" subtitle="Next" path="docs/nodes" /> */}
    </div>
  </section>
)

export default ModelExample
