import { Heart, Sun, Sparkles, Cloud } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 opacity-0 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Heart className="h-8 w-8 text-primary fill-primary" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Small Wins
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="card-soft p-8 opacity-0 animate-fade-in animation-delay-100">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Sun className="h-5 w-5 text-primary" />
                  Why this exists
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In a world obsessed with hustle culture and constant productivity, we forget that progress doesn't always look like finishing a marathon or launching a company.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sometimes progress looks like drinking water. Taking a shower. Sending that text you've been avoiding. Getting out of bed when everything feels heavy.
                </p>
              </div>

              <div className="card-soft p-8 opacity-0 animate-fade-in animation-delay-200">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  The power of small
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Research shows that celebrating small wins releases dopamine—the same chemical that makes us feel good after big achievements. Your brain doesn't care about the size of the win.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By acknowledging tiny moments of progress, we build momentum, self-compassion, and resilience. One small win leads to another.
                </p>
              </div>

              <div className="card-soft p-8 opacity-0 animate-fade-in animation-delay-300">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Cloud className="h-5 w-5 text-primary" />
                  No pressure zone
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  There are no streaks here. No leaderboards. No notifications pushing you to be "more productive." This is a gentle space—a soft journal that doesn't judge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your wins are anonymous. No one can like, comment, or compare. This is just for you, and the quiet reminder that you're doing okay.
                </p>
              </div>

              {/* Quote highlight */}
              <div className="relative py-12 text-center opacity-0 animate-fade-in animation-delay-400">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl" />
                <div className="relative">
                  <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
                    "Rest is still progress."
                  </blockquote>
                  <div className="mt-4 flex justify-center">
                    <Heart className="h-5 w-5 text-primary fill-primary animate-pulse-soft" />
                  </div>
                </div>
              </div>

              <div className="card-soft p-8 text-center opacity-0 animate-fade-in animation-delay-500">
                <p className="text-muted-foreground leading-relaxed">
                  Built with care for anyone who needs a reminder that they're doing better than they think. 💛
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
