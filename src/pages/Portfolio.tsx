import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import balloonImg from "@/assets/siri-balloon.png";
import loungeImg from "@/assets/siri-lounge.png";
import { Mail, Github, Instagram, Globe, ArrowUpRight, Sparkles, Video, Brain, Target } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    items: ["YouTube Long-Form", "Documentary Editing", "Talking Head", "Motion Graphics", "Sound Design"],
  },
  {
    icon: Brain,
    title: "AI Content Creation",
    items: ["AI Tutorials", "AI Tool Reviews", "Prompt Engineering", "AI Workflows", "Automation Guides"],
  },
  {
    icon: Target,
    title: "Content Strategy",
    items: ["YouTube Growth Systems", "Content Planning", "Audience Retention", "Educational Frameworks"],
  },
];

const skillGroups = [
  { title: "Video Production", skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"] },
  { title: "AI Tools", skills: ["ChatGPT", "Claude", "Google Veo", "ElevenLabs", "Midjourney", "Runway"] },
  { title: "Creator Skills", skills: ["Script Writing", "Research", "Storytelling", "Thumbnail Strategy", "Content Repurposing"] },
];

const portfolioFocus = [
  { title: "AI Tutorials", desc: "Simple, practical tutorials that help creators leverage AI tools effectively." },
  { title: "Educational Content", desc: "Breaking down complicated concepts into easy-to-understand visual lessons." },
  { title: "Documentary-Style", desc: "Research-driven storytelling on technology, creators, brands, and business case studies." },
];

const reasons = [
  "Strong storytelling and editing skills",
  "AI-powered production workflows",
  "Educational content expertise",
  "Fast learner and problem solver",
  "Focus on audience engagement and retention",
  "Creator-first mindset",
];

const Portfolio = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 30, y: (e.clientY / window.innerHeight - 0.5) * 30 });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#00B4FF]/30 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0066FF]/20 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.08),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs uppercase tracking-[0.25em] text-white/70">
              <Sparkles className="w-3 h-3 text-[#00B4FF]" />
              Available for collaborations
            </div>

            <h1 className="font-black tracking-[-0.04em] leading-[0.9] text-[clamp(3.5rem,9vw,8rem)]">
              Siri
              <br />
              <span className="italic font-serif text-[#00B4FF]">Jack</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              AI Creator, Video Editor, and Tutorial Content Specialist transforming complex topics
              into engaging visual stories that help people learn faster and take action.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:24a21a04w5@gmail.com"
                className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#00B4FF] hover:text-white transition-all"
              >
                Let's Work Together
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/5 transition-all"
              >
                View skile.in
              </Link>
            </div>

            <div className="flex gap-5 pt-4 text-white/40">
              <a href="mailto:24a21a04w5@gmail.com" className="hover:text-[#00B4FF] transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="https://github.com/24a21a04w5-crypto" target="_blank" rel="noreferrer" className="hover:text-[#00B4FF] transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://instagram.com/sirijack.s" target="_blank" rel="noreferrer" className="hover:text-[#00B4FF] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://skile.in" target="_blank" rel="noreferrer" className="hover:text-[#00B4FF] transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px]">
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
            >
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0066FF] blur-3xl opacity-40" />
              <img src={balloonImg} alt="Siri Jack mascot" className="relative w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,180,255,0.4)]" />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 border-y border-white/10 bg-black/50 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap text-white/40 text-sm uppercase tracking-[0.3em]">
            {[..."AI Creator • Video Editor • Tutorial Specialist • Motion Graphics • Storytelling • ".repeat(4)].join("").split("•").map((t, i) => (
              <span key={i}>{t}•</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#00B4FF]/20 to-[#0066FF]/10 border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,180,255,0.4),transparent_70%)]" />
              <img src={loungeImg} alt="Siri Jack" className="absolute inset-0 w-full h-full object-contain object-bottom" />
            </div>
            <div className="absolute -top-6 -right-6 bg-[#00B4FF] text-black px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-wider rotate-3">
              by @sirijack.s
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="text-xs uppercase tracking-[0.3em] text-[#00B4FF] font-semibold">— About Me</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05]">
              Turning complex ideas into <span className="italic font-serif text-[#00B4FF]">stories that stick.</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              I specialize in video editing, AI-powered content creation, and educational tutorials.
              From AI tools and automation to content creation and productivity systems, I create
              tutorials that make technology simple and practical.
            </p>
            <div className="border-l-2 border-[#00B4FF] pl-6 py-2">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">Mission</div>
              <p className="text-xl text-white/90 leading-snug">
                Build a million-dollar educational brand by teaching valuable digital skills through
                powerful storytelling and modern content creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#00B4FF] font-semibold mb-4">— Services</div>
              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em]">What I do.</h2>
            </div>
            <p className="text-white/50 max-w-md">A full-stack creator practice covering everything from raw footage to a published, optimized educational asset.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#00B4FF]/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00B4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#00B4FF]/10 border border-[#00B4FF]/30 flex items-center justify-center mb-6">
                    <s.icon className="w-6 h-6 text-[#00B4FF]" />
                  </div>
                  <div className="text-xs text-white/30 mb-2">0{i + 1}</div>
                  <h3 className="text-2xl font-bold mb-6">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-white/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#00B4FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS / TOOLBOX */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-[#00B4FF] font-semibold mb-4">— Toolbox</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em]">Skills & stack.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((g) => (
              <div key={g.title} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 pb-3 border-b border-white/10">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/[0.03] hover:bg-[#00B4FF] hover:border-[#00B4FF] hover:text-black transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO FOCUS */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-[#00B4FF] font-semibold mb-4">— Portfolio Focus</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em]">Where I shine.</h2>
          </div>

          <div className="space-y-4">
            {portfolioFocus.map((p, i) => (
              <div key={p.title} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-[#00B4FF] hover:text-black transition-all duration-500 cursor-pointer">
                <div className="flex items-center gap-8">
                  <span className="text-sm font-mono opacity-40">/0{i + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-black tracking-[-0.02em]">{p.title}</h3>
                </div>
                <div className="flex items-center gap-6 md:max-w-md">
                  <p className="text-sm md:text-base text-white/60 group-hover:text-black/70 transition-colors">{p.desc}</p>
                  <ArrowUpRight className="w-8 h-8 shrink-0 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[#00B4FF] font-semibold">— Why Me</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05]">
              Built for <span className="italic font-serif text-[#00B4FF]">creators</span> who actually ship.
            </h2>
            <p className="text-white/60 text-lg">A focused practice that combines storytelling craft with AI-native workflows — so you move faster without losing the soul of your content.</p>
          </div>

          <div className="space-y-3">
            {reasons.map((r, i) => (
              <div key={r} className="flex items-start gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#00B4FF]/40 transition-colors">
                <span className="font-mono text-xs text-[#00B4FF] pt-1">0{i + 1}</span>
                <p className="text-lg font-medium">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + CONTACT */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 bg-gradient-to-br from-[#00B4FF] via-[#0093E0] to-[#0066FF]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.3),transparent_50%)]" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-black">
                <div className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-70">— The Vision</div>
                <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] mb-8">
                  Let's build something <span className="italic font-serif">unforgettable.</span>
                </h2>
                <p className="text-lg text-black/70 max-w-md mb-10">
                  Becoming a leading creator in AI education, video production, and digital skills training —
                  building a global educational brand, one story at a time.
                </p>
                <a href="mailto:24a21a04w5@gmail.com" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
                  Start a project
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Email", value: "24a21a04w5@gmail.com", href: "mailto:24a21a04w5@gmail.com", icon: Mail },
                  { label: "GitHub", value: "@24a21a04w5-crypto", href: "https://github.com/24a21a04w5-crypto", icon: Github },
                  { label: "Instagram", value: "@sirijack.s", href: "https://instagram.com/sirijack.s", icon: Instagram },
                  { label: "Website", value: "skile.in", href: "https://skile.in", icon: Globe },
                ].map((c) => (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-5 rounded-2xl bg-black/10 backdrop-blur-sm border border-black/10 hover:bg-black hover:text-white transition-all">
                    <div className="w-12 h-12 rounded-xl bg-black/10 group-hover:bg-white/10 flex items-center justify-center">
                      <c.icon className="w-5 h-5 text-black group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-black/50 group-hover:text-white/50">{c.label}</div>
                      <div className="font-bold text-black group-hover:text-white">{c.value}</div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white group-hover:rotate-45 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
