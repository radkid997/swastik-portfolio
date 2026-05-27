/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration

const illustration = {
  animated: true
};

// Greeting Section

const greeting = {
  username: "Swastik Prasad",
  title: "Hi, I'm Swastik",
  subTitle: emoji(
    "Capital markets professional with experience across Morgan Stanley, NSE, Goldman Sachs, and Broadridge. Interested in trading systems, market data analytics, automation, risk, compliance technology, and data-driven problem-solving."
  ),
  resumeLink: "developerFolio-master/public/Swastik_Prasad_Resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/radkid997",
  linkedin: "https://www.linkedin.com/in/swastikprasad97",
  gmail: "swastikprasad25@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "CAPITAL MARKETS, MARKET DATA ANALYTICS, AUTOMATION & DATA-DRIVEN PROBLEM SOLVING",

  skills: [
    emoji(
      "⚡ Build trading and market analytics systems using Python and structured market data"
    ),
    emoji(
      "⚡ Work across surveillance, operational controls, risk workflows, and compliance technology environments"
    ),
    emoji(
      "⚡ Develop automation workflows, analytics tools, and data-driven solutions using Python, SQL, Excel, and machine learning"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: false,
  schools: []
};

// Core Domains Section

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Research & Data Analytics",
      progressPercentage: "95%"
    },
    {
      Stack: "Python & Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "Capital Markets & Trade Operations",
      progressPercentage: "85%"
    },
    {
      Stack: "Risk, Surveillance & Controls",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Compliance Associate — Trade & Communication Surveillance",
      company: "Morgan Stanley",
      companylogo: require("./assets/images/morgan_stanley_logo-freelogovectors.net_.png"),
      date: "May 2025 – Nov 2025",
      desc:
        "Contributed to the enhancement of trade surveillance frameworks across multiple asset classes including equities, forex, fixed income, and ETD within the EMEA region, supporting market abuse investigations, trade analysis workflows, surveillance control validation, and Python-based automation initiatives."
    },

    {
      role: "Deputy Manager — Trade Operations & Surveillance Controls",
      company: "National Stock Exchange of India (NSE)",
      companylogo: require("./assets/images/NSE_reverse@4x-100.jpg"),
      date: "Mar 2024 – Apr 2025",
      desc:
        "Implemented risk and regulatory changes across exchange-level trading systems while working on surveillance controls, operational risk monitoring, parameter validation, UAT testing, abnormal trading investigations, and regulatory response workflows."
    },

    {
      role: "Analyst — Exchange Fee & Billing Analytics",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/Goldman_Sachs.svg.png"),
      date: "Jan 2023 – Sep 2023",
      desc:
        "Managed exchange fee analytics and reconciliation processes across U.S. and European equities while supporting reporting accuracy, operational controls, and data-driven review workflows."
    },

    {
      role: "Process Analyst — Trade Operations & Controls",
      company: "Broadridge Financial Solutions",
      companylogo: require("./assets/images/broadridge_financial_solutions_india_private_ltd_logo.jpeg"),
      date: "Sep 2021 – Dec 2022",
      desc:
        "Handled trade operations and control validation workflows involving transaction mismatches, securities onboarding, settlement analysis, and operational issue resolution."
    }
  ]
};

// Open Source Section

const openSource = {
  display: false
};

// Projects Section

const bigProjects = {
  title: "Projects",
  subtitle:
    "MARKET DATA ANALYTICS & AUTOMATION",

  projects: [
    {
      image: require("./assets/images/pca_clusters.png"),
      projectName: "Intraday Regime Clustering & Position Sizing Framework",
      projectDesc:
        "Python-based trading research framework focused on identifying higher-quality intraday market environments using market structure analytics, systematic filtering, PCA clustering, and regime-based trade validation.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/radkid997/TradeQualityFilter"
        }
      ]
    }
  ],

  display: true
};

// Certification Section

const achievementSection = {
  title: emoji("Certification 📜"),
  subtitle: "A certification relevant to data analytics and machine learning.",

  achievementsCards: [
    {
      title: "IBM Data Science & Machine Learning",
      subtitle:
        "Completed IBM certification covering data science, machine learning concepts, and applied analytics workflows using Python.",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: []
    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  display: false
};

// Talks Section

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in capital markets, analytics, research, automation, or fintech? Feel free to reach out.",
  number: "+91 90006 70208",
  email_address: "swastikprasad25@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

// Hireable

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};