import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award, Building2 } from "lucide-react";

export const Patrons = () => {
  const sponsors = [
    { name: "Tech Innovators Ltd", type: "Title Sponsor", logo: "🚀" },
    { name: "AI Solutions Corp", type: "Platinum Sponsor", logo: "🤖" },
    { name: "Future Tech Hub", type: "Gold Sponsor", logo: "⭐" },
    { name: "Digital Ventures", type: "Silver Sponsor", logo: "💎" }
  ];

  const mentors = [
    { name: "Dr. Sarah Johnson", role: "AI Research Scientist", company: "Google AI", avatar: "👩‍💻" },
    { name: "Mr. Raj Patel", role: "Senior Software Engineer", company: "Microsoft", avatar: "👨‍💻" },
    { name: "Prof. Lisa Chen", role: "Data Science Professor", company: "MIT", avatar: "👩‍🏫" },
    { name: "Dr. Ahmed Hassan", role: "Machine Learning Expert", company: "OpenAI", avatar: "👨‍🔬" }
  ];

  const supporters = [
    { name: "College Principal", role: "Dr. Abdul Rahman", type: "Academic Support" },
    { name: "HOD - AI & DS", role: "Prof. Fatima Khan", type: "Departmental Support" },
    { name: "Student Council", role: "Executive Committee", type: "Student Support" },
    { name: "Alumni Association", role: "Networking Support", type: "Alumni Support" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-6xl">
        {/* Header */}
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
            Our <span className="text-gradient">Patrons</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Special thanks to our amazing sponsors, mentors, and supporters who make Aideathon '25 possible. 
            Their contribution drives innovation and empowers the next generation of tech leaders.
          </motion.p>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Sponsors</span>
            </h2>
            <p className="text-muted-foreground">Organizations supporting our vision</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all-smooth">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      viewport={{ once: true }}
                    >
                      {sponsor.logo}
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{sponsor.name}</h3>
                    <p className="text-primary text-sm">{sponsor.type}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mentors Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Expert <span className="text-secondary">Mentors</span>
            </h2>
            <p className="text-muted-foreground">Industry experts guiding our participants</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50 hover:border-secondary/50 transition-all-smooth">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="text-5xl mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      viewport={{ once: true }}
                    >
                      {mentor.avatar}
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-1">{mentor.name}</h3>
                    <p className="text-secondary text-sm mb-2">{mentor.role}</p>
                    <p className="text-muted-foreground text-xs">{mentor.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supporters Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-accent">Supporters</span>
            </h2>
            <p className="text-muted-foreground">Our backbone of institutional support</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supporters.map((supporter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  x: index % 2 === 0 ? 10 : -10,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <motion.div 
                      className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0"
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      viewport={{ once: true }}
                    >
                      <Building2 className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{supporter.name}</h3>
                      <p className="text-accent text-sm mb-1">{supporter.role}</p>
                      <p className="text-muted-foreground text-xs">{supporter.type}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thank You Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="card-gradient border-border/50 text-center">
            <CardHeader>
              <CardTitle className="text-3xl text-primary flex items-center justify-center space-x-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Heart className="h-8 w-8 text-red-500" />
                </motion.div>
                <span>Special Thanks</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We extend our heartfelt gratitude to all our patrons who believe in fostering innovation 
                and supporting the next generation of technology leaders. Your contribution makes dreams come true.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Users, title: "Community Support", description: "Building stronger tech communities", color: "text-primary" },
                  { icon: Award, title: "Excellence Recognition", description: "Celebrating outstanding achievements", color: "text-secondary" },
                  { icon: Building2, title: "Industry Partnership", description: "Bridging academia and industry", color: "text-accent" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-2`} />
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="pt-6 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-accent font-medium">
                  Interested in becoming a patron? Contact us to learn about sponsorship opportunities.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};