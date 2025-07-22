export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Teams',
    href: '#teams',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const EventsData = [
  {
    title: 'event name 1',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc: "This project showcases the power of AI in content creation, enabling podcasters to produce high-quality audio content efficiently.",
    image: "https://i.pinimg.com/736x/01/37/9b/01379bafe5dcfee4dec2ead665a4ff76.jpg",
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',

  },
  {
    title: 'event name 2',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc: "This project showcases the power of AI in content creation, enabling podcasters to produce high-quality audio content efficiently.",
    logo: '/assets/project-logo2.png',
    image: "https://i.pinimg.com/736x/f8/23/5e/f8235ebc60707b4a91f27c5f21e054a5.jpg",
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',

  },
  {
    title: 'event name 3',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc: "This project showcases the power of AI in content creation, enabling podcasters to produce high-quality audio content efficiently.",
    logo: '/assets/project-logo3.png',
    image: "https://i.pinimg.com/736x/29/f3/d9/29f3d9b9685eda4c72cfbfd5a6c69a7d.jpg",
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 3, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 5, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-22, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const BoardPositions = [
  {
    id: 1,
    name: 'Main Board',
    pos: 'Board Assistant',
    duration: '2023 - Present',
    title: "As a Main Board Assistant, I support executive-level decision-making, help coordinate key events, and ensure smooth communication between departments. I also assist in preparing reports and managing documentation for board meetings.",
    icon: '/assets/figma.svg',
    animation: 'thinking',
  },
  {
    id: 2,
    name: 'Assistant Board',
    pos: 'Member Board',
    duration: '2022 - 2023',
    title: "As part of the Member Board, I contributed to planning technical events, managing student engagement activities, and helping organize coding workshops and seminars to build a stronger tech community.",
    icon: '/assets/framer.svg',
    animation: 'wave',
  },
  {
    id: 3,
    name: 'Member Board',
    pos: 'Member',
    duration: '2021 - 2022',
    title: "Joined as an active member and contributed to various club activities including event coordination, brainstorming sessions, and volunteer management during campus fests and outreach programs.",
    icon: '/assets/notion.svg',
    animation: 'thumbsup',
  },
];

