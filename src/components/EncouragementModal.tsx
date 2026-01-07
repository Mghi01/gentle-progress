import { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EncouragementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const encouragements = [
  "You still showed up. That matters.",
  "Some days, just breathing is enough.",
  "Rest is still progress.",
  "You're doing better than you think.",
  "It's okay to take it slow today.",
  "Tomorrow is a fresh start.",
  "Being kind to yourself is a win too.",
];

const EncouragementModal = ({ isOpen, onClose }: EncouragementModalProps) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      const randomMessage = encouragements[Math.floor(Math.random() * encouragements.length)];
      setMessage(randomMessage);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={cn(
          "relative w-full max-w-md bg-card rounded-3xl p-8 shadow-hover animate-scale-in",
          "text-center"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors duration-300"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/50 mb-4">
            <Heart className="h-8 w-8 text-primary fill-primary animate-pulse-soft" />
          </div>
        </div>

        <p className="text-xl font-semibold text-foreground mb-4 leading-relaxed">
          {message}
        </p>

        <p className="text-muted-foreground text-sm mb-6">
          Hard days don't define you. You're allowed to rest.
        </p>

        <Button variant="gentle" onClick={onClose} className="w-full">
          Thank you
        </Button>
      </div>
    </div>
  );
};

export default EncouragementModal;
