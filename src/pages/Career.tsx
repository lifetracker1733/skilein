import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Shield, BarChart3, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Zap,
    title: "Speed is Survival",
    description: "Move fast. Ship faster. In the new economy, velocity beats perfection.",
  },
  {
    icon: Shield,
    title: "Extreme Ownership",
    description: "No excuses. No blame. Own every outcome—wins and losses alike.",
  },
  {
    icon: BarChart3,
    title: "Data Over Feelings",
    description: "Decisions driven by metrics, not opinions. Results speak louder than intentions.",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Text Content */}
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tighter mb-6">
                Build the Future<br />of Education.
              </h1>
              <p className="text-xl text-foreground/60 mb-12 font-medium max-w-lg">
                We don't hire employees. We recruit relentless executors. Builders. Visionaries.
              </p>

              {/* Values Cards */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="glass rounded-xl p-6 card-glow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <value.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{value.title}</h3>
                        <p className="text-foreground/50 text-sm">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Text */}
              <p className="mt-12 text-foreground/40 text-sm leading-relaxed max-w-md">
                Ready to break the old system? Obsidian teams. Unapologetic standards. Legacy in the making.
              </p>
            </div>

            {/* Right: Open Positions */}
            <div className="lg:sticky lg:top-24">
              <div className="glass-strong rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Open Positions</h2>
                
                <div className="space-y-4">
                  {/* Position Cards */}
                  <div className="glass rounded-xl p-5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Content Creator (Video)</h3>
                        <p className="text-sm text-foreground/50">Remote • Full-time</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>

                  <div className="glass rounded-xl p-5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Growth Marketer</h3>
                        <p className="text-sm text-foreground/50">Remote • Full-time</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>

                  <div className="glass rounded-xl p-5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Full-Stack Developer</h3>
                        <p className="text-sm text-foreground/50">Remote • Contract</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>

                  <div className="glass rounded-xl p-5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Community Manager</h3>
                        <p className="text-sm text-foreground/50">Remote • Part-time</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 font-semibold text-base">
                  View Open Positions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[150px] pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
};

export default Career;
