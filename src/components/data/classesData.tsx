import { Code } from "lucide-react";

export interface ClassInfo {
  id: string;
  title: string;
  semester: string;
  professor: string;
  grade?: string;
  credits?: number;
  icon?: any; // or React.ComponentType
  description?: string;
  highlights?: string[];
  projects?: string[];
  keyLearnings?: string;
  skills?: string[];
}

export const classes: ClassInfo[] = [
  {
    id: "cs1331",
    title: "Intro to Object Oriented Programming",
    semester: "Fall 2023",
    professor: "Prof. Richard Landry",
    grade: "A",
    credits: 3,
    icon: Code,
    description:
      "This was the first in-depth class that I took on Java, which was the object-oriented language chosen for this class",
    highlights: [
      "Learned Java basics focusing on inheritance",
      "Understood basic algorithms and data structures",
    ],
    projects: [
      "Text-based Calculator",
      "Number Guessing Game",
      "Simple File Manager",
      "Basic Inventory System",
    ],
    keyLearnings:
      "This class taught me that programming is not just about writing code, but about breaking down complex problems into manageable pieces. The logical thinking skills I developed here became the foundation for all my future coursework.",
    skills: ["Python", "Problem Solving", "Debugging", "Algorithm Design"],
  },
];
