import styles from "../style";
import { useState } from "react";
import { Zap, DollarSign, Cpu } from "lucide-react";

const WhyTensorlink = () => {
  const [activeCard, setActiveCard] = useState('simplicity');

  const features = [
    {
      id: 'simplicity',
      title: "Simplicity",
      description: "Unlike existing distributed computing solutions, which require extensive workflow customization and setup, Tensorlink offers a simple, plug-and-play solution integrated with PyTorch, enabling straightforward acceleration of neural network training.",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      icon: Zap
    },
    {
      id: 'cost',
      title: "Cost",
      description: "Through on-chain reward mechanisms, workers are incentivized to complete jobs, reducing costs and making cutting-edge models more accessible to researchers, startups, and individual developers.",
      color: "bg-red-400",
      hoverColor: "hover:bg-red-500",
      icon: DollarSign
    },
    {
      id: 'power',
      title: "Power",
      description: "We aim to deliver and aggregate computational resources that rival even the most powerful supercomputers. With Tensorlink, you can tap into a vast network of computing power at your fingertips.",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      icon: Cpu
    }
  ];

  return (
    <section className="relative z-20 mt-20 w-full overflow-hidden py-10" id="why-tensorlin">
      {/* Enhanced background with gradient and pattern */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-zinc-300 dark:to-gray-900 pointer-events-none"></div>
      <div 
        className="absolute top-0 left-0 w-full h-full z-5 opacity-5 dark:opacity-10 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, rgba(120, 120, 120, 0.8) 2px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-14 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column with heading and description */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Why<br />
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-red-400">
                Tensorlink?
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-xl">
              Tensorlink harnesses idle computers to efficiently process neural networks in PyTorch,
              providing an economical and user-friendly alternative to hosting services.
            </p>
            
            <div className="mt-12">
              <a href="docs">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          
          {/* Right column with feature cards */}
          <div className="flex-1">
            <div className="space-y-6">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className={`rounded-lg p-6 transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                    activeCard === feature.id 
                      ? `${feature.color} shadow-lg transform -translate-x-2` 
                      : 'bg-zinc-100 dark:bg-gray-800 hover:shadow-md'
                  }`}
                  onMouseEnter={() => setActiveCard(feature.id)}
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${activeCard === feature.id ? 'bg-zinc-100 bg-opacity-20' : feature.color}`}>
                      <feature.icon className={`w-6 h-6 ${activeCard === feature.id ? 'text-white' : 'text-white'}`} />
                    </div>
                    <h3 className={`text-xl font-bold ml-4 ${activeCard === feature.id ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className={`mt-4 ${activeCard === feature.id ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTensorlink;
