import { CalendarPlus, UserPlus, Radio, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: CalendarPlus,
    title: "Create Event",
    description: "Set up your event in minutes with our intuitive builder. Add details, set capacity limits, and configure registration options.",
    gradient: "from-primary to-purple-500",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Open Registration",
    description: "Publish and share your event. Students register with their college credentials. Watch attendance grow in real-time.",
    gradient: "from-purple-500 to-accent",
  },
  {
    number: "03",
    icon: Radio,
    title: "Live Orchestration",
    description: "Go live with QR check-ins, push announcements through Pulse Feed, and monitor everything from your dashboard.",
    gradient: "from-accent to-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="hero-gradient py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            From Idea to{" "}
            <span className="gradient-text">Live Event</span>{" "}
            in Minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three simple steps to transform your campus event management experience.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-20 hidden h-px w-full bg-gradient-to-r from-border via-primary/30 to-border md:block" />
              )}
              
              <div className="glass-card relative z-10 p-8 text-center">
                {/* Step Number */}
                <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient}`}>
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                {/* Step Number Badge */}
                <div className="mb-4 inline-block rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                  STEP {step.number}
                </div>
                
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/signup" className="gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Free forever for small events
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
