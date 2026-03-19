export const COLORS = {
  brand: {
    pink: '#FF78C9',
    blue: '#B0145A',
  },
  background: {
    primary: '#0A0A0F',
    secondary: '#12121A',
    card: '#1A1A24',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#A0A0B0',
    muted: '#606070',
  },
  border: {
    default: '#2A2A35',
    hover: '#3A3A48',
  },
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
};

export const CHAINS = [
  { id: 1, name: 'Instagram', symbol: 'IG', color: '#E1306C', logo: '/platform-instagram.svg' },
  { id: 2, name: 'X (Twitter)', symbol: 'X', color: '#FFFFFF', logo: '/platform-x.svg' },
  { id: 3, name: 'YouTube', symbol: 'YT', color: '#FF0000', logo: '/platform-youtube.svg' },
  { id: 4, name: 'Web + Files', symbol: 'DOC', color: '#94A3B8', logo: '/platform-web.svg' },
];

export const FEATURES = [
  {
    icon: 'HiOutlineTrendingUp',
    title: 'Engagement Automation',
    description: 'Automate likes, comments, and interactions with guardrails that keep activity realistic.',
  },
  {
    icon: 'HiOutlineSwitchHorizontal',
    title: 'Multi-Account Ops',
    description: 'Operate multiple profiles with account-specific schedules, limits, and cooldowns.',
  },
  {
    icon: 'HiOutlineSparkles',
    title: 'AI Content Engine',
    description: 'Generate captions and comments with Gemini and schema-guided output.',
  },
  {
    icon: 'HiOutlineRefresh',
    title: 'Safety + Control',
    description: 'Daily limits, cooldowns, and retry logic keep automation stable and compliant.',
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'Connect Accounts',
    description: 'Authenticate Instagram and X accounts and store sessions securely.',
  },
  {
    number: '02',
    title: 'Train + Configure',
    description: 'Add your style from YouTube, audio, and files, then tune automation limits.',
  },
  {
    number: '03',
    title: 'Run and Review',
    description: 'Launch automation, review summaries, and iterate on performance.',
  },
];
