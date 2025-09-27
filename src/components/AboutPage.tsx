import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "../utils/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import pfp from "../assets/pfp.webp";
import { contactInfo, interests, skills } from "./data/aboutData";

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="relative">
            <ImageWithFallback
              src={pfp}
              alt="Profile picture"
              className="w-48 h-48 rounded-full object-cover border-4 border-primary/20"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl mb-2">Welcome to My Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Computer Science Student @ GATech
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <div className="border-b border-gray-200 mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Hello! I'm a third year here at Georgia Tech. I'm primarily
            interested in Data Science and ML related topics, but I also have
            deep love for full stack development. I love the feeling of being
            able watching something that I made come together and work. That
            feeling is something that I uniquely feel when working on CS
            projects. With code, it truely does feel like the sky is the limit.
          </p>
          <p>
            My threads here at GATech are Intell/Info, which have exposed to a
            large amount of content ranging from Computer Networking to ML to
            Database Management. I have learned how create queries, procedures,
            and functions all in SQL. I've also learned topics like networking
            and the many layers that are included in that. For example, I've
            learned about protocols like TCP and UDP from the Transport layer.
            Finally, I was able to create a neural network in my Intro to AI
            class, where we built a multi-layer perceptron (MLP) to classify
            handwritten digits.
          </p>
          <p>
            When I'm not doing classwork or coding my personal projects, I like
            to play sports and work out. I've been playing badminton for about 6
            years now and I play with the GT Club. I always try to make time for
            sports and keeping in shape. In this regard, I'm very blessed to
            have amazing friends that make the time to come play badminton with
            me as well as work out with me.
          </p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
          <div className="border-b border-gray-200 mt-2" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interests & Hobbies */}
      <div>
        <h2 className="text-2xl mb-6">Interests & Hobbies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <Card
                key={interest.name}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{interest.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Contact Info */}

      <Card>
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            I'm always excited to connect with fellow developers, discuss new
            technologies, or explore potential collaboration opportunities. Feel
            free to reach out through any of the following channels:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground">
                      {contact.label}
                    </div>
                    <div className="truncate">{contact.display}</div>
                  </div>
                  {contact.href.startsWith("http") && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </a>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
