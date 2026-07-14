import { useState } from "react";
import { Shield, Network, DollarSign, Bot, Sparkles, Zap } from "lucide-react";
import useReveal from "../hooks/useReveal";

const features = [
  {
    id: "personal-endpoint",
    title: "Your model, reachable anywhere",
    description:
      "Run inference on hardware you already own, then call it from your phone or laptop like any other API. Nothing leaves your network.",
    accent: "#4FD8C4",
    icon: Shield,
  },
  {
    id: "cluster",
    title: "Cluster the devices you already have",
    description:
      "Link a desktop, a laptop, even a gaming rig into one pool of GPU memory, enough to run models that wouldn't fit on any single machine.",
    accent: "#A78BFA",
    icon: Network,
  },
  {
    id: "earn",
    title: "Get rewards for GPU downtime",
    description:
      "Point idle hardware at the public network and earn rewards whenever it picks up a job.",
    accent: "#F2A65A",
    icon: DollarSign,
  },
  {
    id: "ship-apps",
    title: "Ship an app, skip the server bill",
    description:
      "Build chatbots and AI features on public network compute through a familiar API. No infrastructure to provision or maintain.",
    accent: "#4FD8C4",
    icon: Bot,
  },
  {
    id: "research",
    title: "Experiment past your hardware's limits",
    description:
      "Borrow compute from the network to try larger models and architectures than your own setup could handle alone.",
    accent: "#A78BFA",
    icon: Sparkles,
  },
  {
    id: "agents",
    title: "Let agents scale with the job",
    description:
      "Deploy autonomous, multi-step systems that pull additional compute from the network as the work demands it.",
    accent: "#F2A65A",
    icon: Zap,
  },
];

const TensorlinkApplications = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [ref, visible] = useReveal(0.15);

  return (
    <section
      className="relative w-full py-16 sm:py-24"
      id="applications"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.25em] uppercase text-[#A78BFA]">
            applications
          </span>

          <h2 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#EDEFF4] leading-tight mt-3">
            New ways 
            <br />to run AI
          </h2>

          <p className="mt-6 text-[#9AA2B4] text-base leading-relaxed">
            From private AI endpoints to community-powered compute, Tensorlink gives developers the 
            flexibility to run, scale, and share AI workloads anywhere.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {features.map((feature) => {
            const isActive = activeCard === feature.id;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveCard(feature.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="rounded-xl px-5 py-5 transition-all duration-300 border cursor-default"
                style={{
                  borderColor: isActive ? `${feature.accent}55` : "rgba(255,255,255,0.08)",
                  background: isActive ? `${feature.accent}14` : "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="inline-flex p-2.5 rounded-lg shrink-0"
                  style={{ backgroundColor: `${feature.accent}22` }}
                >
                  <feature.icon
                    className="w-5 h-5"
                    style={{ color: feature.accent }}
                  />
                </div>
                <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#EDEFF4] mt-4">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9AA2B4]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TensorlinkApplications;