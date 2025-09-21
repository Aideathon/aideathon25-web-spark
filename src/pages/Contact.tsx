import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const organizers = [
    {
      name: "Mohammed Arshad",
      role: "Event Coordinator",
      email: "arshad.event@cahcet.edu.in",
      phone: "+91 98765 43210",
      department: "AI & Data Science"
    },
    {
      name: "Priya Sharma", 
      role: "Technical Lead",
      email: "priya.tech@cahcet.edu.in",
      phone: "+91 98765 43211",
      department: "AI & Data Science"
    },
    {
      name: "Rajesh Kumar",
      role: "Registration Head",
      email: "rajesh.reg@cahcet.edu.in", 
      phone: "+91 98765 43212",
      department: "AI & Data Science"
    },
    {
      name: "Fatima Ali",
      role: "Sponsorship Manager",
      email: "fatima.sponsor@cahcet.edu.in",
      phone: "+91 98765 43213", 
      department: "AI & Data Science"
    }
  ];

  const contactCards = [
    { icon: Mail, title: "Email Us", info: "aideathon2025@cahcet.edu.in", color: "text-primary" },
    { icon: Phone, title: "Call Us", info: "+91 98765 00000", color: "text-secondary" },
    { icon: MapPin, title: "Visit Us", info: "CAHCET, Thiruvarur", color: "text-accent" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

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
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have questions about Aideathon '25? Need assistance with registration or want to become a sponsor? 
            We're here to help! Reach out to our organizing team.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="card-gradient border-border/50 text-center">
                <CardContent className="p-6">
                  <card.icon className={`h-8 w-8 ${card.color} mx-auto mb-3`} />
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.info}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    >
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <motion.div
                        animate={{ 
                          scale: focusedField === 'name' ? 1.02 : 1,
                          boxShadow: focusedField === 'name' ? "0 0 20px hsl(var(--primary) / 0.3)" : "none"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your full name"
                          required
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <motion.div
                        animate={{ 
                          scale: focusedField === 'email' ? 1.02 : 1,
                          boxShadow: focusedField === 'email' ? "0 0 20px hsl(var(--primary) / 0.3)" : "none"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="your@email.com"
                          required
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <motion.div
                      animate={{ 
                        scale: focusedField === 'subject' ? 1.02 : 1,
                        boxShadow: focusedField === 'subject' ? "0 0 20px hsl(var(--primary) / 0.3)" : "none"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="What's this about?"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <motion.div
                      animate={{ 
                        scale: focusedField === 'message' ? 1.02 : 1,
                        boxShadow: focusedField === 'message' ? "0 0 20px hsl(var(--primary) / 0.3)" : "none"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full glow-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Organizers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Card className="card-gradient border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center space-x-3">
                  <Users className="h-6 w-6" />
                  <span>Organizing Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {organizers.map((organizer, index) => (
                  <motion.div 
                    key={index} 
                    className="border-b border-border/20 pb-4 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <Users className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{organizer.name}</h3>
                        <p className="text-accent text-sm mb-2">{organizer.role}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-3 w-3" />
                            <span>{organizer.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-3 w-3" />
                            <span>{organizer.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Response Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { title: "General Inquiries", description: "We typically respond within 24 hours", color: "text-primary" },
                      { title: "Registration Issues", description: "Priority response within 12 hours", color: "text-secondary" },
                      { title: "Sponsorship Opportunities", description: "Dedicated team will contact within 48 hours", color: "text-accent" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className={`font-semibold ${item.color} mb-2`}>{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Office Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mt-12 card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-lg mb-4">C. Abdul Hakeem College of Engineering & Technology</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Melvisharam - Vellore Main Road</p>
                    <p>Thiruvarur - 614 625</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="font-medium">Office Hours:</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-muted/20 rounded-lg p-6 flex items-center justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    </motion.div>
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};