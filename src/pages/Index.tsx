import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Cloud, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import WinCard from "@/components/WinCard";
import EncouragementModal from "@/components/EncouragementModal";
import { getRecentWins, initializeSampleWins, Win, sampleWins } from "@/lib/winsStorage";

const Index = () => {
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [featuredWins, setFeaturedWins] = useState<Win[]>([]);

  useEffect(() => {
    initializeSampleWins();
    const wins = getRecentWins(6);
    setFeaturedWins(wins.length > 0 ? wins : sampleWins);
  }, []);

  const whyCards = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Big change starts small",
      description: "Every tiny step forward counts. Progress isn't always visible, but it's always real.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "You're allowed to move slowly",
      description: "There's no timeline for healing or growth. Your pace is perfect for you.",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Not every day has to be productive",
      description: "Some days, simply existing is enough. Rest is part of the journey.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 opacity-0 animate-fade-in">
              <Sun className="h-4 w-4" />
              <span className="text-sm font-medium">A gentle space for reflection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in animation-delay-100">
              Progress doesn't have to be loud.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-200">
              Write one small win from today. That's enough.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-300">
              <Button asChild variant="hero" size="lg">
                <Link to="/add">
                  Add Today's Win
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/wall">
                  Read Others' Wins
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Small Wins Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
              Why small wins matter
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-in animation-delay-100">
              In a world that celebrates hustle, we celebrate the gentle moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyCards.map((card, index) => (
              <div
                key={card.title}
                className={`card-soft p-6 text-center opacity-0 animate-fade-in animation-delay-${(index + 2) * 100}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Wins Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
              Recent small wins
            </h2>
            <p className="text-muted-foreground opacity-0 animate-fade-in animation-delay-100">
              Anonymous moments of progress from our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {featuredWins.map((win, index) => (
              <WinCard
                key={win.id}
                content={win.content}
                mood={win.mood}
                animationDelay={`animation-delay-${(index + 2) * 100}`}
              />
            ))}
          </div>

          <div className="text-center mt-10 opacity-0 animate-fade-in animation-delay-500">
            <Button asChild variant="warm" size="lg">
              <Link to="/wall">
                See all wins
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-20 bg-accent/20">
        <div className="container text-center">
          <div className="max-w-lg mx-auto opacity-0 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/50 mb-6">
              <Heart className="h-8 w-8 text-accent-foreground" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Having a tough day?
            </h2>
            
            <p className="text-muted-foreground mb-8">
              That's okay. Not every day needs a win. Sometimes just getting through is enough.
            </p>
            
            <Button 
              variant="gentle" 
              size="lg"
              onClick={() => setShowEncouragement(true)}
            >
              Today was hard
            </Button>
          </div>
        </div>
      </section>

      <EncouragementModal 
        isOpen={showEncouragement} 
        onClose={() => setShowEncouragement(false)} 
      />
    </Layout>
  );
};

export default Index;
