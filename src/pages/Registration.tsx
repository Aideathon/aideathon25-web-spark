import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, QrCode, Users, Calendar, MapPin } from "lucide-react";

export const Registration = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRegistration = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open("https://forms.gle/aVkrsvWvXDfLtLRU7", "_blank");
      setIsRedirecting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">Registration</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join Aideathon '25? Register your team now and be part of this incredible innovation journey!
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Event Date</h3>
              <p className="text-sm text-muted-foreground">26 October 2025</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Venue</h3>
              <p className="text-sm text-muted-foreground">C. Abdul Hakeem College</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Team Size</h3>
              <p className="text-sm text-muted-foreground">2-4 Members</p>
            </CardContent>
          </Card>
        </div>

        {/* Registration Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* QR Code Option */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary flex items-center justify-center space-x-2">
                <QrCode className="h-6 w-6" />
                <span>Scan QR Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white p-8 rounded-lg inline-block mb-4">
                {/* QR Code placeholder - In a real app, you'd generate this */}
                <div className="w-48 h-48 bg-gray-900 flex items-center justify-center text-white text-xs">
                  QR Code
                  <br />
                  Registration Form
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Scan with your mobile device to open the registration form instantly
              </p>
            </CardContent>
          </Card>

          {/* Button Option */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-secondary flex items-center justify-center space-x-2">
                <ExternalLink className="h-6 w-6" />
                <span>Direct Registration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="py-16">
                <Button 
                  size="lg" 
                  className="glow-primary text-lg px-8 py-6"
                  onClick={handleRegistration}
                  disabled={isRedirecting}
                >
                  {isRedirecting ? "Redirecting..." : "Register Now"}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Click to open the Google Form in a new tab
              </p>
              {isRedirecting && (
                <p className="text-sm text-primary animate-pulse">
                  Redirecting to Registration Form...
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Registration Info */}
        <Card className="card-gradient border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Registration Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">What You'll Need</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Team leader's contact information</li>
                  <li>• All team members' details</li>
                  <li>• Department and year of study</li>
                  <li>• Valid college ID numbers</li>
                  <li>• Preferred problem statement category</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-3">Important Notes</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Registration is completely free</li>
                  <li>• Teams can be formed from any department</li>
                  <li>• Solo participation is also allowed</li>
                  <li>• Final team composition can be modified</li>
                  <li>• Confirmation email will be sent</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border/50">
              <h4 className="font-semibold text-accent mb-3">Registration Deadline</h4>
              <p className="text-muted-foreground">
                Register before <span className="text-primary font-semibold">20 October 2025</span> to secure your spot. 
                Late registrations will be accepted subject to availability.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};