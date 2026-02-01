import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Zap, Shield, BarChart3, ChevronRight, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";

interface Job {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  date: string;
  summary: string;
  role: string[];
  idealCandidate: string[];
  warnings: string[];
}

const jobs: Job[] = [
  {
    id: "customer-support",
    title: "Customer Support Specialist",
    team: "Support",
    location: "Remote",
    type: "Full Time",
    date: "Feb 2026",
    summary: "Join Team Skile. We believe support is more than just answering questions—it's about creating unforgettable experiences that turn users into advocates.",
    role: [
      "Be the primary point of contact for all student inquiries",
      "Resolve issues with speed and empathy",
      "Document feedback to improve our courses",
      "Collaborate with the content team on user needs",
    ],
    idealCandidate: [
      "Passionate about helping others succeed",
      "Excellent written and verbal communicator",
      "Detail-oriented with strong problem-solving skills",
      "Experience with support tools (Zendesk, Intercom, etc.)",
    ],
    warnings: [
      "This is NOT a 9-5 job. We need all-in mentality.",
      "You must be comfortable with fast-paced, high-pressure environments.",
      "If you can't handle direct feedback, this isn't for you.",
    ],
  },
  {
    id: "video-editor",
    title: "Video Editor",
    team: "Content",
    location: "Remote",
    type: "Full Time",
    date: "Feb 2026",
    summary: "We're looking for a video editing wizard who can transform raw footage into viral, educational content that keeps millions engaged.",
    role: [
      "Edit long-form educational videos for our courses",
      "Create short-form clips for social media",
      "Add motion graphics and visual effects",
      "Maintain consistent brand aesthetics across all content",
    ],
    idealCandidate: [
      "3+ years of professional video editing experience",
      "Mastery of Premiere Pro, After Effects, or DaVinci Resolve",
      "Strong sense of pacing, storytelling, and engagement",
      "Portfolio showcasing educational or tech content",
    ],
    warnings: [
      "We move FAST. Deadlines are real and tight.",
      "Feedback will be direct and unfiltered.",
      "If you need hand-holding, look elsewhere.",
    ],
  },
  {
    id: "growth-marketer",
    title: "Growth Marketer",
    team: "Marketing",
    location: "Remote",
    type: "Full Time",
    date: "Feb 2026",
    summary: "We need a data-driven growth hacker who can scale our reach from thousands to millions using paid and organic strategies.",
    role: [
      "Plan and execute paid ad campaigns (Meta, TikTok, Google)",
      "Optimize conversion funnels and landing pages",
      "Analyze data to identify growth opportunities",
      "A/B test everything and iterate rapidly",
    ],
    idealCandidate: [
      "Proven track record of scaling user acquisition",
      "Deep understanding of attribution and analytics",
      "Experience with CAC/LTV optimization",
      "Comfortable managing significant ad budgets",
    ],
    warnings: [
      "Results matter more than effort here.",
      "If you can't handle data-driven accountability, don't apply.",
      "We expect ownership—no excuses.",
    ],
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    team: "Engineering",
    location: "Remote",
    type: "Contract",
    date: "Feb 2026",
    summary: "Build the future of education. We need engineers who can ship fast, iterate faster, and care deeply about user experience.",
    role: [
      "Develop and maintain our web platform",
      "Implement new features from design to deployment",
      "Optimize performance and scalability",
      "Collaborate with designers and product managers",
    ],
    idealCandidate: [
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with databases (PostgreSQL, Supabase)",
      "Eye for design and attention to detail",
      "Startup mentality—ship fast, learn faster",
    ],
    warnings: [
      "We ship weekly. Sometimes daily.",
      "Perfectionism without speed is useless here.",
      "If you need a manager to tell you what to do, pass.",
    ],
  },
];

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
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[hsl(222,47%,2%)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Join Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tighter mb-6">
              Build the Future<br />of Education.
            </h1>
            <p className="text-xl text-foreground/60 mb-12 max-w-xl">
              We don't hire employees. We recruit relentless executors. Builders. Visionaries.
            </p>

            {/* Values Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass rounded-xl p-6 card-glow"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{value.title}</h3>
                  <p className="text-foreground/50 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* Job Board / Detail Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {!selectedJob ? (
            <>
              {/* Job Board View */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground tracking-tighter mb-4">
                  Open Positions
                </h2>
                <p className="text-foreground/50">
                  Ready to break the old system? Find your role.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className="glass rounded-xl p-6 text-left hover:bg-white/10 transition-all group card-glow"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-foreground/50 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="text-accent">{job.team}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Job Detail View */}
              <button
                onClick={() => setSelectedJob(null)}
                className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back to all positions</span>
              </button>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-10">
                  {/* Header */}
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-4">{selectedJob.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-foreground/50">
                      <span className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm">
                        <span className="text-accent font-medium">{selectedJob.team}</span>
                      </span>
                      <span className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm">
                        <MapPin className="w-4 h-4" />
                        {selectedJob.location}
                      </span>
                      <span className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm">
                        <Clock className="w-4 h-4" />
                        {selectedJob.type}
                      </span>
                      <span className="glass px-3 py-1.5 rounded-full text-sm">
                        {selectedJob.date}
                      </span>
                    </div>
                  </div>

                  {/* Job Summary */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">About This Role</h2>
                    <p className="text-foreground/60 leading-relaxed">{selectedJob.summary}</p>
                  </div>

                  {/* Your Role */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">What You'll Do</h2>
                    <ul className="space-y-3">
                      {selectedJob.role.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-foreground/60">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal Candidate */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Who You Are</h2>
                    <ul className="space-y-3">
                      {selectedJob.idealCandidate.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-foreground/60">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning Section */}
                  <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      <h2 className="text-xl font-bold text-foreground">You Shouldn't Apply If...</h2>
                    </div>
                    <ul className="space-y-3">
                      {selectedJob.warnings.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-destructive mt-1 shrink-0" />
                          <span className="text-foreground/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="glass-strong rounded-2xl p-6 sticky top-24">
                    <h3 className="text-lg font-bold text-foreground mb-4">Ready to join?</h3>
                    <p className="text-foreground/50 text-sm mb-6">
                      If you've read through everything and still feel like this is your calling, we want to hear from you.
                    </p>
                    <Button
                      onClick={() => setApplicationModalOpen(true)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 font-semibold text-base"
                    >
                      APPLY NOW
                    </Button>
                    <p className="text-foreground/30 text-xs text-center mt-4">
                      Applications reviewed within 48 hours
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer Text */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-foreground/40 leading-relaxed">
            Ready to break the old system? Obsidian teams. Unapologetic standards. Legacy in the making.
          </p>
        </div>
      </section>

      <Footer />

      {/* Application Modal */}
      <ApplicationModal
        open={applicationModalOpen}
        onOpenChange={setApplicationModalOpen}
        jobTitle={selectedJob?.title || ""}
      />
    </div>
  );
};

export default Career;
