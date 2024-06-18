import { ai, workflow, job, telescope, blocks , community, linkedin, twitter, airbnb, binance, coinbase, dropbox } from "../assets";
import { MdHome } from "react-icons/md";

export const overview = {
  info: 
      "Smartnodes is create super networks whose combined power will "
}

export const portals = [
  {
    title: "User Guide",
    link: "docs/install",
    img: blocks,
  },
  {
    title: "Running a Worker",
    link: "docs/worker",
    img: ai,
  },
  {
    title: "Running a Validator",
    link: "docs/validator",
    img: workflow,
  },
  {
    title: "Join the Community",
    link: "tensorlink/community",
    img: community,
  }
]

export const sideLinks = [
  {
    title: "Smartnodes",
    links: [
      {
        name: "Home",
        id: "smartnodes",
        icon: MdHome
      },
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
        name: "Docs",
        id: "docs",
        icon: MdHome,
        sublinks: [
          { id: "overview", name: "Overview"},
          { id: "install", name: "Installation"},
          { id: "wallet", name: "Wallet Config"},
          { id: "model-example", name: "Model Setup"}
        ]
      }
    ]
  },
  {
    title: "Links",
    links: [
      {
        name: "GitHub",
        id: "https://github.com/smartnodes-lab"
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
    id: "tensorlink",
    title: "tensorlink",
  },
  {
    id: "app",
    title: "Launch App",
  },
  {
    id: "git",
    title: "GitHub"
  },
];

export const features = [
  {
    id: "1",
    title: "Plug-and-Play Integration",
    content: "Seamlessly integrate PyTorch models with Tensorlink and tap into powerful distributed computing resources. No complex setup required."
  },
  {
    id: "2",
    title: "Decentralized Model Training",
    content: "Tensorlink distributes models across the network, reducing reliance on costly centralized data centers and minimizing potential bottlenecks through parallelization."
  },
  {
    id: "3",
    title: "Security",
    content: "Tensorlink leverages Ethereum to ensure the integrity of the network and incentivize users. Proof-of-learn mechanisms maintain worker reputations.",
  },
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
      "Optimize your machine learning workflows with Tensorlink-AI, our cutting-edge PyTorch model offloading solution. Seamlessly distribute inference and training tasks, maximizing model scalability and minimizing costs.",
    name: "PyTorch Model Offloading",
    title: "tensorlink",
    img: ai,
    blur: false,
    link: "/tensorlink"
  },
  {
    id: "feedback-2",
    content: "Nice try buddy, you're not getting this information just yet!",
    name: "Something very cool.",
    title: "",
    // content: 
    //   "Explore the depths of space with StarNet, a groundbreaking distributed radio telescope array positioned to be the world's largest and highest-resolution radio telescope, capturing unparalleled imaging and even potential transmission capabilities. (In Progress)",
    // name: "The Distributed Radio Telescope",
    // title: "StarNet",
    img: telescope,
    blur: true,
    link: ""
  },
  {
    id: "feedback-3",
    content: "Nice try buddy, you're not getting this information just yet!",
    name: "Something very cool.",
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
      // {
      //   name: "Content",
      //   link: "https://www.framework.exchange/content/",
      // },
      // {
      //   name: "How it Works",
      //   link: "https://www.framework.exchange/how-it-works/",
      // },
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
    title: "Useful Links",
    links: [
      {
        name: "Twitter",
        icon: twitter,
        link: "https://www.twitter.com/smartnodes_lab",
      },
      {
        name: "LinkedIn",
        icon: linkedin,
        link: "https://www.linkedin.com/company/tensorlink/",
      },
      {
        name: "GitHub",
        icon: linkedin,
        link: "https://github.com/smartnodes-lab"
      }
    ]
  },
  // {
  //   title: "Community",
  //   links: [
  //     // {
  //     //   name: "Help Center",
  //     //   link: "https://www.framework.exchange/help-center/",
  //     // },
  //     // {
  //     //   name: "Partners",
  //     //   link: "https://www.framework.exchange/partners/",
  //     // },
  //     // {
  //     //   name: "Suggestions",
  //     //   link: "https://www.framework.exchange/suggestions/",
  //     // },
  //     // {
  //     //   name: "Blog",
  //     //   link: "https://www.framework.exchange/blog/",
  //     // },
  //     // {
  //     //   name: "Newsletters",
  //     //   link: "https://www.framework.exchange/newsletters/",
  //     // },
  //   ],
  // },
  {
    title: "Donate",
    links: [
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
  // {
  //   id: "social-media-1",
  //   icon: instagram,
  //   link: "https://www.instagram.com/",
  // },
  // {
  //   id: "social-media-2",
  //   icon: facebook,
  //   link: "https://www.facebook.com/",
  // },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/smartnodes_lab",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/tensorlink/",
  },
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