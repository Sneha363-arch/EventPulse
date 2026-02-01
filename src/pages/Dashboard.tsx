import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Radio,
  QrCode,
  Bell,
  MoreHorizontal,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";

const stats = [
  {
    label: "Total Events",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Calendar,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Active Registrations",
    value: "1,284",
    change: "+23%",
    trend: "up",
    icon: Users,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Check-ins Today",
    value: "342",
    change: "+8%",
    trend: "up",
    icon: QrCode,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    label: "Pulse Messages",
    value: "156",
    change: "-3%",
    trend: "down",
    icon: Bell,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const recentEvents = [
  {
    id: 1,
    name: "Tech Fest 2024",
    date: "Feb 15, 2024",
    status: "live",
    registrations: 428,
    capacity: 500,
  },
  {
    id: 2,
    name: "Cultural Night",
    date: "Feb 20, 2024",
    status: "upcoming",
    registrations: 156,
    capacity: 300,
  },
  {
    id: 3,
    name: "Hackathon Spring",
    date: "Feb 25, 2024",
    status: "draft",
    registrations: 0,
    capacity: 200,
  },
  {
    id: 4,
    name: "Guest Lecture: AI",
    date: "Feb 10, 2024",
    status: "completed",
    registrations: 89,
    capacity: 100,
  },
];

const pulseFeed = [
  {
    id: 1,
    event: "Tech Fest 2024",
    message: "Workshop Hall B changed to Auditorium. Please check updated venue.",
    time: "5 min ago",
    type: "alert",
  },
  {
    id: 2,
    event: "Tech Fest 2024",
    message: "Coding challenge starting in 30 minutes. Get ready!",
    time: "32 min ago",
    type: "info",
  },
  {
    id: 3,
    event: "Cultural Night",
    message: "Registration milestone: 150 students registered!",
    time: "1 hour ago",
    type: "success",
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "live":
      return "bg-emerald-500/10 text-emerald-600 border-emerald-500/30";
    case "upcoming":
      return "bg-primary/10 text-primary border-primary/30";
    case "draft":
      return "bg-muted text-muted-foreground border-border";
    case "completed":
      return "bg-secondary text-secondary-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your events.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="stat-card"
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-emerald-500" : "text-destructive"
                }`}>
                  {stat.change}
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Events */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Recent Events</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-primary/30 hover:bg-secondary/50"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium truncate">{event.name}</h3>
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${getStatusStyles(event.status)}`}>
                          {event.status === "live" && <Radio className="h-3 w-3 animate-pulse" />}
                          {event.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {event.registrations} / {event.capacity}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pulse Feed */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">Pulse Feed</h2>
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                </div>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {pulseFeed.map((item) => (
                  <div 
                    key={item.id}
                    className="rounded-xl border border-border p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 ${
                        item.type === "alert" ? "bg-warning/10 text-warning" :
                        item.type === "success" ? "bg-success/10 text-success" :
                        "bg-info/10 text-info"
                      }`}>
                        <Bell className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{item.event}</p>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {item.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Create New Event</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <QrCode className="h-5 w-5 text-cyan-500" />
              <span>Start Check-in</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Bell className="h-5 w-5 text-accent" />
              <span>Send Announcement</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
              <span>View Analytics</span>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
