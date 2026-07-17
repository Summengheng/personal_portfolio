/**
 * @copyright 2026 codewithmengheng
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Handshake,
  Home,
  Laptop,
  Link,
  Mail,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User,
} from 'lucide-react';

import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  // {
  //   label: 'Reviews',
  //   link: '#testimonials',
  //   icon: MessageCircle,
  // },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FiFacebook,
    label: 'Facebook',
    link: 'https://www.facebook.com/heng.65136/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/s.hengg_/',
  },
  {
    icon: FaLinkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/sum-mengheng-00b26a29b',
  },
  {
    icon: FaTelegram,
    label: 'Telegram',
    link: 'https://t.me/summengheng',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/adminDashboard.png',
    title: 'Admin Dashboard with Vue.js',
    tags: ['Development', 'API Integration'],
    projectLink: '',
    description: `This is a Vue 3 admin dashboard for managing an online live casino/game platform (Baccarat, Dragon Tiger, Roulette, Sic Bo, Niu Niu, Sedie, etc.)`,
    tech: [
      'Vuejs3',
      'TypeScript',
      'Element Plus',
      'Pinia 2',
      'SCSS + UnoCSS (utility)',
    ],
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Cafe Ordering Platform',
    tags: ['Development', 'UI/UX Design'],
    projectLink: '', // Using placeholder links as provided
    description:
      'A fully responsive Cafe Ordering web application featuring secure checkout, real-time product inventory tracking, product filtering, and an admin dashboard.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Expressjs',
      'Nodejs',
      'MangoDB',
    ],
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Task Management Dashboard',
    tags: ['Web Application', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
    description:
      'A collaborative task board with drag-and-drop mechanics, real-time updates via WebSockets, progress charts, and multi-user workspace tracking.',
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Socket.io', 'Node.js'],
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'AI Portfolio Generator',
    tags: ['AI', 'UI/UX Design'],
    projectLink: 'https://musify-5al0.onrender.com/',
    description:
      'An online tool that uses AI models to automatically draft and format personal developer portfolios based on a user’s GitHub profile data.',
    tech: ['React', 'Vite', 'Gemini API', 'Tailwind CSS', 'Framer Motion'],
  },
];

const education: ExperienceType[] = [
  {
    year: '2026 – Present',
    title: 'Intensive English Bridging Course (Year 0)',
    institute: ' Institute of Foreign Languages (IFL), RUPP',
    desc: 'Currently improving my English communication skills to support my professional growth and prepare for international working environments.',
  },
  {
    year: '2021 – 2024',
    title: 'Bachelor’s in Management Information System',
    institute: ' Setec Institute',
    desc: 'Studied software development, database systems, web technologies, and information systems. Completed projects focused on web application development and programming fundamentals.',
  },
  {
    year: '2014 - 2021',
    title: 'General Knowledge',
    institute: 'Chea Sim Santhormok High School',
    desc: 'Completed general education with a strong foundation in mathematics, science, and technology while developing problem-solving, communication, and teamwork skills.',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'February 2024 – February 2026',
    title: 'Programmer',
    institute: 'KG Software Technology Co., Ltd.',
    desc: '• Developed responsive web applications using Vue.js, TypeScript, HTML, CSS, and JavaScript. • Integrated REST APIs into admin systems and dashboards. • Converted UI/UX designs into responsive user interfaces. • Debugged and optimized web applications for better performance. • Collaborated with designers and backend developers using Git.',
  },
  {
    year: '2021 – 2022',
    title: 'Frontend Developer Intern',
    institute: 'Zando Company',
    desc: '• Delivered excellent customer service. • Assisted customers in selecting products • Developed strong communication and teamwork skills. • Managed transactions and maintained product displays.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'HTML',
    imgSrc: '/images/tools/html.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: '/images/tools/typescript.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Vue',
    imgSrc: '/images/tools/vue.svg',
  },
  {
    label: 'Laravel',
    imgSrc: '/images/tools/laravel.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'MySQL',
    imgSrc: '/images/tools/mysql.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Postman',
    imgSrc: '/images/tools/postman.svg',
  },
  {
    label: 'Git',
    imgSrc: '/images/tools/git.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Frontend Development',
    desc: 'Build responsive, fast, and modern web applications using Vue.js, React, TypeScript, HTML, CSS, and Tailwind CSS.',
    icon: <Laptop className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'REST API Integration',
    desc: 'Connect frontend applications with backend services to display dynamic data, manage user interactions, and ensure smooth communication between systems.',
    icon: <Link className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Responsive Web Design',
    desc: 'Develop websites that provide a seamless experience across desktops, tablets, and mobile devices.',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI Implementation',
    desc: 'Convert UI/UX designs into clean, reusable, and pixel-perfect frontend components while maintaining consistency and usability.',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Bug Fixing & Performance Optimization',
    desc: 'Identify and resolve issues, improve application performance, and maintain stable, scalable web applications.',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Team Collaboration',
    desc: 'Work effectively with designers, backend developers, and project managers using Git and modern development workflows to deliver high-quality software.',
    icon: <Handshake className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '02+',
    label: 'Years Of Experience',
  },
  {
    number: '10+',
    label: 'Web Applications',
  },
  {
    number: '15+',
    label: 'Features Delivered',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
