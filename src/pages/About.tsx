import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Users, Target, Award, Lightbulb } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Explore the frontiers of artificial intelligence and data science"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Build cutting-edge solutions using modern technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work in teams and learn from diverse perspectives"
    },
    {
      icon: Target,
      title: "Real Impact",
      description: "Solve genuine problems that matter to society"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Win exciting prizes and gain industry recognition"
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description: "Expand your skills and knowledge in a competitive environment"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-6xl">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="text-gradient">Aideathon '25</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A hackathon open for all departments, proudly organized by Final Year AI & Data Science students 
            at C. Abdul Hakeem College of Engineering & Technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              Aideathon '25 is more than just a hackathon – it's a platform for innovation, collaboration, 
              and technological excellence. We believe in fostering creativity across all disciplines, 
              bringing together minds from different departments to solve real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground">
              Our event provides a unique opportunity for students to showcase their skills, learn new technologies, 
              and network with like-minded individuals. Whether you're a seasoned coder or a creative thinker, 
              there's a place for you at Aideathon '25.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary">Event Goals</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <span>Foster innovation and creative problem-solving</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                <span>Encourage interdisciplinary collaboration</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                <span>Provide hands-on learning experiences</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <span>Connect students with industry professionals</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                <span>Celebrate technological excellence</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why <span className="text-gradient">Participate?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient border-border/50 hover:border-primary/50 transition-all-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <Card className="card-gradient border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Eligibility & Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Who Can Participate?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Students from all departments</li>
                  <li>• Undergraduate and postgraduate students</li>
                  <li>• Teams of 2-4 members recommended</li>
                  <li>• Solo participation is also welcome</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">What You Need</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Laptop with necessary software</li>
                  <li>• Creative mindset and problem-solving skills</li>
                  <li>• Enthusiasm for innovation</li>
                  <li>• Valid student ID for verification</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};