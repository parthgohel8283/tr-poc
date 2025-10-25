/**
 * Dummy Teams/Catalog Data
 */

export interface Team {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  experience: string;
  teamSize: string;
  availability: 'available' | 'limited' | 'unavailable';
  pricing: {
    hourly: string;
    monthly: string;
  };
  portfolio: {
    title: string;
    description: string;
    image?: string;
  }[];
  tags: string[];
  featured: boolean;
}

export const DUMMY_TEAMS: Team[] = [
  {
    id: 'team-1',
    name: 'Software Development Team',
    slug: 'software-development',
    shortDescription: 'Full-stack development experts specializing in modern web and mobile applications',
    longDescription: 'Our software development team consists of experienced full-stack developers who excel in building scalable, modern applications. We specialize in React, Node.js, Python, and cloud technologies.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'PostgreSQL'],
    experience: '5+ years',
    teamSize: '4-6 developers',
    availability: 'available',
    pricing: {
      hourly: '$75-$125',
      monthly: '$12,000-$20,000',
    },
    portfolio: [
      {
        title: 'E-commerce Platform',
        description: 'Built a scalable e-commerce platform handling 10k+ daily transactions',
      },
      {
        title: 'SaaS Application',
        description: 'Developed a multi-tenant SaaS app serving 500+ businesses',
      },
    ],
    tags: ['Web Development', 'Mobile Apps', 'API Development', 'Cloud Computing'],
    featured: true,
  },
  {
    id: 'team-2',
    name: 'UI/UX Design Team',
    slug: 'ui-ux-design',
    shortDescription: 'Creative designers focused on user-centered design and beautiful interfaces',
    longDescription: 'Our UI/UX team combines creativity with data-driven insights to create stunning, user-friendly interfaces. We specialize in design systems, accessibility, and conversion optimization.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'HTML/CSS', 'Tailwind'],
    experience: '4+ years',
    teamSize: '2-3 designers',
    availability: 'limited',
    pricing: {
      hourly: '$60-$100',
      monthly: '$9,000-$15,000',
    },
    portfolio: [
      {
        title: 'Banking App Redesign',
        description: 'Redesigned mobile banking app increasing user engagement by 45%',
      },
      {
        title: 'Healthcare Portal',
        description: 'Created WCAG 2.0 AA compliant patient portal design',
      },
    ],
    tags: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
    featured: true,
  },
  {
    id: 'team-3',
    name: 'Data Science Team',
    slug: 'data-science',
    shortDescription: 'Data scientists and ML engineers turning data into actionable insights',
    longDescription: 'Our data science team specializes in machine learning, predictive analytics, and big data processing. We help businesses leverage their data for strategic decision-making.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Spark', 'Tableau'],
    experience: '6+ years',
    teamSize: '3-4 data scientists',
    availability: 'available',
    pricing: {
      hourly: '$85-$150',
      monthly: '$15,000-$25,000',
    },
    portfolio: [
      {
        title: 'Predictive Analytics Platform',
        description: 'Built ML models for customer churn prediction with 89% accuracy',
      },
      {
        title: 'Recommendation Engine',
        description: 'Developed personalized recommendation system increasing sales by 32%',
      },
    ],
    tags: ['Machine Learning', 'Data Analytics', 'Big Data', 'AI'],
    featured: true,
  },
  {
    id: 'team-4',
    name: 'DevOps Team',
    slug: 'devops',
    shortDescription: 'Infrastructure and automation experts ensuring reliable deployments',
    longDescription: 'Our DevOps team focuses on CI/CD, infrastructure as code, and cloud architecture. We help teams deploy faster and more reliably.',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    experience: '5+ years',
    teamSize: '2-3 engineers',
    availability: 'limited',
    pricing: {
      hourly: '$80-$130',
      monthly: '$13,000-$21,000',
    },
    portfolio: [
      {
        title: 'Cloud Migration',
        description: 'Migrated legacy infrastructure to AWS, reducing costs by 40%',
      },
      {
        title: 'CI/CD Pipeline',
        description: 'Implemented automated deployment pipeline reducing deploy time by 85%',
      },
    ],
    tags: ['DevOps', 'Cloud Infrastructure', 'Automation', 'Monitoring'],
    featured: false,
  },
  {
    id: 'team-5',
    name: 'Mobile Development Team',
    slug: 'mobile-development',
    shortDescription: 'Native and cross-platform mobile app development specialists',
    longDescription: 'Our mobile team builds high-performance iOS and Android applications using both native and cross-platform technologies.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    experience: '4+ years',
    teamSize: '3-5 developers',
    availability: 'available',
    pricing: {
      hourly: '$70-$120',
      monthly: '$11,000-$19,000',
    },
    portfolio: [
      {
        title: 'Fitness Tracking App',
        description: 'Built cross-platform fitness app with 100k+ downloads',
      },
      {
        title: 'Delivery Service App',
        description: 'Developed on-demand delivery app with real-time tracking',
      },
    ],
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    featured: false,
  },
];

export const getTeamBySlug = (slug: string): Team | undefined => {
  return DUMMY_TEAMS.find(t => t.slug === slug);
};

export const getAllTeams = (): Team[] => {
  return DUMMY_TEAMS;
};

export const getFeaturedTeams = (): Team[] => {
  return DUMMY_TEAMS.filter(t => t.featured);
};

