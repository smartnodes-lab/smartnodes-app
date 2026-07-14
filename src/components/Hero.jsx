import { Cloud, Lock, ArrowRight, Github } from "lucide-react";
import useReveal from "../hooks/useReveal";


const paths = [
  {
    id: "cloud",
    icon: Cloud,
    accent: "#4FD8C4",
    tag: "01 · Public network",
    title: "A decentralized cloud for AI",
    description:
      "Pool your GPUs with thousands of others into one distributed cluster. Send inference or training jobs to the network just like any cloud API, but powered by community-owned hardware instead of centralized data centers.",
    bullets: [
      "OpenAI-compatible chat completions endpoint",
      "Jobs are sharded across independent peers",
      "Idle hardware earns rewards for the network",
    ],
  },
  {
    id: "local",
    icon: Lock,
    accent: "#A78BFA",
    tag: "02 · Private network",
    title: "Reach your own models from anywhere",
    description:
      "Run a model on hardware you own, then call it securely from your phone, laptop, or a team's machine. Your weights and your data never leave your network.",
    bullets: [
      "Point-to-point tunnel, no third-party relay",
      "Same PyTorch and API interface as the public network",
      "No logging of prompts or outputs",
    ],
  },
];

const Hero = () => {
  const [pathsRef, pathsVisible] = useReveal(0.1);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ambient network mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-[tl-fade-up_0.6s_ease-out]">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#4FD8C4]" />
          <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.25em] uppercase text-[#8B93A7]">
            Peer-to-peer AI infrastructure
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#A78BFA]" />
        </div>

        {/* Headline */}
        <h1 className="text-center font-['Space_Grotesk'] font-bold text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-gray-900 dark:text-[#EDEFF4] max-w-4xl mx-auto animate-[tl-fade-up_0.7s_ease-out_0.05s_both]">
          Become
          <br />
          <span className="bg-gradient-to-r from-[#4FD8C4] to-[#A78BFA] bg-clip-text text-transparent">
            your own cloud.
          </span>
        </h1>

        <p className="text-center text-[#9AA2B4] text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed animate-[tl-fade-up_0.7s_ease-out_0.1s_both]">
          Tensorlink is a peer-to-peer library and network for running, training, and serving PyTorch models across 
          community-owned hardware. Turn your own devices into private AI endpoints you can reach from anywhere, or 
          access compute from the public network when you need additional capacity.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-9 animate-[tl-fade-up_0.7s_ease-out_0.15s_both]">
          <a href="/tensorlink/docs" target="_blank" rel="noopener noreferrer">
            <button className="group flex items-center gap-2 px-6 py-3 bg-[#EDEFF4] hover:bg-white text-[#0A0D13] font-medium rounded-full transition-all">
              Read the docs
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </a>
          <a
            href="https://github.com/smartnodes-lab/tensorlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 text-[#EDEFF4] font-medium rounded-full border border-white/15 transition-all">
              <Github size={16} />
              View on GitHub
            </button>
          </a>
        </div>

        {/* The two primary use cases */}
        <div
          ref={pathsRef}
          className="grid md:grid-cols-2 gap-5 mt-20 max-w-5xl mx-auto"
        >
          {paths.map((path, i) => (
            <div
              key={path.id}
              style={{
                transitionDelay: pathsVisible ? `${i * 120}ms` : "0ms",
                borderColor: `${path.accent}33`,
              }}
              className={`relative rounded-2xl border bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 transition-all duration-700 hover:bg-white/[0.05] ${
                pathsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5"
                style={{ backgroundColor: `${path.accent}1F` }}
              >
                <path.icon size={20} style={{ color: path.accent }} />
              </div>

              <span
                className="font-['JetBrains_Mono'] text-[11px] tracking-[0.15em] uppercase ml-2"
                style={{ color: path.accent }}
              >
                {path.tag}
              </span>

              <h3 className="font-['Space_Grotesk'] font-semibold text-2xl text-[#EDEFF4] mt-2 mb-3">
                {path.title}
              </h3>

              <p className="text-sm text-[#9AA2B4] leading-relaxed mb-5">
                {path.description}
              </p>

              <ul className="space-y-2">
                {path.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[13px] text-[#B7BECC]"
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: path.accent }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes used across the hero. Scoped by unique names so they
          never collide with animations defined elsewhere in the app. */}
      <style>{`
        @keyframes tl-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[tl-fade-up"] { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
