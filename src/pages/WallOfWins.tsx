import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import WinCard from "@/components/WinCard";
import { 
  getWins, 
  getTodayWins, 
  getThisWeekWins, 
  getRandomWins,
  initializeSampleWins,
  Win 
} from "@/lib/winsStorage";
import { cn } from "@/lib/utils";

type Filter = "all" | "today" | "week" | "random";

const WallOfWins = () => {
  const [wins, setWins] = useState<Win[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    initializeSampleWins();
    loadWins(filter);
  }, [filter]);

  const loadWins = (selectedFilter: Filter) => {
    switch (selectedFilter) {
      case "today":
        setWins(getTodayWins());
        break;
      case "week":
        setWins(getThisWeekWins());
        break;
      case "random":
        setWins(getRandomWins(12));
        break;
      default:
        setWins(getWins());
    }
  };

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All Wins" },
    { key: "today", label: "Today" },
    { key: "week", label: "This Week" },
    { key: "random", label: "Random Comfort" },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6 opacity-0 animate-fade-in">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in animation-delay-100">
              Wall of Wins
            </h1>
            
            <p className="text-muted-foreground max-w-md mx-auto opacity-0 animate-fade-in animation-delay-200">
              Anonymous moments of progress. No likes, no comments—just genuine wins.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 opacity-0 animate-fade-in animation-delay-300">
            {filters.map((f) => (
              <Button
                key={f.key}
                variant={filter === f.key ? "default" : "warm"}
                size="sm"
                onClick={() => setFilter(f.key)}
                className={cn(
                  "transition-all duration-300",
                  filter === f.key && "shadow-soft"
                )}
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* Wins Grid */}
          {wins.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {wins.map((win, index) => (
                <WinCard
                  key={win.id}
                  content={win.content}
                  mood={win.mood}
                  animationDelay={`animation-delay-${Math.min((index % 6) * 100, 500)}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 opacity-0 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <Sparkles className="h-8 w-8 text-muted-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No wins found
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {filter === "today" 
                  ? "No wins recorded today yet. Every day is a new chance."
                  : filter === "week"
                  ? "No wins this week yet. That's okay—you're still here."
                  : "Be the first to share a small win!"}
              </p>
              
              <Button asChild variant="default">
                <a href="/add">Add Your First Win</a>
              </Button>
            </div>
          )}

          {/* Encouragement note */}
          {wins.length > 0 && (
            <div className="text-center mt-16 opacity-0 animate-fade-in animation-delay-500">
              <p className="text-muted-foreground text-sm italic">
                "Small steps still move you forward." ✨
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WallOfWins;
