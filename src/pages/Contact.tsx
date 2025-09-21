import { useState } from "react";
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
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about Aideathon '25? Need assistance with registration or want to become a sponsor? 
            We're here to help! Reach out to our organizing team.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">aideathon2025@cahcet.edu.in</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">+91 98765 00000</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">CAHCET, Thiruvarur</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
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
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full glow-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Organizers */}
          <div>
            <Card className="card-gradient border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center space-x-3">
                  <Users className="h-6 w-6" />
                  <span>Organizing Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {organizers.map((organizer, index) => (
                  <div key={index} className="border-b border-border/20 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
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
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Response Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">General Inquiries</h4>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Registration Issues</h4>
                    <p className="text-sm text-muted-foreground">Priority response within 12 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Sponsorship Opportunities</h4>
                    <p className="text-sm text-muted-foreground">Dedicated team will contact within 48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Location */}
        <Card className="mt-12 card-gradient border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
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
              </div>
              <div className="bg-muted/20 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};