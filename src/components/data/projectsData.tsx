export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  duration: string;
  team: string;
  description: string;
  challenge: string;
  solution: string;
  learnings?: string[];
  technologies?: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    status: "Completed",
    duration: "2 weeks",
    team: "Solo",
    description:
      "A responsive portfolio website showcasing my projects, skills, and academic journey. Built with modern web technologies and deployed on Vercel.",
    challenge:
      "Creating a professional, responsive design that effectively communicates my skills and experiences while maintaining good performance and accessibility.",
    solution:
      "Used React with TypeScript for type safety, Tailwind CSS for responsive design, and implemented a clean component architecture. Added smooth animations and optimized for both desktop and mobile experiences. For backend, I used Supabase for its easy-to-use Edge functions and its built-in postgresSQL database",
    learnings: [
      "React with TypeScript for scalable web apps",
      "Tailwind CSS for rapid, responsive styling",
      "Data fetching and state management with Fetch API and hooks",
      "Supabase Edge Functions and database integration",
      "Scheduling tasks with cron jobs and automation",
      "Data visualization with Recharts",
      "Handling API errors, loading states, and CORS",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
      "Supabase",
      "Supabase Edge Functions",
      "PostgreSQL",
      "Recharts",
      "Fetch API",
    ],
    features: [
      "Responsive design across all devices",
      "Interactive navigation and smooth transitions",
      "Dynamic content loading",
      "Automatic Fetching of Leetcode Data",
    ],
    githubUrl: "https://github.com/RickyLiu220/personal-website",
    liveUrl: "",
    impact:
      "This project centralizes and visualizes personal Leetcode practice, providing real-time insights into problem-solving habits. By automatically tracking progress, streaks, and difficulty-specific performance, it helps maintain consistency, identify areas for improvement, and make learning more structured. This website also displays my achievements in a clean manner.",
  },
  {
    id: "datapipeline",
    title: "Flight Price Tracker & Alert System",
    category: "Cloud and Backend Systems",
    status: "Ongoing",
    duration: "3 weeks",
    team: "2 People",
    description:
      "A flight price tracking system that fetches, processes, and stores flight data using AWS services, and notifies users via email when prices drop below their desired threshold.",
    challenge:
      "Efficiently fetching and processing real-time flight data at scale while ensuring timely notifications to users without overloading system resources.",
    solution:
      "Built a serverless architecture using AWS Lambda, SQS, and EC2 to efficiently ingest, process, and store flight data, combined with a REST API and AWS SES to deliver timely price alerts to users.",
    learnings: [
      "Serverless architecture with AWS Lambda",
      "Queue-based data processing with SQS",
      "Database design and ETL on EC2",
      "REST API development",
      "User notifications via AWS SES",
      "Integrating third-party APIs",
      "End-to-end full-stack application design",
    ],
    technologies: [
      "AWS Lambda",
      "AWS SQS",
      "AWS EC2",
      "AWS SES",
      "PostgreSQL",
      "REST API",
      "Google Flights API",
      "Node.js",
      "TypeScript",
      "SpringBoot",
      "Java",
      "Python",
    ],
    features: [
      "Real-time flight price tracking",
      "User-defined price alerts via email",
      "Automated data ingestion and cleaning pipeline",
      "Scalable backend with SQS and EC2 workers",
      "REST API connecting frontend and database",
    ],
    githubUrl: "https://github.com/RickyLiu220/flight-tracker",
    liveUrl: "",
    impact:
      "Empowers users to save money on flights by providing timely notifications, while demonstrating a fully automated, scalable data pipeline integrating multiple AWS services.",
  },
  {
    id: "game",
    title: "Human or AI Game",
    category: "Web Development",
    status: "Completed",
    duration: "1 week",
    team: "Solo",
    description:
      "Created a game where the player would have to guess which snippet of text was AI generated.",
    challenge:
      "Create a web-based game where the player guesses if text is AI generated or human written. Keep track of the user's high score and associated it with their account",
    solution:
      "Used simple HTML and CSS to create the website. For the database, I created a SQLite in-memory DB. For the content of the game, I used BlueSky API to fetch posts.",
    learnings: [
      "Handling REST API requests from the frontend to the backend",
      "BlueSky API to automatically fetch data",
      "Using SQL to manage a Database",
      "Javascript for front and backend",
    ],
    technologies: ["Javascript", "HTML", "CSS", "SQLite", "SQL", "REST apis"],
    features: [
      "Responsive design",
      "Easy sign up and password encyption with bcrypt",
      "Automatic post fetching from Bluesky",
    ],
    githubUrl: "https://github.com/Human-AI-Game/",
    liveUrl: "",
    impact:
      "This project allows the user to see how well the user is at identifying AI generated content online",
  },
  {
    id: "officalsports",
    title: "Official Sports",
    category: "IOS/Andriod Development",
    status: "Ongoing",
    duration: "3 week",
    team: "4 People",
    description:
      "Create an app that allows hosts to post venues and for sports players to discover and play at those venues. It also has a social media aspect of it where users are able to make posts and go live at venues.",
    challenge:
      "Create an app that allows people to host venues and find venues nearby. Also, allow people to livestream their games at those venues and make posts.",
    solution:
      "Creating and app that stores user information like posts and sports along with their connections. Implement live streaming with Agora, and allow users to pay for premium with Stripe.",
    learnings: [
      "How to handle live streaming on Mobile with pay-per-use services like Agora",
      "How to handle large amounts of data with databases like Google Firebase database",
      "How to handle Google SSO",
      "How to use React Native and Typescript for mobile development",
    ],
    technologies: [
      "TypeScript",
      "Google Cloud Services",
      "CSS",
      "React Native",
      "SQL",
      "Stripe",
      "Agora Livestreaming",
    ],
    features: [
      "Responsive design and modern UI",
      "Google SSO and easy email sign up/login",
      "Instant Livestreaming with Agora",
      "Discover posts and friends about your sports",
      "Host private venues for sports",
      "Register to play at venues",
    ],
    githubUrl: "",
    liveUrl: "",
    impact:
      "This project allows the user to see how well the user is at identifying AI generated content online",
  },
];
