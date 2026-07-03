import { images } from "./images";

export interface Course {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  badge?: string;
  description: string;
  learningOutcomes: string[];
  syllabus: { title: string; lessons: number }[];
  featured?: boolean;
}

export const courseCategories = [
  'All',
  'Frontend',
  'Backend',
  'Data Science',
  'UI/UX',
  'Mobile',
  'DevOps',
] as const;

export const courses: Course[] = [
  {
    id: '1',
    slug: 'react-development-bootcamp',
    title: 'Complete React Development Bootcamp',
    instructor: 'Sarah Johnson',
    image: images.courses.react,
    rating: 4.9,
    students: 15420,
    duration: '42 hours',
    price: 89,
    category: 'Frontend',
    level: 'Intermediate',
    badge: 'Bestseller',
    featured: true,
    description:
      'Build production-ready React applications from components to deployment. Covers hooks, state management, testing, and performance patterns used on real teams.',
    learningOutcomes: [
      'Architect component trees with clear data flow',
      'Manage async state with hooks and context',
      'Write tests for UI behavior and edge cases',
      'Ship a portfolio project with routing and API integration',
    ],
    syllabus: [
      { title: 'React fundamentals & JSX', lessons: 8 },
      { title: 'Hooks and component patterns', lessons: 12 },
      { title: 'Routing, forms, and data fetching', lessons: 10 },
      { title: 'Testing and deployment', lessons: 8 },
    ],
  },
  {
    id: '2',
    slug: 'data-science-with-python',
    title: 'Data Science with Python',
    instructor: 'Dr. Michael Chen',
    image: images.courses.dataScience,
    rating: 4.8,
    students: 12350,
    duration: '38 hours',
    price: 79,
    category: 'Data Science',
    level: 'Advanced',
    featured: true,
    description:
      'Work through a full data workflow: cleaning datasets, exploratory analysis, modeling, and communicating results to stakeholders.',
    learningOutcomes: [
      'Clean and transform messy datasets with pandas',
      'Visualize distributions and relationships',
      'Train and evaluate regression and classification models',
      'Present findings in a structured analysis report',
    ],
    syllabus: [
      { title: 'Python for data work', lessons: 6 },
      { title: 'Exploratory data analysis', lessons: 10 },
      { title: 'Machine learning basics', lessons: 12 },
      { title: 'Capstone project', lessons: 6 },
    ],
  },
  {
    id: '3',
    slug: 'ui-ux-design-masterclass',
    title: 'UI/UX Design Masterclass',
    instructor: 'Emily Rodriguez',
    image: images.courses.uiUx,
    rating: 4.9,
    students: 9840,
    duration: '28 hours',
    price: 69,
    category: 'UI/UX',
    level: 'Beginner',
    badge: 'New',
    featured: true,
    description:
      'Learn a repeatable design process: research, wireframes, high-fidelity UI, and handoff. Includes Figma workflows and accessibility basics.',
    learningOutcomes: [
      'Run lightweight user interviews and synthesize insights',
      'Create wireframes that map to user tasks',
      'Build consistent UI with typography and spacing systems',
      'Document designs for developer handoff',
    ],
    syllabus: [
      { title: 'Research and problem framing', lessons: 5 },
      { title: 'Wireframing and flows', lessons: 7 },
      { title: 'Visual design systems', lessons: 8 },
      { title: 'Prototyping and handoff', lessons: 6 },
    ],
  },
  {
    id: '4',
    slug: 'nodejs-backend-development',
    title: 'Node.js Backend Development',
    instructor: 'James Wilson',
    image: images.courses.nodejs,
    rating: 4.7,
    students: 8920,
    duration: '35 hours',
    price: 85,
    category: 'Backend',
    level: 'Intermediate',
    featured: true,
    description:
      'Design REST APIs with Express, persist data with PostgreSQL, and handle auth, validation, and error patterns you will see in production.',
    learningOutcomes: [
      'Structure Express apps with routes and middleware',
      'Model data and write SQL queries',
      'Implement JWT-based authentication',
      'Deploy an API with environment-based configuration',
    ],
    syllabus: [
      { title: 'Node.js and Express setup', lessons: 6 },
      { title: 'Database design and queries', lessons: 10 },
      { title: 'Auth and security basics', lessons: 8 },
      { title: 'API project and deployment', lessons: 7 },
    ],
  },
  {
    id: '5',
    slug: 'react-native-mobile-development',
    title: 'Mobile App Development with React Native',
    instructor: 'Lisa Park',
    image: images.courses.mobile,
    rating: 4.8,
    students: 7650,
    duration: '45 hours',
    price: 95,
    category: 'Mobile',
    level: 'Advanced',
    description:
      'Ship cross-platform mobile apps with React Native. Covers navigation, native modules, offline storage, and App Store submission checklist.',
    learningOutcomes: [
      'Build screens with React Native primitives',
      'Handle navigation and deep linking',
      'Integrate device APIs and local storage',
      'Prepare a release build for iOS and Android',
    ],
    syllabus: [
      { title: 'RN fundamentals', lessons: 8 },
      { title: 'Navigation and state', lessons: 10 },
      { title: 'Device APIs and storage', lessons: 9 },
      { title: 'Release preparation', lessons: 6 },
    ],
  },
  {
    id: '6',
    slug: 'advanced-javascript-concepts',
    title: 'Advanced JavaScript Concepts',
    instructor: 'Robert Kim',
    image: images.courses.javascript,
    rating: 4.9,
    students: 11200,
    duration: '32 hours',
    price: 75,
    category: 'Frontend',
    level: 'Advanced',
    description:
      'Go beyond syntax: closures, prototypes, async control flow, modules, and performance. Written for developers who know JS but want depth.',
    learningOutcomes: [
      'Explain execution context and the event loop',
      'Use functional patterns for predictable code',
      'Debug async race conditions and memory leaks',
      'Profile and optimize hot paths in real apps',
    ],
    syllabus: [
      { title: 'Language internals', lessons: 8 },
      { title: 'Async patterns', lessons: 7 },
      { title: 'Functional JS', lessons: 6 },
      { title: 'Performance and tooling', lessons: 5 },
    ],
  },
  {
    id: '7',
    slug: 'docker-kubernetes-devops',
    title: 'Docker & Kubernetes for DevOps',
    instructor: 'Alex Martinez',
    image: images.courses.devops,
    rating: 4.7,
    students: 6430,
    duration: '40 hours',
    price: 99,
    category: 'DevOps',
    level: 'Advanced',
    description:
      'Containerize applications, orchestrate with Kubernetes, and set up CI/CD pipelines. Focused on workflows small teams actually use.',
    learningOutcomes: [
      'Write efficient Dockerfiles and compose stacks',
      'Deploy workloads to a Kubernetes cluster',
      'Configure health checks and rolling updates',
      'Wire a basic CI/CD pipeline for container deploys',
    ],
    syllabus: [
      { title: 'Containers and Docker', lessons: 9 },
      { title: 'Kubernetes core objects', lessons: 11 },
      { title: 'Networking and secrets', lessons: 7 },
      { title: 'CI/CD integration', lessons: 6 },
    ],
  },
  {
    id: '8',
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    instructor: 'Maria Garcia',
    image: images.courses.fullStack,
    rating: 4.8,
    students: 13250,
    duration: '60 hours',
    price: 129,
    category: 'Frontend',
    level: 'Beginner',
    badge: 'Complete Bundle',
    description:
      'A guided path from HTML/CSS through React and Node. Build three incremental projects and finish with a deployed full-stack app.',
    learningOutcomes: [
      'Build responsive layouts with modern CSS',
      'Create interactive UIs with React',
      'Connect a frontend to a Node API',
      'Deploy a full-stack project end to end',
    ],
    syllabus: [
      { title: 'Web foundations', lessons: 10 },
      { title: 'Frontend with React', lessons: 14 },
      { title: 'Backend with Node', lessons: 12 },
      { title: 'Full-stack capstone', lessons: 10 },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}
