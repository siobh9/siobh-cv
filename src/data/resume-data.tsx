import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sean McCaffery",
  initials: "SM",
  location: "Charlotte, United States, ET",
  locationLink: "https://www.google.com/maps/place/Charlotte",
  about:
    "Software Engineer",
  summary:
    "I like to build cool, open-source things with good people.",
  avatarUrl: "https://avatars.githubusercontent.com/seanmc9 ",
  personalWebsiteUrl: "https://github.com/seanmc9",
  contact: {
    email: "sean.mccaffery9@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/seanmc9",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sean-mccaffery/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/seanmc_eth",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of North Carolina at Chapel Hill",
      degree: "Bachelor of Science Degree in Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "jk labs inc.",
      link: "https://twitter.com/jokerace_io",
      badges: ["Remote"],
      title: "Co-founder",
      start: "2022",
      end: "2024",
    },
    {
      company: "Flipside Crypto",
      link: "https://twitter.com/flipsidecrypto",
      badges: ["Remote"],
      title: "Data Engineer",
      start: "2021",
      end: "2022",
    },
    {
      company: "Millennium Advisors",
      link: "https://www.linkedin.com/company/millennium-advisors-llc/",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "2020",
      end: "2021",
    },
  ],
  skills: [
    "Solidity",
    "Python",
    "Go",
    "Java",
    "Typescript",
    "Docker",
    "Postgres",
    "Confluent",
    "Github CI/CD",
    "Knime",
    "Tableau",
    "Airflow",
    "Jenkins",
    "React/Next.js",
  ],
  projects: [
    {
      title: "JokeRace",
      techStack: [
        "Co-founder",
        "Solidity",
        "TypeScript",
        "Next.js",
      ],
      description: "Contests for communities to run, grow, and monetize",
      link: {
        label: "JokeRace",
        href: "https://jokerace.io/",
      },
    },
    {
      title: "JokeRace Docs",
      techStack: ["Co-founder", "Markdown", "Vite"],
      description: "Docs and FAQ for JokeRace",
      link: {
        label: "JokeRace Docs",
        href: "https://docs.jokerace.io/",
      },
    },
    {
      title: "Escrow Trade",
      techStack: ["Side Project", "Solidity"],
      description:
        "Smart contract for on-chain Over-The-Counter (OTC) trading of native and ERC20 currencies",
      link: {
        label: "Escrow Trade",
        href: "https://github.com/seanmc9/escrow-trade",
      },
    },
    {
      title: "Auto-Buy Contract",
      techStack: ["Side Project", "Solidity"],
      description:
        "A contract that takes native currency that is sent to it and direct buys from a Uniswap pool with it",
      link: {
        label: "Auto-Buy Contract",
        href: "https://github.com/seanmc9/auto-buy-contract/tree/main",
      },
    },
    {
      title: "Pirates",
      techStack: ["Side Project", "Solidity"],
      description:
        "An on-chain game where ships can move around a grid and fire at eachother to rack up hits",
      link: {
        label: "Pirates",
        href: "https://github.com/seanmc9/pirates",
      },
    },
    {
      title: "Zoom",
      techStack: ["Side Project", "Solidity"],
      description:
        "A token that goes zoom",
      link: {
        label: "Zoom",
        href: "https://github.com/seanmc9/zoom",
      },
    },
    {
      title: "Puzzle",
      techStack: ["Side Project", "Solidity"],
      description:
        "A fun puzzle contract",
      link: {
        label: "Puzzle",
        href: "https://github.com/seanmc9/puzzle",
      },
    },
    {
      title: "CLT Mutual Aid",
      techStack: ["Side Project", "Markdown", "Vite"],
      description:
        "A compilation of mutual aid resources in Charlotte, NC",
      link: {
        label: "CLT Mutual Aid",
        href: "https://github.com/seanmc9/cltmutualaid",
      },
    },
    {
      title: "Containerized Friendtech",
      techStack: ["Side Project", "Solidity"],
      description:
        "A containerized implementation of the friend.tech smart contract",
      link: {
        label: "Containerized Friendtech",
        href: "https://github.com/seanmc9/containerized-friendtech",
      },
    },
    {
      title: "Multichain Points",
      techStack: ["Side Project", "Solidity"],
      description:
        "$POINTS contracts adapted for rollups",
      link: {
        label: "Multichain Points",
        href: "https://github.com/seanmc9/multi-chain-points",
      },
    },
    {
      title: "Containerized Revnets",
      techStack: ["Side Project", "Solidity"],
      description:
        "A containerized version of Revnet contracts",
      link: {
        label: "Containerized Revnets",
        href: "https://github.com/seanmc9/containerized-revnet",
      },
    },
    {
      title: "Brume Wallet",
      techStack: ["Contributor", "Solidity"],
      description:
        "The private Ethereum wallet with built-in Tor",
      link: {
        label: "Brume Wallet",
        href: "https://github.com/brumewallet/onchain",
      },
    },
    {
      title: "Revnets",
      techStack: ["Contributor", "Solidity"],
      description:
        "Templates for deploying Retailist treasuries",
      link: {
        label: "Escrow Trade",
        href: "https://github.com/rev-net/revnet-contracts",
      },
    },
    {
      title: "Juicebox V4",
      techStack: ["Contributor", "Solidity"],
      description:
        "Juicebox core V4 contracts",
      link: {
        label: "Juicebox V4",
        href: "https://github.com/Bananapus/juice-contracts-v4",
      },
    },
  ],
} as const;
