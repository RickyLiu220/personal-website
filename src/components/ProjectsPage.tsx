import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Github, ExternalLink, Calendar, Users, Star, GitBranch } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      category: 'Web Development',
      status: 'Completed',
      duration: '2 weeks',
      team: 'Solo',
      description: 'A responsive portfolio website showcasing my projects, skills, and academic journey. Built with modern web technologies and deployed on Vercel.',
      challenge: 'Creating a professional, responsive design that effectively communicates my skills and experiences while maintaining good performance and accessibility.',
      solution: 'Used React with TypeScript for type safety, Tailwind CSS for responsive design, and implemented a clean component architecture. Added smooth animations and optimized for both desktop and mobile experiences.',
      learnings: [
        'Advanced React patterns and component composition',
        'Responsive design principles and mobile-first approach',
        'Performance optimization techniques',
        'SEO best practices for static sites',
        'Design system creation and consistency'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
      features: [
        'Responsive design across all devices',
        'Interactive navigation and smooth transitions',
        'Dynamic content loading',
        'Accessibility compliant (WCAG 2.1)',
        'Fast loading times and SEO optimized'
      ],
      githubUrl: '#',
      liveUrl: '#',
      impact: 'Successfully landed 3 internship interviews and received positive feedback on the design and technical implementation.'
    },
    {
      id: 'task-manager',
      title: 'Collaborative Task Manager',
      category: 'Full Stack',
      status: 'In Progress',
      duration: '6 weeks',
      team: '4 members',
      description: 'A full-stack web application for team project management with real-time collaboration features, user authentication, and project analytics.',
      challenge: 'Building a scalable real-time application that handles multiple users collaborating simultaneously while maintaining data consistency and good user experience.',
      solution: 'Implemented a microservices architecture with Node.js backend, React frontend, and WebSocket connections for real-time updates. Used PostgreSQL for relational data and Redis for caching and session management.',
      learnings: [
        'Real-time application development with WebSockets',
        'Database design for complex relationships',
        'User authentication and authorization',
        'API design and RESTful principles',
        'Team collaboration and code review processes',
        'Agile development methodology'
      ],
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT', 'Docker'],
      features: [
        'Real-time task updates and notifications',
        'User roles and permissions system',
        'Project analytics and reporting',
        'File upload and sharing',
        'Mobile-responsive interface',
        'Email notifications and reminders'
      ],
      githubUrl: '#',
      liveUrl: '#',
      impact: 'Currently being tested by 25+ beta users from our computer science program with positive feedback on usability and performance.'
    },
    {
      id: 'algorithm-visualizer',
      title: 'Algorithm Visualization Tool',
      category: 'Educational',
      status: 'Completed',
      duration: '3 weeks',
      team: 'Solo',
      description: 'An interactive web application that visualizes popular sorting and searching algorithms to help students understand algorithmic concepts through visual learning.',
      challenge: 'Creating smooth, educational animations that clearly demonstrate algorithm execution while providing interactive controls and maintaining good performance.',
      solution: 'Built with vanilla JavaScript and HTML5 Canvas for smooth animations. Implemented step-by-step execution controls, customizable data sets, and performance comparisons between different algorithms.',
      learnings: [
        'HTML5 Canvas API and animation techniques',
        'Algorithm implementation and optimization',
        'User interface design for educational tools',
        'Performance optimization for smooth animations',
        'Educational content design and user experience'
      ],
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Web APIs'],
      features: [
        'Interactive sorting algorithm visualizations',
        'Step-by-step execution controls',
        'Customizable array sizes and values',
        'Performance metrics and comparisons',
        'Educational explanations and pseudocode',
        'Responsive design for various screen sizes'
      ],
      githubUrl: '#',
      liveUrl: '#',
      impact: 'Used by 100+ students in our Data Structures course and received recognition from the professor for its educational value.'
    },
    {
      id: 'weather-app',
      title: 'Smart Weather Dashboard',
      category: 'Mobile App',
      status: 'Completed',
      duration: '4 weeks',
      team: 'Pair Programming',
      description: 'A mobile-first weather application with location services, weather forecasts, and personalized recommendations based on weather conditions.',
      challenge: 'Integrating multiple APIs, handling location permissions, and creating an intuitive mobile interface that works well across different devices and operating systems.',
      solution: 'Used React Native for cross-platform development, integrated weather APIs for real-time data, and implemented local storage for offline capabilities and user preferences.',
      learnings: [
        'Mobile app development with React Native',
        'API integration and data management',
        'Location services and permissions handling',
        'Offline functionality and data caching',
        'Mobile UI/UX design principles',
        'App store deployment process'
      ],
      technologies: ['React Native', 'Expo', 'REST APIs', 'AsyncStorage', 'Geolocation'],
      features: [
        'Real-time weather data and forecasts',
        'Location-based weather updates',
        'Personalized clothing recommendations',
        'Weather alerts and notifications',
        'Offline mode with cached data',
        'Customizable widgets and themes'
      ],
      githubUrl: '#',
      liveUrl: '#',
      impact: 'Downloaded 500+ times in the first month and maintained a 4.7-star rating on the app stores.'
    }
  ];

  const stats = {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === 'Completed').length,
    technologies: [...new Set(projects.flatMap(p => p.technologies))].length,
    totalImpact: '650+'
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl">My Projects</h1>
        <p className="text-muted-foreground">
          Building solutions, learning technologies, and solving real-world problems
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
            <p className="text-xs text-muted-foreground">Across multiple domains</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.completedProjects}</div>
            <p className="text-xs text-muted-foreground">Ready for production</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.technologies}</div>
            <p className="text-xs text-muted-foreground">Different tech stacks</p>
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
                  <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
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
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="challenge" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">The Challenge</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">My Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="learning" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">What I Learned</h4>
                      <ul className="space-y-1">
                        {project.learnings.slice(0, 5).map((learning, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{learning}</span>
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
                  <Button size="sm" variant="outline" className="flex items-center space-x-2">
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
            I'm always working on new projects and exploring emerging technologies. Here are some areas I'm excited to dive into next:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Machine Learning</h4>
              <p className="text-sm text-muted-foreground">Building a recommendation system for my university's course selection process</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Blockchain</h4>
              <p className="text-sm text-muted-foreground">Creating a decentralized voting system for student organizations</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">IoT Development</h4>
              <p className="text-sm text-muted-foreground">Smart campus navigation system using sensors and mobile integration</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}