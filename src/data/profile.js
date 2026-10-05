import {
  SiCplusplus,
  SiCss,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiRos,
} from 'react-icons/si';
import {
  FaCode,
  FaCompass,
  FaEnvelope,
  FaFolderOpen,
  FaGithub,
  FaLayerGroup,
  FaUser,
  FaUserTie,
} from 'react-icons/fa6';

export const profile = {
  name: 'Harveer Dhillon',
  shortName: 'Harveer',
  title: 'Software Engineer',
  photo: '/assets/profile.jpg',
  bio: "I'm an ambitious software engineer driven by constant self-improvement. I'm passionate about full stack development and machine learning, where I design end-to-end solutions for users and explore data-driven decision making. I thrive in collaborative teams, bringing logical, analytical problem solving and strong technical skills to build impactful applications.",
  education: {
    school: 'Wilfrid Laurier University',
    program: 'Computer Science',
  },
  focusAreas: ['Full Stack Development', 'Machine Learning', 'Sports Analytics'],
  links: {
    github: 'https://github.com/Harveer91',
    email: 'harveerdhillon91@gmail.com',
    linkedin: null,
    resume: null,
  },
};

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
    ],
  },
  {
    title: 'Frameworks, Libraries & Tools',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'ROS', icon: SiRos },
      { name: 'Git', icon: SiGit },
      { name: 'Figma', icon: SiFigma },
    ],
  },
];

export const projects = [
  {
    id: 'nfl',
    title: 'NFL Win Prediction Model',
    description:
      'A machine learning model that predicts the outcome of NFL games using historical team data.',
    image: '/assets/NFL-logo.png',
    tags: ['Python', 'Machine Learning'],
    link: 'https://github.com/Harveer91/NFL-Win-Prediction-Model',
  },
  {
    id: 'hockey',
    title: 'Hockey Metrics',
    description:
      'A web app offering advanced fantasy hockey insights, including team analytics and player projections, for smarter draft and roster decisions.',
    image: '/assets/Hockey-logo.png',
    tags: ['Python', 'Web App', 'Analytics'],
    link: 'https://github.com/Harveer91/Hockey-Metrics',
  },
  {
    id: 'ai-agent',
    title: 'AI Agent',
    description: 'An AI agent project currently in development.',
    image: '/assets/Robot.jpg',
    tags: ['AI'],
    link: null,
  },
];

export const destinations = {
  about: { label: 'About Me', to: '/about', icon: FaUser, gradient: 'linear-gradient(135deg, #7f1d1d, #1f1f1f)' },
  skills: { label: 'Skills', to: '/skills', icon: FaLayerGroup, gradient: 'linear-gradient(135deg, #1e3a8a, #111827)' },
  projects: { label: 'Projects', to: '/projects', icon: FaFolderOpen, gradient: 'linear-gradient(135deg, #065f46, #111827)' },
  contact: { label: 'Contact Me', to: '/contact', icon: FaEnvelope, gradient: 'linear-gradient(135deg, #9a3412, #1f1f1f)' },
  github: { label: 'GitHub', href: profile.links.github, icon: FaGithub, gradient: 'linear-gradient(135deg, #374151, #0b0b0b)' },
};

export const viewers = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    icon: FaUserTie,
    gradient: 'linear-gradient(135deg, #38bdf8, #1d4ed8)',
    picks: ['about', 'skills', 'projects', 'contact'],
  },
  {
    id: 'developer',
    name: 'Developer',
    icon: FaCode,
    gradient: 'linear-gradient(135deg, #a3a3a3, #404040)',
    picks: ['projects', 'github', 'skills', 'contact'],
  },
  {
    id: 'explorer',
    name: 'Explorer',
    icon: FaCompass,
    gradient: 'linear-gradient(135deg, #fbbf24, #ea580c)',
    picks: ['about', 'projects', 'skills', 'contact'],
  },
];
