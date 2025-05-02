import { ai, reddit, job, telescope, blocks , community, linkedin, twitter, airbnb, binance, discord, coinbase, dropbox } from "../assets";
import { MdHome } from "react-icons/md";

export const overview = {
  info: "Smartnodes fuels distributed networks and tools designed to parallelize workflows and aggregate resources, seamlessly merging the capabilities of smaller devices into much more powerful data processors. The result is a suite of cost-effective, user-friendly tools tailored for advanced computational and data-intensive tasks, including machine learning, computational physics, and much more."
}

export const portals = [
  {
    title: "Tensorlink Docs",
    link: "docs",
    img: blocks,
  },
  {
    title: "Running a Node (mining)",
    link: "docs/mining",
    img: ai,
  },
  // {
  //   title: "Running a Validator",
  //   link: "docs/validator",
  //   img: workflow,
  // },
  {
    title: "Join the Community",
    link: "docs/community",
    img: community,
  }
]

export const sideLinks = [
  {
    title: "Smartnodes",
    links: [
      {
        name: "Home",
        id: "",
        icon: MdHome
      },
      {
        name: "Dashboard",
        id: "app",
      }
    ]
  },
  {
    title: "tensorlink",
    links: [
      {
        name: "Home",
        id: "tensorlink",
        icon: MdHome,
      },
      {
        name: "localhostGPT",
        id: "localhostGPT",
        icon: MdHome
      },
      {
        name: "Documentation",
        id: "docs",
        icon: MdHome,
        sublinks: [
          { id: "overview", name: "Overview"},
          { id: "install", name: "Installation"},
          { id: "model-example", name: "Models & APIs"},
          { id: "nodes", name: "Nodes"},
          { id: "mining", name: "Mining"},
          // { id: "wallet", name: "Wallet Config"},
        ]
      },
    ]
  },
  {
    title: "Links",
    links: [
      {
        name: "GitHub",
        id: "https://github.com/smartnodes-lab"
      },
      {
        name: "X",
        id: "https://x.com/smartnodes_lab"
      },
      {
        name: "Discord",
        id: "https://discord.gg/aCW2kTNzJ2"
      }
    ]
  }
]

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "networks",
    title: "Networks",
    networks: [
      {
        network: "Tensorlink",
        link: "tensorlink"
      }
    ]
  },
  {
    id: "app",
    title: "Dashboard"
  },
  {
    id: "docs",
    title: "Docs",
  }
];

export const features = [
  {
    id: "1",
    title: "Plug-and-Play Integration",
    content: "Easily tap into distributed computational resources for training and inference in PyTorch. Tensorlink provides wrappers that integrate with existing workflows, along with APIs to connect your applications to advanced AI models."
  },
  {
    id: "2",
    title: "Distributed Execution Engine",
    content: "Scale effortlessly across a decentralized mesh of worker nodes. Tensorlink shards and distributes workloads to handle larger models, reduce training time, and adapt dynamically to node availability."
  },
  {
    id: "3",
    title: "Autonomous Coordination",
    content: "Validator nodes coordinate and verify job execution across worker nodes. A rotating network state management system promotes reliable validator behavior and ensures decentralized oversight."
  }
  
  
  // {
  //   id: "",
  //   title: "Accessibility",
  //   content: "Lower financial and technical barriers to AI training, making advanced computational resources more accessible and affordable for all.",
  // }
  //     title: "Trustless, Automated, Decision-Making",
  //     content:
  //       "Machine-to-Human interfaces that enhance decentralized and automated systems using \
  //       the power of collective human intelligence.",
  //     expanded_content: [
  //       "Allows both people and machines to utilize the collective intelligence of humans \
  //       via API calls.",
  //       "Potential use-cases for moderating decentralized apps (e.g. social media, insurance, etc), \
  //       optimizing AI models, and much more!",
  ];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Optimize your machine learning workflows with Tensorlink, our cutting-edge solution for PyTorch model offloading. Seamlessly distribute training and inference tasks to maximize model scalability while significantly reducing costs.",
    name: "Distributed PyTorch Models",
    title: "Tensorlink",
    img: blocks,
    blur: false,
    link: "/tensorlink"
  },
  {
    id: "feedback-2",
    content: "",
    name: "",
    title: "",
    // content: 
    //   "Explore the depths of space with StarNet, a groundbreaking distributed radio telescope array positioned to be the world's largest and highest-resolution radio telescope, capturing unparalleled imaging and even potential transmission capabilities. (In Progress)",
    // name: "The Distributed Radio Telescope",
    // title: "Starnet",
    img: telescope,
    blur: true,
    link: ""
  },
  {
    id: "feedback-3",
    content: "",
    name: "",
    title: "",
    // content:
    //   "Tailored machine-human APIs for empowering decentralized and automated systems with trust-minimized workflow management and decision-making. (TBD)",
    // name: "for dApps and Automation",
    // title: "Collective Intelligence",
    img: job,
    blur: true,
    link: ""
  },
  // {
  //   id: "feedback-3",
  //   content:
  //     "The Chainspace vision extends to creating a global network where individuals can delegate tasks, form organizations, and collaborate on content creation.",
  //   name: "Shaping an Inclusive Future",
  //   title: "Decentralized Workforce",
  //   img: job,
  // },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Litepaper",
        link: "https://github.com/smartnodes-lab/smartnodes",
      },
      {
        name: "GitHub",
        icon: linkedin,
        link: "https://github.com/smartnodes-lab"
      },
      // {
      //   name: "Create",
      //   link: "https://www.framework.exchange/create/",
      // },
      // {
      //   name: "Explore",
      //   link: "https://www.framework.exchange/explore/",
      // },
      // {
      //   name: "Terms & Services",
      //   link: "https://www.framework.exchange/terms-and-services/",
      // },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "X",
        icon: twitter,
        link: "https://www.x.com/smartnodes_lab",
      },
      {
        name: "Discord",
        icon: discord,
        link: "https://discord.gg/aCW2kTNzJ2",
      },
      // {
      //   name: "LinkedIn",
      //   icon: linkedin,
      //   link: "https://www.linkedin.com/company/smartnodes-lab",
      // }
    ]
  },
  {
    title: "Donate",
    links: [
      {
        name: "Buy us a Coffee",
        link: "https://buymeacoffee.com/smartnodes"
      },
      {
        name: "Bitcoin: bc1qg6klkt3z77wdlgusz5lujulr5ezayvqsw8m4r5",
        link: "bc1qg6klkt3z77wdlgusz5lujulr5ezayvqsw8m4r5",
      },
      {
        name: "Ethereum: 0x1Bc3a15dfFa205AA24F6386D959334ac1BF27336",
        link: "0x1Bc3a15dfFa205AA24F6386D959334ac1BF27336",
      },
      {
        name: "Solana: 3urnEem9JcdYB7t5ysVpk62fh2M8cU6RsmM9PoJaDiJV"
      }
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-4",
    icon: discord,
    link: "https://discord.gg/aCW2kTNzJ2",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/smartnodes_lab",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/smartnodes-lab",
  }
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];