
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScanFrameProps {
  children: React.ReactNode;
  isScanning?: boolean;
  className?: string;
}

export function ScanFrame({ children, isScanning = false, className }: ScanFrameProps) {
  return (
    <div className={cn("relative overflow-hidden border-2 border-primary/30 bg-black/40 backdrop-blur-sm rounded-sm", className)}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} 
      />

      {/* Scanning Beam */}
      {isScanning && (
        <motion.div
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent z-20 pointer-events-none"
        />
      )}
    </div>
  );
}
