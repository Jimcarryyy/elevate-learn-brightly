import { images } from "./images";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  courses: number;
  students: number;
  rating: number;
}

export const instructors: Instructor[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Senior Frontend Engineer",
    bio: "Former lead at a fintech startup. Teaches React and modern JavaScript with a focus on production patterns.",
    image: images.people.sarahJohnson,
    courses: 4,
    students: 8200,
    rating: 4.9,
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    title: "Data Scientist",
    bio: "PhD in applied statistics. Builds practical data science curricula used by bootcamps and teams.",
    image: images.people.michaelChen,
    courses: 3,
    students: 6100,
    rating: 4.8,
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    title: "Product Designer",
    bio: "Design lead with 10 years in SaaS. Specializes in research-driven UI/UX and design systems.",
    image: images.people.emilyRodriguez,
    courses: 2,
    students: 4800,
    rating: 4.9,
  },
];

export function getInstructorByName(name: string): Instructor | undefined {
  return instructors.find((i) => i.name === name);
}

export function getInstructorById(id: string): Instructor | undefined {
  return instructors.find((i) => i.id === id);
}
