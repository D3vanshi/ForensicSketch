
import { Link } from "wouter";
import { PenTool, ScanFace, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-0" />
      
      {/* Header */}
      <header className="w-full max-w-6xl z-10 flex justify-between items-center mb-20 border-b border-primary/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
          <span className="font-display text-2xl tracking-widest text-white">FORENSIC<span className="text-primary">AI</span></span>
        </div>
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-destructive transition-colors">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="z-10 w-full max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 glow-text">SELECT MODULE</h2>
          <p className="text-xl text-muted-foreground font-tech">Initiate forensic protocol sequence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Module 1: Generate */}
          <Link href="/generate">
            <motion.div 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(6, 182, 212, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer h-64 border border-primary/20 bg-card/40 backdrop-blur-md rounded-lg flex flex-col items-center justify-center p-8 transition-all hover:border-primary/80 hover:shadow-[0_0_30px_-5px_var(--color-primary)]"
            >
              <div className="mb-6 p-4 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-colors">
                <PenTool className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">SKETCH GENERATION</h3>
              <p className="text-muted-foreground text-center font-tech">Create composite sketches using AI-assisted tools</p>
            </motion.div>
          </Link>

          {/* Module 2: Identification */}
          <Link href="/identify">
            <motion.div 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(6, 182, 212, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer h-64 border border-primary/20 bg-card/40 backdrop-blur-md rounded-lg flex flex-col items-center justify-center p-8 transition-all hover:border-primary/80 hover:shadow-[0_0_30px_-5px_var(--color-primary)]"
            >
              <div className="mb-6 p-4 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-colors">
                <ScanFace className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">IDENTIFICATION</h3>
              <p className="text-muted-foreground text-center font-tech">Analyze sketches against criminal database</p>
            </motion.div>
          </Link>
        </div>
      </main>

      {/* Footer / Status */}
      <footer className="z-10 mt-auto pt-10 text-center w-full">
        <div className="inline-block px-4 py-1 border border-primary/20 rounded-full bg-black/50 text-xs font-mono text-primary/70">
          STATUS: ONLINE // DATABASE: CONNECTED // NODES: 42
        </div>
      </footer>
    </div>
  );
}
