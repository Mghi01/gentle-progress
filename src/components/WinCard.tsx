import { Heart, Sparkles, Sun, Cloud, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface WinCardProps {
  content: string;
  mood?: string;
  className?: string;
  animationDelay?: string;
}

const moodIcons: Record<string, React.ReactNode> = {
  "😊": <Sun className="h-4 w-4 text-primary" />,
  "🌟": <Star className="h-4 w-4 text-accent-foreground" />,
  "💪": <Sparkles className="h-4 w-4 text-primary" />,
  "☁️": <Cloud className="h-4 w-4 text-muted-foreground" />,
  "❤️": <Heart className="h-4 w-4 text-primary fill-primary" />,
};

const WinCard = ({ content, mood, className, animationDelay }: WinCardProps) => {
  return (
    <div 
      className={cn(
        "card-soft p-5 opacity-0 animate-fade-in",
        className,
        animationDelay
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {mood && moodIcons[mood] ? moodIcons[mood] : <Sparkles className="h-4 w-4 text-primary" />}
        </div>
        <p className="text-foreground leading-relaxed pt-1">{content}</p>
      </div>
    </div>
  );
};

export default WinCard;
