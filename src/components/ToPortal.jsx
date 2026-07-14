import { useState } from "react";
import { Book, Server, Users } from "lucide-react";
import AnimatedLottie from "./animations/AnimatedLottie";
import useReveal from "../hooks/useReveal";

const portals = [
  {
    title: "Tensorlink Docs",
    link: "/tensorlink/docs",
    img: null, // Your lottie animation
    icon: Book,
    accent: "#4FD8C4",
    description: "Complete guides, API references, and tutorials.",
  },
  {
    title: "Running a Node",
    link: "/tensorlink/node-setup",
    img: null, // Your lottie animation
    icon: Server,
    accent: "#A78BFA",
    description: "Set up your GPU to earn rewards or run private AI.",
  },
  {
    title: "Join the Community",
    link: "https://discord.gg/aCW2kTNzJ2",
    img: null, // Your lottie animation
    icon: Users,
    accent: "#F2A65A",
    description: "Connect with developers and get support.",
  },
];

const GetStarted = () => {
  const [activeId, setActiveId] = useState(null);
  const [ref, visible] = useReveal(0.15);

  return (
    <section
      className="relative w-full py-16 sm:py-32"
      id="get-started"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="font-['JetBrains_Mono'] text-xs tracking-[0.25em] uppercase text-[#4FD8C4]">
            Get Started
          </span>
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#EDEFF4] leading-tight mt-3">
            Pick your path
          </h2>
          <p className="mt-6 text-[#9AA2B4] text-base leading-relaxed">
            Read the docs, spin up a node, or drop into the community —
            everything you need to start using distributed compute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-36">
          {portals.map((portal) => {
            const isActive = activeId === portal.title;
            const isExternal = portal.link.startsWith("http");
            const Icon = portal.icon;

            return (
              <a
                key={portal.title}
                href={portal.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setActiveId(portal.title)}
                onMouseLeave={() => setActiveId(null)}
                className="group rounded-xl px-6 py-6 flex flex-col h-full border transition-all duration-300 no-underline"
                style={{
                  borderColor: isActive ? `${portal.accent}55` : "rgba(255,255,255,0.08)",
                  background: isActive ? `${portal.accent}14` : "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="inline-flex p-2.5 rounded-lg w-fit"
                  style={{ backgroundColor: `${portal.accent}22` }}
                >
                  <Icon className="w-5 h-5" style={{ color: portal.accent }} />
                </div>

                <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#EDEFF4] mt-4">
                  {portal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9AA2B4]">
                  {portal.description}
                </p>

                {portal.img && (
                  <div className="w-24 h-24 mt-4 mx-auto">
                    <AnimatedLottie animationData={portal.img} loop={true} />
                  </div>
                )}

                <div
                  className="mt-4 pt-4 border-t border-white/5 flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:translate-x-1"
                  style={{ color: portal.accent }}
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;