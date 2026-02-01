import { Link } from "react-router-dom";
import { Zap, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-500">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                EVENT<span className="gradient-text">PULSE</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Real-time event orchestration for modern campuses. Transform how your college manages events.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</Link></li>
              <li><Link to="/#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/changelog" className="text-sm text-muted-foreground hover:text-foreground">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link to="/api" className="text-sm text-muted-foreground hover:text-foreground">API Reference</Link></li>
              <li><Link to="/guides" className="text-sm text-muted-foreground hover:text-foreground">Guides</Link></li>
              <li><Link to="/support" className="text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EventPulse. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
