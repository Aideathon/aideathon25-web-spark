import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient tech-grid min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-gradient">Aideathon</span>
                <span className="text-accent"> '25</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Where Innovation Meets Implementation
              </p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 p-4 card-gradient rounded-lg border border-border/50">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">26 October 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 card-gradient rounded-lg border border-border/50">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="font-medium">CAHCET</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 card-gradient rounded-lg border border-border/50">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium">All Departments</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="glow-primary">
                <Link to="/registration">
                  Register Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/problem-statements">
                  View Problem Statements
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20</div>
                <div className="text-sm text-muted-foreground">Problem Statements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">2-4</div>
                <div className="text-sm text-muted-foreground">Team Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24</div>
                <div className="text-sm text-muted-foreground">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <Trophy className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-sm text-muted-foreground">Prizes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <span className="text-gradient">Innovate?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for 24 hours of intense coding, creative problem-solving, and collaborative innovation. 
              Organized by Final Year AI & Data Science students at C. Abdul Hakeem College of Engineering & Technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 card-gradient rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">Open Innovation</h3>
                <p className="text-muted-foreground">
                  Students from all departments are welcome to participate and showcase their skills.
                </p>
              </div>
              <div className="p-6 card-gradient rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-secondary">Expert Mentorship</h3>
                <p className="text-muted-foreground">
                  Get guidance from industry experts and faculty members throughout the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};