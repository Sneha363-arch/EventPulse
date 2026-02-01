import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-purple-500 to-accent p-8 md:p-16">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute -top-1/2 -right-1/2 h-[600px] w-[600px] rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/2 h-[400px] w-[400px] rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20 backdrop-blur-sm">
              <Zap className="h-7 w-7 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Ready to Transform Your Campus Events?
            </h2>
            
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Join 200+ colleges already using EventPulse to create unforgettable event experiences.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl" 
                asChild
              >
                <Link to="/signup" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="glass" 
                size="xl" 
                className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" 
                asChild
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/60">
              No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
