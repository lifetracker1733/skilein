import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Mission = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tighter mb-16 animate-fade-up">
            Break the System.<br />
            Build Your Legacy.
          </h1>

          {/* Content Blocks */}
          <div className="space-y-12 text-left md:text-center">
            {/* The Problem */}
            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-foreground mb-4 tracking-tight">The Problem</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Education is broken. Universities teach nothing about wealth. Paid courses sell empty promises behind $1,000 paywalls. <span className="text-foreground font-semibold">Gatekeeping is the real scam.</span>
              </p>
            </div>

            {/* The Skile Solution */}
            <div className="glass-strong rounded-2xl p-8 md:p-10 border-accent/20">
              <h2 className="text-xl font-bold text-foreground mb-4 tracking-tight">The Skile Solution</h2>
              <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed">
                Precision. Obsidian-grade knowledge. Skile.in delivers elite skills—Stocks, Dropshipping, AI—100% free. No fluff. No hidden fees. Every lesson is verified. 2026-ready. Built for rebels, not followers.
              </p>
            </div>

            {/* The Goal */}
            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-foreground mb-4 tracking-tight">The Goal</h2>
              <p className="text-lg md:text-xl text-accent leading-relaxed font-medium">
                Empower 1 million people to break free from the rat race. Financial freedom by 2026. Revolution starts here.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 font-semibold text-base">
              <Link to="/">
                Start Learning Free
              </Link>
            </Button>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
