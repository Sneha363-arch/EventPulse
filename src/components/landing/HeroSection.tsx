import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real-time Event Orchestration</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Campus Events{" "}
            <span className="gradient-text">Reimagined</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-100 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A state-driven platform for colleges to orchestrate, manage, and experience events in real-time. 
            From creation to check-in, everything syncs live.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-200 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/demo" className="gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </Link>
            </Button>
          </div>


        </div>


      </div>
    </section>
  );
};

export default HeroSection;
