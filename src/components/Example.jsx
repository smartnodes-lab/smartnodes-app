import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";
import useReveal from "../hooks/useReveal";

const examples = [
  {
    id: "api",
    label: "API",
    language: "javascript",
    title: "Call the network like any other API",
    description:
      "Point any OpenAI-compatible client at our endpoint and start generating. No API keys to manage, no infrastructure to provision.",
    link: { label: "View API docs", href: "tensorlink/docs/api" },
    code: `const response = await fetch(
  "https://tensorlink.ddns.net/tensorlink/v1/chat/completions",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "Qwen/Qwen3-14B",
      messages: [
        { role: "system", content: "You are a helpful AI assistant." },
        { role: "user", content: "Hello there!" }
      ],
      max_tokens: 256,
      temperature: 0.7,
      stream: true
    })
  }
);

const result = await response.json();
console.log(result);`,
  },
  {
    id: "pytorch",
    label: "PyTorch",
    language: "python",
    title: "Drop into PyTorch for full control",
    description:
      "Wrap any Hugging Face model in DistributedModel to shard it across the network, then train or run inference like any other PyTorch model.",
    link: { label: "Browse the library", href: "https://github.com/smartnodes-lab/tensorlink" },
    code: `from tensorlink import DistributedModel

TRAIN = True

model = DistributedModel(
    "Qwen/Qwen3-14B",
    training=TRAIN,
)

if TRAIN:
    optimizer = model.create_optimizer(
        optimizer_type="adamw",
        lr=1e-4,
        weight_decay=0.01,
    )`,
  },
  {
    id: "node",
    label: "Node",
    language: "json",
    title: "Turn your machine into a node",
    description:
      "Drop this config next to the node binary to join the public network and start earning rewards from your idle GPU.",
    link: { label: "Download node binaries", href: "tensorlink/docs/node" },
    code: `{
  "node": {
    "name": "my-node",
    "device": "cuda:0",
    "public": true
  },
  "network": {
    "endpoint": "wss://tensorlink.ddns.net/join",
    "port": 8443
  },
  "rewards": {
    "wallet": "0xYourWalletAddress"
  }
}`,
  },
];

const CodePanel = ({ label, language, code, onCopy, copied }) => (
  <div className="bg-[#0D1117] rounded-xl overflow-hidden border border-white/10 hover:border-[#4FD8C4]/40 transition-colors flex flex-col shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)] h-full">
    <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>
      <span className="font-['JetBrains_Mono'] text-xs tracking-[0.2em] uppercase text-[#6B7280]">
        {label}
      </span>
      <button
        onClick={onCopy}
        className="text-[#6B7280] hover:text-white transition-colors"
        title="Copy code"
      >
        {copied ? (
          <svg className="w-4 h-4 text-[#4FD8C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
    <pre className="p-5 overflow-x-auto flex-grow max-h-[360px] !text-[10px] sm:!text-[12px] !bg-[#0D1117]">
      <code className={`language-${language} font-['JetBrains_Mono'] !text-[10px] sm:!text-[12px] !bg-[#0D1117]`}>
        {code}
      </code>
    </pre>
  </div>
);

const Example = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [sectionRef, visible] = useReveal(0.15);

  const active = examples[activeIndex];

  useEffect(() => {
    Prism.highlightAll();
  }, [activeIndex]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(active.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectExample = (index) => {
    if (index === activeIndex) return;
    setCopied(false);
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full py-16 sm:py-24">
      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto px-4 sm:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-10">
          <span className="font-['JetBrains_Mono'] text-xs tracking-[0.25em] uppercase text-[#4FD8C4]">
            Get started
          </span>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#EDEFF4] mt-3">
            Start building with distributed AI in seconds
          </h2>
          <p className="text-[#9AA2B4] text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Talk to the network over an OpenAI-compatible endpoint, drop
            straight into PyTorch, or spin up your own node.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {examples.map((ex, i) => (
            <button
              key={ex.id}
              onClick={() => selectExample(i)}
              className="px-4 py-2 rounded-full font-['JetBrains_Mono'] text-xs tracking-[0.15em] uppercase transition-all border"
              style={{
                borderColor: i === activeIndex ? "#4FD8C480" : "rgba(255,255,255,0.08)",
                background: i === activeIndex ? "#4FD8C41F" : "rgba(255,255,255,0.02)",
                color: i === activeIndex ? "#4FD8C4" : "#9AA2B4",
              }}
            >
              {ex.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Side description, swaps with the active example */}
          <div key={active.id} className="animate-[tl-fade-up_0.4s_ease-out]">
            <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#EDEFF4]">
              {active.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#9AA2B4]">
              {active.description}
            </p>
            <a
              href={active.link.href}
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-[#4FD8C4] hover:text-[#6FE8D6] transition-colors"
            >
              {active.link.label}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <CodePanel
            label={active.label}
            language={active.language}
            code={active.code}
            onCopy={copyToClipboard}
            copied={copied}
          />
        </div>
      </div>

      <style>{`
        @keyframes tl-fade-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[tl-fade-up"] { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Example;