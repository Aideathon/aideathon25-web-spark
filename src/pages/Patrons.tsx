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
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-gradient">Patrons</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Special thanks to our amazing sponsors, mentors, and supporters who make Aideathon '25 possible. 
            Their contribution drives innovation and empowers the next generation of tech leaders.
          </p>
        </div>

        {/* Sponsors Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Sponsors</span>
            </h2>
            <p className="text-muted-foreground">Organizations supporting our vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="card-gradient border-border/50 hover:border-primary/50 transition-all-smooth">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{sponsor.logo}</div>
                  <h3 className="font-semibold text-lg mb-2">{sponsor.name}</h3>
                  <p className="text-primary text-sm">{sponsor.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Expert <span className="text-secondary">Mentors</span>
            </h2>
            <p className="text-muted-foreground">Industry experts guiding our participants</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="card-gradient border-border/50 hover:border-secondary/50 transition-all-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{mentor.avatar}</div>
                  <h3 className="font-semibold text-lg mb-1">{mentor.name}</h3>
                  <p className="text-secondary text-sm mb-2">{mentor.role}</p>
                  <p className="text-muted-foreground text-xs">{mentor.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supporters Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-accent">Supporters</span>
            </h2>
            <p className="text-muted-foreground">Our backbone of institutional support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supporters.map((supporter, index) => (
              <Card key={index} className="card-gradient border-border/50">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{supporter.name}</h3>
                    <p className="text-accent text-sm mb-1">{supporter.role}</p>
                    <p className="text-muted-foreground text-xs">{supporter.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Thank You Section */}
        <Card className="card-gradient border-border/50 text-center">
          <CardHeader>
            <CardTitle className="text-3xl text-primary flex items-center justify-center space-x-3">
              <Heart className="h-8 w-8 text-red-500" />
              <span>Special Thanks</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We extend our heartfelt gratitude to all our patrons who believe in fostering innovation 
              and supporting the next generation of technology leaders. Your contribution makes dreams come true.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Community Support</h4>
                <p className="text-sm text-muted-foreground">Building stronger tech communities</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold">Excellence Recognition</h4>
                <p className="text-sm text-muted-foreground">Celebrating outstanding achievements</p>
              </div>
              <div className="text-center">
                <Building2 className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold">Industry Partnership</h4>
                <p className="text-sm text-muted-foreground">Bridging academia and industry</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border/50">
              <p className="text-accent font-medium">
                Interested in becoming a patron? Contact us to learn about sponsorship opportunities.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};