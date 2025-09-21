import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target, Users, Clock, CheckCircle, XCircle } from "lucide-react";

export const PrizesRules = () => {
  const prizes = [
    {
      position: "1st Place",
      icon: Trophy,
      amount: "₹50,000",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Winner takes all - the ultimate champion"
    },
    {
      position: "2nd Place", 
      icon: Award,
      amount: "₹30,000",
      color: "text-gray-400",
      bgColor: "bg-gray-400/10",
      description: "Outstanding performance and innovation"
    },
    {
      position: "3rd Place",
      icon: Star,
      amount: "₹20,000",
      color: "text-amber-600",
      bgColor: "bg-amber-600/10", 
      description: "Excellent execution and creativity"
    }
  ];

  const specialPrizes = [
    { title: "Best AI/ML Solution", amount: "₹15,000", icon: "🤖" },
    { title: "Most Innovative Idea", amount: "₹15,000", icon: "💡" },
    { title: "Best Hardware Project", amount: "₹15,000", icon: "⚡" },
    { title: "People's Choice Award", amount: "₹10,000", icon: "❤️" }
  ];

  const rules = [
    {
      category: "Team Formation",
      icon: Users,
      rules: [
        "Teams must consist of 2-4 members",
        "Solo participation is allowed but not recommended", 
        "Teams can include students from different departments",
        "Team composition can be modified until event start"
      ]
    },
    {
      category: "Time Constraints",
      icon: Clock,
      rules: [
        "Event duration: 24 hours continuous",
        "Project submission deadline is strict",
        "No extensions will be granted",
        "Time management is crucial for success"
      ]
    },
    {
      category: "Project Requirements",
      icon: Target,
      rules: [
        "Projects must be original and created during the event",
        "Use of existing code libraries is permitted",
        "Plagiarism will result in immediate disqualification",
        "All code must be functional and demonstrable"
      ]
    }
  ];

  const judgingCriteria = [
    { criterion: "Innovation & Creativity", weight: "30%", color: "text-primary" },
    { criterion: "Technical Implementation", weight: "25%", color: "text-secondary" },
    { criterion: "Problem Solving Approach", weight: "20%", color: "text-accent" },
    { criterion: "Presentation & Demo", weight: "15%", color: "text-primary" },
    { criterion: "Team Collaboration", weight: "10%", color: "text-secondary" }
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
            Prizes & <span className="text-gradient">Rules</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Compete for amazing prizes and recognition. Here's everything you need to know about 
            the competition rules and judging criteria.
          </motion.p>
        </motion.div>

        {/* Main Prizes */}
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
            Main <span className="text-gradient">Prizes</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <Card className={`card-gradient border-border/50 hover:border-primary/50 transition-all-smooth ${prize.bgColor}`}>
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`mx-auto mb-4 ${prize.color}`}
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <prize.icon className="h-12 w-12" />
                    </motion.div>
                    <CardTitle className="text-2xl">{prize.position}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <motion.div 
                      className={`text-4xl font-bold ${prize.color}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + index * 0.2,
                        type: "spring",
                        stiffness: 200 
                      }}
                      viewport={{ once: true }}
                    >
                      {prize.amount}
                    </motion.div>
                    <p className="text-muted-foreground">{prize.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Category Prizes */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Special Category <span className="text-secondary">Awards</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPrizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, x: index % 2 === 0 ? 5 : -5 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <motion.div 
                      className="text-3xl"
                      initial={{ rotate: -45, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {prize.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{prize.title}</h3>
                      <p className="text-accent font-bold text-xl">{prize.amount}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rules Section */}
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
            Competition <span className="text-accent">Rules</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {rules.map((ruleCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <ruleCategory.icon className="h-6 w-6 text-primary" />
                      <span>{ruleCategory.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {ruleCategory.rules.map((rule, ruleIndex) => (
                        <motion.li 
                          key={ruleIndex} 
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + ruleIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{rule}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Judging Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mb-12 card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center space-x-3">
                <Target className="h-6 w-6" />
                <span>Judging Criteria</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {judgingCriteria.map((criteria, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center space-y-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`text-2xl font-bold ${criteria.color}`}
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {criteria.weight}
                    </motion.div>
                    <h4 className="font-medium text-sm">{criteria.criterion}</h4>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-destructive flex items-center space-x-3">
                <XCircle className="h-6 w-6" />
                <span>Important Notes</span>
              </CardTitle>
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
                  <h4 className="font-semibold text-primary mb-2">Disqualification Conditions</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Plagiarism or use of pre-existing projects</li>
                    <li>• Violation of code of conduct</li>
                    <li>• Late submission beyond deadline</li>
                    <li>• Incomplete or non-functional projects</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-secondary mb-2">Additional Benefits</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Certificate of participation for all</li>
                    <li>• Networking opportunities with industry experts</li>
                    <li>• Potential internship opportunities</li>
                    <li>• Feature in college newsletter and social media</li>
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