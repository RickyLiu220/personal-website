import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Calendar, User, BookOpen, Code } from "lucide-react";

export function ClassesPage() {
  const classes = [
    {
      id: "cs1331",
      title: "Intro to Object Oriented Programming",
      semester: "Fall 2023",
      professor: "Prof. Richard Landry",
      grade: "A",
      credits: 3,
      icon: Code,
      description:
        "This was the first in depth class that I took on Java, which was the object oriented language chosen for this class",
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

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl">Academic Journey</h1>
        <p className="text-muted-foreground">
          My Journey in Computer Science Through My Coursework
        </p>
      </div>

      {/* Academic Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Courses Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">31</div>
            <p className="text-xs text-muted-foreground">+ 4 in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Current GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4.0</div>
            <p className="text-xs text-muted-foreground">4.0 Scale</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Credits Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">119</div>
            <p className="text-xs text-muted-foreground">credits</p>
          </CardContent>
        </Card>
      </div>

      {/* Classes */}
      <div className="space-y-6">
        <h2 className="text-2xl">Revelant Courses</h2>

        <Accordion
          type="single"
          collapsible
          className="space-y-4 border-b rounded-lg"
        >
          {classes.map((course) => {
            const Icon = course.icon;
            return (
              <AccordionItem
                key={course.id}
                value={course.id}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{course.semester}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{course.professor}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <BookOpen className="h-3 w-3" />
                            <span>{course.credits} credits</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          course.grade === "A"
                            ? "default"
                            : course.grade === "A-"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {course.grade}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-muted-foreground">
                        {course.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-medium mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {course.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-medium mb-3">Class Projects</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {course.projects.map((project, index) => (
                          <div
                            key={index}
                            className="p-3 border rounded-lg overflow-hidden"
                          >
                            <p className="text-sm">{project}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Learnings */}
                    <div>
                      <h4 className="font-medium mb-3">
                        Key Learnings & Impact
                      </h4>
                      <p className="text-sm text-muted-foreground italic border-l-4 border-primary/20 pl-4">
                        {course.keyLearnings}
                      </p>
                    </div>

                    {/* Skills Gained */}
                    <div>
                      <h4 className="font-medium mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
