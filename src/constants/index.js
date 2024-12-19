import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  tripguide,
  threejs,
  mihver,
  izu,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Hakkımda',
  },
  {
    id: 'work',
    title: 'Projelerim',
  },
  {
    id: 'contact',
    title: 'İletişim',
  },
];

const services = [
  {
    title: 'Arayüz Geliştirme',
    icon: web,
  },
  {
    title: 'React.js Geliştirme',
    icon: mobile,
  },
  {
    title: 'Next.js Geliştirme',
    icon: backend,
  },
  {
    title: 'Grafik Tasarım',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Öğrenci',
    company_name: 'Istanbul Sabahattin Zaim Üniversitesi',
    icon: izu,
    iconBg: '#E6DEDD',
    date: 'Ekim 2023 - Devam ediyor',
    points: ['Öğrenci No: 030723076'],
  },
];

const projects = [
  {
    name: 'Mihver',
    description:
      'Cetvel, günümüzün büyük bir sorunu olan odaklanma ve alışkanlık oluşturma konularına çözüm olması amacıyla geliştirilen yappay zeka destekli bir platformdur.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: mihver,
    source_code_link: 'https://mihver.pro/',
  },
];

export { services, technologies, experiences, projects };
