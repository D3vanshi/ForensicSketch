
import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Shield, Lock, Fingerprint, UserPlus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock login delay
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Access Granted",
        description: "Welcome back, Officer.",
      });
      setLocation("/dashboard");
    }, 1500);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Registration Successful",
        description: "Credentials pending administrative approval.",
      });
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background overlay for tint */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/50 mb-4 animate-pulse">
            <Fingerprint className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white tracking-widest uppercase glow-text">
            Forensic<span className="text-primary">AI</span>
          </h1>
          <p className="text-muted-foreground font-tech tracking-wide mt-2">
            Secure Biometric Identification System
          </p>
        </div>

        <Card className="border-primary/20 bg-black/40 backdrop-blur-md shadow-2xl">
          <CardHeader>
            <CardTitle className="text-center text-xl font-display text-primary">System Access</CardTitle>
            <CardDescription className="text-center">Enter credentials to access the mainframe</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary/50 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Admin ID / Username</Label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="username" placeholder="ADMIN-001" className="pl-9 bg-secondary/30 border-primary/20 focus:border-primary" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="password" type="password" className="pl-9 bg-secondary/30 border-primary/20 focus:border-primary" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full font-display tracking-wide" disabled={loading}>
                    {loading ? "Authenticating..." : "Initialize Session"}
                    {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input id="fullname" placeholder="Officer Name" className="bg-secondary/30 border-primary/20" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dept">Department</Label>
                    <Input id="dept" placeholder="Cyber Crimes / Forensics" className="bg-secondary/30 border-primary/20" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" className="bg-secondary/30 border-primary/20" required />
                  </div>
                  <Button type="submit" className="w-full font-display tracking-wide" disabled={loading}>
                    {loading ? "Processing..." : "Create Clearance"}
                    {!loading && <UserPlus className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="text-center mt-6 text-xs text-muted-foreground font-mono">
          SYSTEM VERSION 2.4.1 // SECURE CONNECTION ESTABLISHED
        </div>
      </motion.div>
    </div>
  );
}
