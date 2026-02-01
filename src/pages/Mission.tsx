import { Link } from "react-router-dom";
import { ArrowLeft, Rocket, Users, Globe, Heart, School, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Mission = () => {
  return (
    <div className="min-h-screen bg-[hsl(222,47%,2%)]">
      <Navbar />

      {/* Hero Section - Meet The Team */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className="animate-fade-up">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Meet The Team
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tighter mb-6">
                Revolutionizing<br />Education.
              </h1>
              <p className="text-lg text-foreground/60 mb-8 leading-relaxed max-w-lg">
                We're not just another education platform. We're a movement built by rebels who refused to accept that quality education should cost a fortune. Our team of industry experts, successful entrepreneurs, and passionate educators came together with one mission: to democratize wealth-building knowledge.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-background flex items-center justify-center"
                    >
                      <Users className="w-5 h-5 text-foreground/50" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-foreground font-semibold">Skile Elite Team</p>
                  <p className="text-foreground/50 text-sm">Builders. Visionaries. Rebels.</p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-card/80 to-card">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent/50 mx-auto mb-6 flex items-center justify-center">
                      <Rocket className="w-16 h-16 text-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">Skile.in</p>
                    <p className="text-foreground/50">Est. 2024</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Purpose Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Large Headline */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tighter">
                To Revolutionize<br />
                <span className="text-accent">The Education</span><br />
                System.
              </h2>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <p className="text-xl text-foreground/70 leading-relaxed">
                We strive towards a simple but ambitious mission: to reform the education system by offering world-class learning... at a fraction of the cost.
              </p>
              <p className="text-lg text-foreground/50 leading-relaxed">
                Universities charge $50,000 for degrees that don't teach wealth-building. "Gurus" hide behind $997 paywalls selling recycled content. The education industry is broken—and we're here to fix it.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">100%</p>
                  <p className="text-foreground/50 text-sm">Free Forever</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">8+</p>
                  <p className="text-foreground/50 text-sm">Elite Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">1M</p>
                  <p className="text-foreground/50 text-sm">Goal by 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      </section>

      {/* The Journey Timeline */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              The Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter">
              From Vision to Revolution
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2024 */}
              <div className="relative flex items-center gap-8">
                <div className="flex-1 text-right">
                  <p className="text-accent font-bold text-xl">2024</p>
                  <h3 className="text-2xl font-bold text-foreground mt-2">The Beginning</h3>
                  <p className="text-foreground/50 mt-2">
                    Skile.in was born from frustration with expensive, gatekept education. We launched with a simple promise: elite knowledge, zero cost.
                  </p>
                </div>
                <div className="w-4 h-4 rounded-full bg-accent shrink-0 ring-4 ring-accent/20" />
                <div className="flex-1" />
              </div>

              {/* 2025 */}
              <div className="relative flex items-center gap-8">
                <div className="flex-1" />
                <div className="w-4 h-4 rounded-full bg-accent shrink-0 ring-4 ring-accent/20" />
                <div className="flex-1 text-left">
                  <p className="text-accent font-bold text-xl">2025</p>
                  <h3 className="text-2xl font-bold text-foreground mt-2">Global Expansion</h3>
                  <p className="text-foreground/50 mt-2">
                    Launched 8+ courses covering AI, Crypto, Stocks, and more. Built a community of ambitious learners across 50+ countries.
                  </p>
                </div>
              </div>

              {/* 2026 */}
              <div className="relative flex items-center gap-8">
                <div className="flex-1 text-right">
                  <p className="text-accent font-bold text-xl">2026</p>
                  <h3 className="text-2xl font-bold text-foreground mt-2">1 Million Strong</h3>
                  <p className="text-foreground/50 mt-2">
                    Our mission: empower 1 million people to break free from the rat race. Financial freedom isn't a privilege—it's a right.
                  </p>
                </div>
                <div className="w-4 h-4 rounded-full bg-accent shrink-0 ring-4 ring-accent/20" />
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      </section>

      {/* Philanthropy Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Giving Back
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter">
              Education Beyond Screens
            </h2>
            <p className="text-foreground/50 mt-4 max-w-2xl mx-auto">
              We believe in impact that goes beyond digital. Here's how we're making a difference in the real world.
            </p>
          </div>

          {/* Philanthropy Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Building Schools */}
            <div className="group relative rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card/95 to-card/90" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <School className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Building Schools</h3>
                  <p className="text-foreground/60">
                    We donate a percentage of our resources to build physical schools in underserved communities. Digital education is powerful—but some children need classrooms first.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-accent/30 transition-colors" />
            </div>

            {/* Card 2: Community Impact */}
            <div className="group relative rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card/95 to-card/90" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Trophy className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Company Marathon</h3>
                  <p className="text-foreground/60">
                    Every year, our team runs a marathon together to raise funds for educational nonprofits. 75+ employees, one cause: breaking barriers to learning.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-accent/30 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-4">
            Join the Revolution.
          </h2>
          <p className="text-foreground/50 font-medium mb-8 text-lg">
            Be part of a movement that's changing how the world learns.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 font-semibold text-base">
            <Link to="/">
              Start Learning Free
            </Link>
          </Button>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
