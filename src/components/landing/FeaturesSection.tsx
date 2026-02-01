import { 
  Shield, 
  Radio, 
  GitBranch, 
  Bell, 
  QrCode, 
  BarChart3,
  Users,
  Clock,
  Layers,
  Smartphone,
  Globe,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Role-Based Authentication",
    description: "Secure access control for admins, organizers, and attendees with granular permissions.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Radio,
    title: "Real-Time Registrations",
    description: "Watch registration counts update live. No refreshing needed—everything syncs instantly.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GitBranch,
    title: "Event Lifecycle States",
    description: "Draft → Published → Live → Completed. Track every event through its entire journey.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Bell,
    title: "Pulse Feed Announcements",
    description: "Push live updates to all attendees. Venue changes, delays, or hype—broadcast it instantly.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: QrCode,
    title: "QR Smart Check-In",
    description: "Generate unique QR codes per registration. Scan for instant, contactless check-in.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: BarChart3,
    title: "Live Analytics Dashboard",
    description: "Real-time attendance metrics, engagement charts, and exportable reports.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
];

const additionalFeatures = [
  { icon: Users, label: "Team Collaboration" },
  { icon: Clock, label: "Scheduling Tools" },
  { icon: Layers, label: "Multi-Event Management" },
  { icon: Smartphone, label: "Mobile Optimized" },
  { icon: Globe, label: "Multi-Campus Support" },
  { icon: Lock, label: "Data Encryption" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="text-sm font-medium text-primary">Features</span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Everything You Need for{" "}
            <span className="gradient-text">Live Event Management</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built for the speed of campus life. Real-time sync, smart automation, and beautiful interfaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass-card p-6 transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`feature-icon ${feature.bgColor} ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Strip */}
        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {additionalFeatures.map((feature) => (
            <div 
              key={feature.label}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              <feature.icon className="h-4 w-4" />
              {feature.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
