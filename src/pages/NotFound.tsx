import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient tech-grid">
      <div className="container max-w-2xl text-center">
        <div className="animate-fade-in-up space-y-8">
          <div className="space-y-4">
            <AlertTriangle className="h-24 w-24 text-primary mx-auto animate-float" />
            <h1 className="text-6xl md:text-8xl font-bold text-gradient">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild size="lg" className="glow-primary">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Or navigate using the menu above to explore Aideathon '25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
