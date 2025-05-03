import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles, { layout } from "../../../style";
import { NavButton } from "../..";

const codeStringPythonApi = `import requests

https_serv = "https://smartnodes-lab.ddns.net/tensorlink-api"  # May not work with all clients 
http_serv = "http://smartnodes-lab.ddns.net:443/tensorlink-api"  # Use this if HTTPS fails

payload = {
    "hf_name": "Qwen/Qwen2.5-7B-Instruct",
    "message": "Describe the role of AI in medicine.",
    "max_length": 1024,
    "max_new_tokens": 256,
    "temperature": 0.7,
    "do_sample": True,
    "num_beams": 4,
    "history": [
        {"role": "user", "content": "What is artificial intelligence?"},
        {"role": "assistant", "content": "Artificial intelligence refers to..."}
    ]
}

response = requests.post(f"{http_serv}/generate", json=payload)
print(response.json())`;

const codeStringJavaScriptApi = `// Available endpoints (status may vary):
const https_serv = "https://smartnodes-lab.ddns.net/tensorlink-api";  // May not work with all clients
const http_serv = "http://smartnodes-lab.ddns.net:443/tensorlink-api"; // Use this if HTTPS fails

const response = await fetch(http_serv + '/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    hf_name: modelParams.model,
    message: userMessage.content,
    max_length: modelParams.maxLength,
    max_new_tokens: modelParams.maxNewTokens,
    temperature: modelParams.temperature,
    do_sample: modelParams.doSample,
    num_beams: modelParams.numBeams,
    history: messages.map(msg => ({ 
      role: msg.role, 
      content: msg.content 
    })),
  }),
});

const result = await response.json();
console.log(result);`;

const ApiExample = () => (
  <section className="px-6 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
      <div className="text-left justify-center items-center sm:max-w-[1280px]">
      <div className="flex items-center ml-1 mb-6 mt-16 xs:px-0 px-24">
        <div className="bg-red-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h1 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Inference APIs with Tensorlink</h1>
      </div>
      
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 px-24`}>
        Tensorlink provides a lightweight API for distributed inference, offering on-demand access to popular pre-trained models from Hugging Face. 
        It supports both free public inference on a rotating set of models and paid requests for dedicated jobs and custom services. 
        The list of currently supported public models is maintained on our GitHub page and updated regularly to reflect availability and usage trends. 
        Below is the most recent set of free, publicly accessible models:
      </p>

      <ul className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 px-24 list-disc pl-20`}>
        <li><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">Qwen/Qwen2.5-7B-Instruct</code> - General Purpose Language Model</li>
      </ul>

      <div className="bg-yellow-50 mt-7 p-4 rounded-lg border-l-4 border-yellow-500 mx-10">
        <p className="text-yellow-800 dark:text-black font-medium">
          ⚠️ A wider selection of much larger models will become available as more nodes join the network. Sorry for the inconvenience.
        </p>
      </div>
      
      <p className={`${styles.landingText2} sm:px-5 md:px-10 dark:text-gray-300 text-black mb-5 mt-5 xs:px-0 px-24`}>
        A good example of the API in action is this <a href="https://smartnodes.ca/tensorlink/localhostGPT" className="text-blue-600 dark:text-blue-400 underline"> demo</a> that
        queries an LLM using Tensorlink to run a simple web-based chatbot.
      </p>

      <div className="flex items-center mb-6 ml-1 mt-16 xs:px-0 px-24">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h2 className="text-lg sm:text-2xl ml-3 dark:text-zinc-100 font-bold">Example: API request from Python (with requests)</h2>
      </div>
      
      <div className="max-w-[250px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-full xs:ml-0 ml-24">
        <SyntaxHighlighter language="python" className="flex overflow-scroll max-w-full" style={vscDarkPlus}>
          {codeStringPythonApi}
        </SyntaxHighlighter>
      </div>

      <div className="flex items-center mb-6 ml-1 mt-16 xs:px-0 px-24">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h2 className="text-lg sm:text-2xl ml-3 dark:text-zinc-100 font-bold">Example: API request with JavaScript (Fetch API)</h2>
      </div>
      
      <div className="max-w-[250px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-full xs:ml-0 ml-24">
        <SyntaxHighlighter language="javascript" className="flex overflow-scroll max-w-full" style={vscDarkPlus}>
          {codeStringJavaScriptApi}
        </SyntaxHighlighter>
      </div>

      <div className="flex items-center mb-6 ml-1 mt-16 xs:px-0 px-24">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h2 className="text-lg sm:text-2xl ml-3 dark:text-zinc-100 font-bold">API Parameters</h2>
      </div>
      
      <div className="overflow-x-auto sm:px-5 md:px-10 mt-5 mb-10 xs:block hidden">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 ">
          <thead>
            <tr>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold dark:text-gray-200 text-gray-900">Field</th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold dark:text-gray-200 text-gray-900">Type</th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold dark:text-gray-200 text-gray-900">Required</th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold dark:text-gray-200 text-gray-900">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">hf_name</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">string</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✓</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">Name of the Hugging Face model</td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">message</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">string</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✓</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">The user's input prompt or question</td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">max_length</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">int</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✕</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">Total token limit (input + output)</td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">max_new_tokens</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">int</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✕</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">Maximum number of tokens to generate</td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">temperature</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">float</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✕</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">Sampling temperature (e.g., <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">0.7</code> = more creative)</td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">do_sample</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">boolean</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✕</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">Whether to sample (<code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">True</code>) or use greedy decoding</td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">num_beams</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">int</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✕</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">Beam search width (<code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">1</code> for greedy, <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">&gt;1</code> for diversity)</td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700"><code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">history</code></td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">array</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">✕</td>
              <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700">Conversation history (<code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded"></code>)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-100 mx-16 dark:bg-blue-900 p-4 rounded-lg mt-8 mb-12 border-l-4 border-blue-500">
        <p className="text-blue-800 dark:text-blue-200 font-medium mb-2">
          <strong>⚠️ Note:</strong>
        </p>
        <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
          <li>Currently limited to select HF models (listed in <code className="bg-blue-200 dark:bg-blue-800 px-1 py-0.5 rounded">tensorlink/ml/models.json</code>)</li>
          <li>Custom models and more diverse selection coming soon...</li>
          <li>Keep histories concise for faster response time.</li>
          <li>Model loading and generation performance depends on network conditions and node availability.</li>
        </ul>
      </div>
    </div>

    <div className="flex mt-10 mb-10 justify-between max-w-[1300px] w-full">
      <NavButton className="text-left" title="Models" subtitle="Previous" page="tensorlink/docs/model" />
      <NavButton title="Nodes" subtitle="Next" page="tensorlink/docs/nodes" />
    </div>
  </section>
);

export default ApiExample;
