import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const problemStatements = [
  { id: 1, title: "AI-Powered Healthcare Assistant", category: "Software", psNo: "PS001", theme: "Healthcare" },
  { id: 2, title: "Smart Campus Management System", category: "Software", psNo: "PS002", theme: "Education" },
  { id: 3, title: "IoT-Based Environmental Monitoring", category: "Hardware", psNo: "PS003", theme: "Environment" },
  { id: 4, title: "Blockchain Voting System", category: "Software", psNo: "PS004", theme: "Governance" },
  { id: 5, title: "Autonomous Waste Management Robot", category: "Hardware", psNo: "PS005", theme: "Sustainability" },
  { id: 6, title: "Machine Learning Fraud Detection", category: "Software", psNo: "PS006", theme: "Fintech" },
  { id: 7, title: "Smart Traffic Control System", category: "Hardware", psNo: "PS007", theme: "Transportation" },
  { id: 8, title: "Virtual Reality Learning Platform", category: "Software", psNo: "PS008", theme: "Education" },
  { id: 9, title: "AI-Driven Agricultural Optimization", category: "Software", psNo: "PS009", theme: "Agriculture" },
  { id: 10, title: "Wearable Health Monitor", category: "Hardware", psNo: "PS010", theme: "Healthcare" },
  { id: 11, title: "Smart Home Energy Management", category: "Hardware", psNo: "PS011", theme: "Energy" },
  { id: 12, title: "Cryptocurrency Price Predictor", category: "Software", psNo: "PS012", theme: "Fintech" },
  { id: 13, title: "Drone-Based Disaster Response", category: "Hardware", psNo: "PS013", theme: "Emergency" },
  { id: 14, title: "Natural Language Processing Chatbot", category: "Software", psNo: "PS014", theme: "AI/ML" },
  { id: 15, title: "Smart Water Quality Monitor", category: "Hardware", psNo: "PS015", theme: "Environment" },
  { id: 16, title: "E-Commerce Recommendation Engine", category: "Software", psNo: "PS016", theme: "Retail" },
  { id: 17, title: "Automated Parking System", category: "Hardware", psNo: "PS017", theme: "Transportation" },
  { id: 18, title: "Mental Health Support App", category: "Software", psNo: "PS018", theme: "Healthcare" },
  { id: 19, title: "Smart Grid Power Distribution", category: "Hardware", psNo: "PS019", theme: "Energy" },
  { id: 20, title: "Image Recognition Security System", category: "Software", psNo: "PS020", theme: "Security" }
];

export const ProblemStatements = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            Problem <span className="text-gradient">Statements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from 20 innovative challenges spanning various domains and technologies. 
            Each problem statement is designed to push the boundaries of creativity and technical excellence.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">All Problem Statements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 text-primary">S.No</th>
                      <th className="text-left p-4 text-primary">Problem Title</th>
                      <th className="text-left p-4 text-primary">Category</th>
                      <th className="text-left p-4 text-primary">PS No</th>
                      <th className="text-left p-4 text-primary">Theme</th>
                    </tr>
                  </thead>
                  <tbody>
                    {problemStatements.map((ps, index) => (
                      <tr 
                        key={ps.id} 
                        className={`border-b border-border/20 hover:bg-muted/20 transition-all-smooth ${
                          index % 2 === 0 ? 'bg-muted/10' : ''
                        }`}
                      >
                        <td className="p-4 font-medium">{ps.id}</td>
                        <td className="p-4 font-medium">{ps.title}</td>
                        <td className="p-4">
                          <Badge variant={ps.category === 'Software' ? 'default' : 'secondary'}>
                            {ps.category}
                          </Badge>
                        </td>
                        <td className="p-4 text-accent font-mono">{ps.psNo}</td>
                        <td className="p-4">
                          <Badge variant="outline" className="text-muted-foreground">
                            {ps.theme}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {problemStatements.map((ps) => (
            <Card key={ps.id} className="card-gradient border-border/50">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-muted-foreground">#{ps.id}</span>
                  <span className="text-sm text-accent font-mono">{ps.psNo}</span>
                </div>
                <h3 className="font-medium mb-3">{ps.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={ps.category === 'Software' ? 'default' : 'secondary'}>
                    {ps.category}
                  </Badge>
                  <Badge variant="outline" className="text-muted-foreground">
                    {ps.theme}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="mt-12 card-gradient border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-secondary">Selection Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">How to Choose</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Review all problem statements carefully</li>
                  <li>• Consider your team's technical expertise</li>
                  <li>• Think about available resources and time</li>
                  <li>• Choose problems that inspire innovation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Categories</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Software</Badge>
                    <span className="text-sm text-muted-foreground">Focus on coding and algorithms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Hardware</Badge>
                    <span className="text-sm text-muted-foreground">Includes physical components</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};