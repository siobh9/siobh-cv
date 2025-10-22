import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Siobhán McCaffery",
  initials: "SM",
  location: "Charlotte, United States, ET",
  locationLink: "https://www.google.com/maps/place/Charlotte",
  about:
    "Software Engineer",
  summary:
    "I like to design, build, and maintain systems.",
  avatarUrl: "https://avatars.githubusercontent.com/siobh9",
  personalWebsiteUrl: "https://github.com/siobh9",
  contact: {
    email: "smpartnersllc@proton.me",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/siobh9",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siobhán-mccaffery/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/siobh_eth",
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
      end: "2025",
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
      title: "Auto-Buy Contract",
      techStack: ["Side Project", "Solidity"],
      description:
        "Smart contract that buys from a Uniswap pool with native currency sent to it",
      link: {
        label: "Auto-Buy Contract",
        href: "https://github.com/jk-labs-inc/auto-buy-contract",
      },
    },
    {
      title: "Mask Bloc Bot",
      techStack: ["Side Project", "Python", "Docker"],
      description:
        "Discord bot for an international mask bloc server",
      link: {
        label: "Mask Bloc Bot",
        href: "https://github.com/siobh9/mask-bloc-bot",
      },
    },
  ],
} as const;
