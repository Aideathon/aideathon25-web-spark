import { useState } from "react";
import { motion } from "framer-motion";
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

  const eventInfoCards = [
    { icon: Calendar, title: "Event Date", info: "26 October 2025", color: "text-primary" },
    { icon: MapPin, title: "Venue", info: "C. Abdul Hakeem College", color: "text-secondary" },
    { icon: Users, title: "Team Size", info: "2-4 Members", color: "text-accent" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
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
            <span className="text-gradient">Registration</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to join Aideathon '25? Register your team now and be part of this incredible innovation journey!
          </motion.p>
        </motion.div>

        {/* Event Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {eventInfoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
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

        {/* Registration Options */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {/* QR Code Option */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary flex items-center justify-center space-x-2">
                  <QrCode className="h-6 w-6" />
                  <span>Scan QR Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <motion.div 
                  className="bg-white p-8 rounded-lg inline-block mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://forms.gle/aVkrsvWvXDfLtLRU7"
                    alt="Registration QR Code"
                    className="w-48 h-48"
                  />
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  Scan with your mobile device to open the registration form instantly
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Button Option */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-secondary flex items-center justify-center space-x-2">
                  <ExternalLink className="h-6 w-6" />
                  <span>Direct Registration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="py-16">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="glow-primary text-lg px-8 py-6"
                      onClick={handleRegistration}
                      disabled={isRedirecting}
                    >
                      {isRedirecting ? "Redirecting..." : "Register Now"}
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Click to open the Google Form in a new tab
                </p>
                {isRedirecting && (
                  <motion.p 
                    className="text-sm text-primary animate-pulse"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Redirecting to Registration Form...
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Registration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Registration Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                  <h4 className="font-semibold text-primary mb-3">What You'll Need</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Team leader's contact information</li>
                    <li>• All team members' details</li>
                    <li>• Department and year of study</li>
                    <li>• Valid college ID numbers</li>
                    <li>• Preferred problem statement category</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-secondary mb-3">Important Notes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Registration is completely free</li>
                    <li>• Teams can be formed from any department</li>
                    <li>• Solo participation is also allowed</li>
                    <li>• Final team composition can be modified</li>
                    <li>• Confirmation email will be sent</li>
                  </ul>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="pt-6 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-accent mb-3">Registration Deadline</h4>
                <p className="text-muted-foreground">
                  Register before <span className="text-primary font-semibold">20 October 2025</span> to secure your spot. 
                  Late registrations will be accepted subject to availability.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};