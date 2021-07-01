import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';

const experienceData = [
  {
    name: 'LrnEd Technologies Pvt. Ltd.',
    designation: 'Software Development Intern',
    started: 'March 2021',
    work: ['Developed user assessment dashboard at jobs.outdefine.com', 'Added several necessary features in sync with serverless backend', 'Partnered with product team on Figma for design enhancements', 'Helped increase user time on outdefine.com by 4 minutes'],
  },
  {
    name: 'FilterShalla',
    designation: 'Technical Head',
    started: 'July 2021',
    ended: 'Aug 2021',
    work: ['Handled all technical requirements of new brand', 'Developed and Hosted bootstraped based website from scratch', 'Regularly updated new products on the page with latest designs'],
  },
];

const projectData = [
  {
    name: 'Stonks',
    link: 'https://stonks-369.firebaseapp.com/',
    started: 'Jan 2021',
    ended: 'May 2021',
    work: [
      'Virtual Stock Market for beginners in Trading and Investing',
      'Sentiment Analysis on News',
      'Fully Featured Demat Account',
      'News & Best performers data for Stock Recommendation',
    ],
    techs: ['NodeJS', 'ReactJS', 'MongoDB', ' Stock APIs', 'Google FireBase'],
  },
  {
    name: 'Burger Builder',
    link: 'https://burgerbuilder369.netlify.app/',
    started: 'Mar 2020',
    ended: 'Apr 2020',
    work: [
      'Online Burger Making and Ordering web-app',
      'Customized Burger Creation for users',
      'Burger store gets orders',
      'Users can access previous order details with their accounts',
    ],
    techs: ['ReactJS', 'Google FireBase'],
  },
  {
    name: 'Kal Exam Hai',
    link: 'https://kalexamhai.github.io/',
    started: 'Nov 2019',
    work: [
      'Previous Year Questions website for B.Tech students of SMVDU',
      'Started with core HTML/CSS',
      'Current Version 3.0 has 500+ Users',
      'Smoothest User Experience',
    ],
    techs: ['ReactJS', 'Google FireBase'],
  },
];

const otherProjects = ['Fantasy Cricket', 'Expense Manager', 'Amazon Price Monitor'];

const educationData = [
  {
    name: 'Shri Mata Vaishno Devi University',
    type: 'Bachelor of Technology',
    ended: 2022,
    location: 'Katra',
    score: 7.3,
  },
  {
    name: 'S. D. Adarsh Vidyalaya',
    type: 'Higher School Certificate',
    ended: 2018,
    location: 'Gurugram',
    score: 83.8,
  },
  {
    name: 'S. D. Adarsh Vidyalaya',
    type: 'Secondary School Certificate',
    ended: 2016,
    location: 'Gurugram',
    score: 9,
  },
];

const skillsData = [
  'ReactJS',
  'NodeJS',
  'MongoDB',
  'Express',
  'Redux',
  'BS4',
  'C/C++',
  'JavaScript',
  'Python',
  'DSA',
  'Web Scraping',
  'Data Processing'
];

const achievementData = [
  'Young Scientist Award for Millennium Village Model',
  'First Prize in Web Development in Titiksha: Tech Fest',
  'First Prize in Cover Shot Photography',
];

const extraCurricularData = [
  'General Secretary, Atelier',
  'Backstage Head, Resurgence',
  'Qualified AIU North Zone in Theater',
  'Hobbies: Photography, Music, Editing, Travelling etc.',
];

const footerData = [
  {
    text: '+91-9953-654575',
    icon: <IoMdCall />,
    link: 'tel:+91-9953-654575',
  },
  {
    text: 'akv369',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/akv369/',
  },
  {
    text: 'akv369',
    icon: <AiFillGithub />,
    link: 'https://github.com/akv369/',
  },
  {
    text: 'akash.vashisht99@gmail.com',
    icon: <AiFillMail />,
    link: 'mailto:akash.vashisht99@gmail.com',
  },
];

export default {
  experienceData,
  projectData,
  otherProjects,
  educationData,
  skillsData,
  achievementData,
  extraCurricularData,
  footerData,
};
