import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { addWin } from "@/lib/winsStorage";
import { cn } from "@/lib/utils";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "🌟", label: "Proud" },
  { emoji: "💪", label: "Strong" },
  { emoji: "☁️", label: "Calm" },
  { emoji: "❤️", label: "Grateful" },
];

const AddWin = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate a brief delay for the animation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addWin(content.trim(), selectedMood || undefined);
    setIsSubmitted(true);
    
    // Navigate after showing success
    setTimeout(() => {
      navigate("/wall");
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-md mx-auto text-center">
              <div className="animate-scale-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                  <Check className="h-10 w-10 text-primary" />
                </div>
                
                <h1 className="text-2xl font-bold text-foreground mb-4">
                  Your win has been saved.
                </h1>
                
                <p className="text-lg text-primary font-medium mb-2">
                  I'm proud of you. ✨
                </p>
                
                <p className="text-muted-foreground">
                  Redirecting to Wall of Wins...
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10 opacity-0 animate-fade-in">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-3">
                Add a small win
              </h1>
              
              <p className="text-muted-foreground">
                What's something you did today, no matter how small?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 opacity-0 animate-fade-in animation-delay-200">
              <div className="card-soft p-6">
                <label htmlFor="win" className="block text-sm font-medium text-foreground mb-3">
                  My small win today was...
                </label>
                
                <Textarea
                  id="win"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="I drank water... I took a short walk... I asked for help..."
                  className="min-h-[120px] bg-muted/50 border-border/50 rounded-xl resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300"
                />
              </div>

              <div className="card-soft p-6">
                <p className="text-sm font-medium text-foreground mb-4">
                  How are you feeling? (optional)
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {moods.map((mood) => (
                    <button
                      key={mood.emoji}
                      type="button"
                      onClick={() => setSelectedMood(selectedMood === mood.emoji ? null : mood.emoji)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300",
                        "border-2 hover:-translate-y-0.5",
                        selectedMood === mood.emoji
                          ? "border-primary bg-primary/10 shadow-soft"
                          : "border-border/50 bg-muted/30 hover:border-primary/30 hover:bg-muted/50"
                      )}
                    >
                      <span className="text-xl">{mood.emoji}</span>
                      <span className="text-sm font-medium text-foreground">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={!content.trim() || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    Save My Win
                    <Sparkles className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center text-muted-foreground text-sm mt-6 opacity-0 animate-fade-in animation-delay-300">
              No win is too small. 💛
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddWin;
