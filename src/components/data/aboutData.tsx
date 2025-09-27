// src/data/aboutData.ts
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code,
  Coffee,
  Music,
  BookOpen,
  Gamepad2,
  Heart,
} from "lucide-react";

export interface ContactInfo {
  icon: any; // You could refine this type with React.ComponentType if needed
  label: string;
  value: string;
  href: string;
  display: string;
}

export interface Interest {
  icon: any;
  name: string;
  description: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "rliu437@gatech.edu",
    href: "mailto:rliu437@gatech.edu",
    display: "rliu437@gatech.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (706) 363-5888",
    href: "tel:+17063635888",
    display: "+1 (706) 363-5888",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ricky-liu-178b82297",
    href: "https://www.linkedin.com/in/ricky-liu-178b82297",
    display: "linkedin.com/in/ricky-liu-178b82297",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/RickyLiu220",
    href: "https://github.com/RickyLiu220",
    display: "github.com/RickyLiu220",
  },
];

export const interests: Interest[] = [
  {
    icon: Code,
    name: "Programming",
    description:
      "I've always believed that Software is a tool that too few know how to leverage. I see how much better my life can be with software, and I strive to make projects that I can use.",
  },
  {
    icon: Coffee,
    name: "Coffee",
    description:
      "I love coffee. I really love one coffee shop nearby called Urban Grind. I'm always open to try new coffee recipes if you have any suggestions.",
  },
  {
    icon: Music,
    name: "Music",
    description:
      "Listening to various artists across different genres. Though I tend to like softer songs when I'm working (I recommend checking out EDEN). However, if I'm working out, I would definitely opt for louder music.",
  },
  {
    icon: BookOpen,
    name: "Reading",
    description:
      "I love Sci-fi/Fantasy novels. They give you an escape from the stress of life in a way that a TV show just can't.",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    description:
      "Strategy/Coop games like Unrailed! Great for making friends and building teamwork skills",
  },
  {
    icon: Heart,
    name: "Gym",
    description: "Running, weightlifting, and badminton",
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "SQL",
  "Git",
  "C",
  "AWS Cloud Services",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
];
