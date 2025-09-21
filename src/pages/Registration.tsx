import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, QrCode, Users, Calendar, MapPin, Sun, Moon } from "lucide-react";
import QRCode from "react-qr-code";

export const Registration = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleRegistration = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open("https://forms.gle/aVkrsvWvXDfLtLRU7", "_blank");
      setIsRedirecting(false);
    }, 1000);
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const eventInfoCards = [
    { icon: Calendar, title: "Event Date", info: "26 October 2025", color: "text-primary" },
    { icon: MapPin, title: "Venue", info: "C. Abdul Hakeem College", color: "text-secondary" },
    { icon: Users, title: "Team Size", info: "2-4 Members", color: "text-accent" }
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen py-20 transition-colors duration-500`}>
      <div className="container max-w-4xl px-4 mx-auto">

        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-8">
          <Button onClick={toggleTheme} size="sm">
            {darkMode ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

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
            className="text-xl max-w-2xl mx-auto"
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
              <Card className="border rounded-lg p-6 text-center">
                <card.icon className={`h-8 w-8 ${card.color} mx-auto mb-3`} />
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm">{card.info}</p>
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
          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border rounded-lg p-6 text-center">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-center space-x-2 mb-4">
                  <QrCode className="h-6 w-6" /> <span>Scan QR Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="inline-block mb-4" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
                  <QRCode
                    value="https://forms.gle/aVkrsvWvXDfLtLRU7"
                    size={200}
                    bgColor={darkMode ? "#111827" : "#ffffff"}
                    fgColor={darkMode ? "#ffffff" : "#000000"}
                  />
                </motion.div>
                <p className="text-sm">Scan with your mobile device to open the registration form instantly.</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Direct Registration Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border rounded-lg p-6 text-center">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-center space-x-2 mb-4">
                  <ExternalLink className="h-6 w-6" /> <span>Direct Registration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  onClick={handleRegistration}
                  disabled={isRedirecting}
                  className="px-6 py-3"
                >
                  {isRedirecting ? "Redirecting..." : "Register Now"}
                </Button>
                {isRedirecting && <p className="mt-2 text-sm animate-pulse">Redirecting to Registration Form...</p>}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Registration Info */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Card className="border rounded-lg p-6">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Registration Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">What You'll Need</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Team leader's contact information</li>
                    <li>• All team members' details</li>
                    <li>• Department and year of study</li>
                    <li>• Valid college ID numbers</li>
                    <li>• Preferred problem statement category</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Important Notes</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Registration is completely free</li>
                    <li>• Teams can be formed from any department</li>
                    <li>• Solo participation is allowed</li>
                    <li>• Final team composition can be modified</li>
                    <li>• Confirmation email will be sent</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t mt-6">
                <h4 className="font-semibold mb-2">Registration Deadline</h4>
                <p>Register before <span className="font-semibold">20 October 2025</span> to secure your spot. Late registrations may be accepted subject to availability.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
