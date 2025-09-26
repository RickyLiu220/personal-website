import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Github, ExternalLink, Calendar, Users } from "lucide-react";

export function ProjectsPage() {
  const projects = [
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
  ];

  const stats = {
    totalProjects: projects.length,
    completedProjects: projects.filter((p) => p.status === "Completed").length,
    technologies: [...new Set(projects.flatMap((p) => p.technologies))].length,
    totalImpact: "0",
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl">My Projects</h1>
        <p className="text-muted-foreground">
          Building solutions, learning technologies, and solving real-world
          problems
        </p>
      </div>

      {/* Project Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              Across multiple domains
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.completedProjects}</div>
            <p className="text-xs text-muted-foreground">
              Ready for production
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.technologies}</div>
            <p className="text-xs text-muted-foreground">
              Different tech stacks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.totalImpact}</div>
            <p className="text-xs text-muted-foreground">Users reached</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        <h2 className="text-2xl">Project Showcase</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="outline">{project.category}</Badge>
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{project.team}</span>
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      project.status === "Completed" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                <p className="text-muted-foreground">{project.description}</p>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="challenge">Challenge</TabsTrigger>
                    <TabsTrigger value="learning">Learning</TabsTrigger>
                    <TabsTrigger value="impact">Impact</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 4).map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="challenge" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">The Challenge</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">My Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="learning" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">What I Learned</h4>
                      <ul className="space-y-1">
                        {project.learnings
                          .slice(0, 5)
                          .map((learning, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {learning}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="impact" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Project Impact</h4>
                      <p className="text-sm text-muted-foreground italic border-l-4 border-primary/20 pl-4">
                        {project.impact}
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-2"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Future Projects */}
      <Card>
        <CardHeader>
          <CardTitle>What's Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            I'm always working on new projects and exploring topics. Here are
            some areas I'm excited to dive into next:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Machine Learning</h4>
              <p className="text-sm text-muted-foreground">
                Building a recommendation system for my university's course
                selection process
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">E-Commerce</h4>
              <p className="text-sm text-muted-foreground">
                Create a E-Commerce website for my friend's startup that will
                handle ~$10k transactions monthly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
