
import { Link } from "wouter";
import { Construction, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GeneratePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0" />
      
      <div className="z-10 text-center max-w-md">
        <Construction className="w-24 h-24 text-yellow-500 mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl font-display font-bold text-white mb-4">UNDER CONSTRUCTION</h1>
        <p className="text-xl text-muted-foreground font-tech mb-8">
          The Sketch Generation module is currently being engineered. Check back later for updates.
        </p>
        
        <Link href="/dashboard">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Dashboard
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
    </div>
  );
}
