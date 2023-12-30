import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sean McCaffery",
  initials: "SM",
  location: "Charlotte, United States, ET",
  locationLink: "https://www.google.com/maps/place/Charlotte",
  about:
    "Software Engineer",
  summary:
    "I like to build cool things. Ideally open-source.",
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
      link: "https://twitter.com/jokerace_xyz",
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
    "Rust (working on it)",
    "Docker",
    "Postgres",
    "Knime",
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
      description: "Contests for communities to make, execute, and reward decisions",
      link: {
        label: "jokerace.xyz",
        href: "https://jokerace.xyz/",
      },
    },
    {
      title: "Escrow Trade",
      techStack: ["Side Project", "Solidity"],
      description:
        "Smart contract for on-chain Over-The-Counter (OTC) trading of native and ERC20 currencies",
      link: {
        label: "Escrow Trade",
        href: "https://github.com/seanmc9/escrow-trade/blob/main/src/EscrowTrade.sol",
      },
    },
  ],
} as const;
