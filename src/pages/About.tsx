import { motion } from "framer-motion";
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

  const goalItems = [
    "Foster innovation and creative problem-solving",
    "Encourage interdisciplinary collaboration", 
    "Provide hands-on learning experiences",
    "Connect students with industry professionals",
    "Celebrate technological excellence"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="text-gradient">Aideathon '25</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A hackathon open for all departments, proudly organized by Final Year AI & Data Science students 
            at C. Abdul Hakeem College of Engineering & Technology.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Aideathon '25 is more than just a hackathon – it's a platform for innovation, collaboration, 
              and technological excellence. We believe in fostering creativity across all disciplines, 
              bringing together minds from different departments to solve real-world challenges.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our event provides a unique opportunity for students to showcase their skills, learn new technologies, 
              and network with like-minded individuals. Whether you're a seasoned coder or a creative thinker, 
              there's a place for you at Aideathon '25.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary">Event Goals</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              {goalItems.map((goal, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                      index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  <span>{goal}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why <span className="text-gradient">Participate?</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all-smooth">
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Eligibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Eligibility & Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-primary mb-2">Who Can Participate?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Students from all departments</li>
                    <li>• Undergraduate and postgraduate students</li>
                    <li>• Teams of 2-4 members recommended</li>
                    <li>• Solo participation is also welcome</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-secondary mb-2">What You Need</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Laptop with necessary software</li>
                    <li>• Creative mindset and problem-solving skills</li>
                    <li>• Enthusiasm for innovation</li>
                    <li>• Valid student ID for verification</li>
                  </ul>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};