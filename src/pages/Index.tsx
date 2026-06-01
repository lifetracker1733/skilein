import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Sparkles, Video, Wand2, Workflow, Rocket, Cpu, Youtube,
  Instagram, Github, Linkedin, Mail, ArrowRight, Search,
  Play, Star, ChevronRight, BookOpen, Zap, Brain
} from "lucide-react";
import balloon from "@/assets/skile-balloon.png";
import siri from "@/assets/skile-siri.png";

const services = [
  { icon: Brain, title: "AI Tutorials", desc: "Hands-on walkthroughs of ChatGPT, Claude, Gemini, and beyond." },
  { icon: Video, title: "Video Editing Education", desc: "Premiere, After Effects, DaVinci & CapCut — from cuts to color." },
  { icon: Sparkles, title: "Content Creation Systems", desc: "Build a content engine that ships every week without burnout." },
  { icon: Workflow, title: "Automation Workflows", desc: "n8n, Make, Zapier — automate the boring 80% of creator work." },
  { icon: Rocket, title: "Productivity Training", desc: "Frameworks, tools and rituals top creators use to ship fast." },
  { icon: Cpu, title: "Technology Explained", desc: "Complex tech, distilled into visual stories anyone can follow." },
];

const projects = [
  { tag: "AI Tutorials", title: "Master ChatGPT for Creators", desc: "End-to-end workflow for ideation, scripts & thumbnails." },
  { tag: "YouTube Education", title: "The 0→10K Subs Playbook", desc: "What actually moved the needle in 90 days." },
  { tag: "Video Editing", title: "Cinematic Cuts in Premiere", desc: "Pacing, J-cuts and the rhythm of retention." },
  { tag: "Documentary", title: "Inside India's AI Boom", desc: "Mini-doc on the new wave of Indian AI builders." },
  { tag: "Creator Resources", title: "The Free Creator Stack", desc: "Every tool I use, ranked and reviewed." },
  { tag: "Case Study", title: "1M Views in 30 Days", desc: "Reverse-engineering a viral AI tutorial." },
];

const skills = {
  "AI Tools": [
    { name: "ChatGPT", v: 95 }, { name: "Claude", v: 90 }, { name: "Gemini", v: 85 },
    { name: "Midjourney", v: 80 }, { name: "Runway", v: 78 }, { name: "n8n", v: 82 },
  ],
  "Video Editing": [
    { name: "Premiere Pro", v: 92 }, { name: "After Effects", v: 85 },
    { name: "DaVinci Resolve", v: 80 }, { name: "CapCut", v: 95 },
  ],
  "Technology": [
    { name: "Automation", v: 88 }, { name: "Prompt Engineering", v: 94 }, { name: "Workflow Design", v: 90 },
  ],
};

const roadmap = [
  { level: "Beginner", title: "Foundations", desc: "AI basics, prompt fundamentals, first edits." },
  { level: "Intermediate", title: "Creator Toolkit", desc: "Build a repeatable content + editing pipeline." },
  { level: "Advanced", title: "Automation & Scale", desc: "Workflows, agents, and multi-channel publishing." },
  { level: "Expert", title: "Brand & Authority", desc: "Ship a flagship product. Teach. Lead." },
];

const testimonials = [
  { name: "Aarav S.", role: "YouTuber, 80K subs", quote: "Skile.in turned my editing from 'okay' to 'cinematic' in weeks. Best AI + video resource I've found.", rating: 5 },
  { name: "Priya M.", role: "Freelance Designer", quote: "The automation lessons saved me 10+ hours a week. Siri explains complex tech like a friend.", rating: 5 },
  { name: "Rohan K.", role: "CS Student", quote: "Finally an AI tutor that's practical, not theoretical. I shipped my first AI product in 30 days.", rating: 5 },
];

const articles = [
  { cat: "AI Guide", title: "The 2026 Prompting Cheat Sheet", read: "8 min" },
  { cat: "Editing", title: "5 Pacing Tricks Top Editors Use", read: "5 min" },
  { cat: "Tutorial", title: "Build an AI Faceless Channel", read: "12 min" },
  { cat: "Creator", title: "How I Plan a Month of Content in 2 Hours", read: "6 min" },
];

const stats = [
  { v: "100+", l: "Tutorials" },
  { v: "10K+", l: "Learners" },
  { v: "AI", l: "Focused" },
  { v: "Creator", l: "First" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(articles.map(a => a.cat)))];
  const filteredArticles = articles.filter(a =>
    (filter === "All" || a.cat === filter) &&
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-skile-paper text-skile-ink font-sans overflow-x-hidden">
      {/* NAV */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white/70 backdrop-blur-xl border border-skile-blue/10 shadow-sm px-5 py-2.5">
          <Link to="/" className="flex items-center gap-2">
            <img src={balloon} alt="" className="w-7 h-7 object-contain" />
            <span className="font-display font-extrabold text-lg tracking-tight">Skile<span className="text-skile-blue">.in</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-skile-ink/70">
            <a href="#services" className="hover:text-skile-blue transition">Services</a>
            <a href="#work" className="hover:text-skile-blue transition">Work</a>
            <a href="#skills" className="hover:text-skile-blue transition">Skills</a>
            <a href="#roadmap" className="hover:text-skile-blue transition">Roadmap</a>
            <a href="#hub" className="hover:text-skile-blue transition">Hub</a>
            <Link to="/journal" className="hover:text-skile-blue transition">Journal</Link>
          </div>
          <a href="#contact" className="bg-skile-ink text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-skile-blue transition">
            Let's Talk
          </a>
        </div>
      </motion.nav>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
        {/* Animated blue gradient backdrop */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-skile-blue-soft via-white to-white" />
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 25, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,174,239,0.35), transparent 70%)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,174,239,0.25), transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
          <motion.div style={{ y, opacity }} className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white border border-skile-blue/20 rounded-full px-4 py-1.5 text-xs font-semibold text-skile-blue shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> AI Education • Creator-First
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
            >
              Master <span className="text-skile-blue">AI</span>, Content Creation<br />
              & Digital Skills.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-lg text-skile-ink/65 max-w-xl leading-relaxed"
            >
              Practical tutorials, creator education, AI workflows and technology — explained simply by <span className="font-semibold text-skile-ink">Siri Jack</span>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#work" className="group bg-skile-blue text-white px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-skile-blue-dark transition shadow-lg shadow-skile-blue/30">
                Explore Content <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#hub" className="group bg-white border border-skile-ink/10 text-skile-ink px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:border-skile-blue hover:text-skile-blue transition">
                <Play className="w-4 h-4" /> Watch Tutorials
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="grid grid-cols-4 gap-4 pt-6"
            >
              {stats.map((s) => (
                <div key={s.l} className="bg-white/70 backdrop-blur border border-skile-blue/10 rounded-2xl p-4 text-center shadow-sm">
                  <div className="font-display font-extrabold text-2xl text-skile-blue">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-skile-ink/60 mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mascot */}
          <motion.div className="relative h-[480px] hidden lg:block">
            <motion.img
              src={balloon}
              alt="Skile.in mascot balloon"
              className="absolute right-0 top-0 w-[480px] drop-shadow-[0_30px_60px_rgba(0,174,239,0.35)]"
              animate={{ y: [0, -25, 0], rotate: [-2, 3, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-4 bottom-10 bg-white rounded-2xl p-4 shadow-xl border border-skile-blue/10 w-56"
            >
              <div className="text-[10px] uppercase tracking-wider text-skile-blue font-bold mb-1">Latest Drop</div>
              <div className="font-semibold text-sm">Build an AI Faceless Channel</div>
              <div className="text-xs text-skile-ink/50 mt-2 flex items-center gap-1"><Zap className="w-3 h-3" /> 12 min watch</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute right-10 bottom-0 bg-skile-blue text-white rounded-2xl p-4 shadow-xl w-44"
            >
              <div className="text-[10px] uppercase tracking-wider opacity-80 font-bold mb-1">Live</div>
              <div className="font-semibold text-sm">10,247 learners online</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-skile-blue/20 to-transparent rounded-[3rem] blur-3xl" />
            <motion.img
              src={siri} alt="Siri Jack"
              className="relative w-full max-w-md mx-auto drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-skile-blue font-bold">— About</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">Who is <span className="text-skile-blue">Siri Jack</span>?</h2>
            <p className="text-lg text-skile-ink/70 leading-relaxed">
              Founder of Skile.in. I help creators, students, freelancers and professionals learn AI,
              content creation, and digital skills through engaging, no-fluff educational content.
            </p>
            <p className="text-base text-skile-ink/60 leading-relaxed">
              From AI tools and automation to video editing and productivity systems — every lesson
              is built to make you ship faster and create smarter.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["AI Educator", "Video Editor", "Creator", "Storyteller"].map(t => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-skile-blue-soft text-skile-blue">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-28 bg-skile-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-skile-blue font-bold mb-3">— What I Do</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">Services that move you forward.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-white border border-skile-ink/5 rounded-3xl p-7 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(0,174,239,0.4)] hover:border-skile-blue/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-skile-blue-soft text-skile-blue flex items-center justify-center mb-5 group-hover:bg-skile-blue group-hover:text-white transition">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-skile-ink/60 leading-relaxed">{s.desc}</p>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-skile-blue/0 to-skile-blue/0 group-hover:from-skile-blue/5 group-hover:to-transparent transition pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="px-6 py-28 bg-skile-ink text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-skile-blue font-bold mb-3">— Portfolio</div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl">Recent work & case studies.</h2>
            </div>
            <a href="#" className="text-skile-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all">View all <ChevronRight className="w-4 h-4" /></a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-skile-blue/50 transition cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(135deg, hsl(${(i * 60) % 360} 70% 25%), hsl(${(i * 60 + 40) % 360} 60% 15%))`
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-wider bg-skile-blue text-white px-2.5 py-1 rounded-full font-bold">{p.tag}</div>
                  <Play className="absolute inset-0 m-auto w-14 h-14 text-white opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-1.5 group-hover:text-skile-blue transition">{p.title}</h3>
                  <p className="text-sm text-white/55 mb-4">{p.desc}</p>
                  <button className="text-xs font-semibold text-skile-blue flex items-center gap-1 hover:gap-2 transition-all">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-skile-blue font-bold mb-3">— Skills</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">The toolkit.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([group, items], gi) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: gi * 0.1 }}
                className="bg-skile-paper rounded-3xl p-7 border border-skile-ink/5"
              >
                <h3 className="font-display font-bold text-lg mb-6 text-skile-blue">{group}</h3>
                <div className="space-y-4">
                  {items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm font-medium mb-1.5">
                        <span>{s.name}</span><span className="text-skile-ink/40">{s.v}%</span>
                      </div>
                      <div className="h-2 bg-skile-ink/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }}
                          viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-skile-blue to-skile-blue-dark rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="px-6 py-28 bg-skile-paper relative overflow-hidden">
        <motion.img
          src={balloon} alt=""
          className="absolute right-4 top-10 w-32 md:w-44 opacity-90"
          animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-skile-blue font-bold mb-3">— Learning Roadmap</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">Your journey, mapped.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-skile-blue/0 via-skile-blue/40 to-skile-blue/0 hidden md:block" />
            {roadmap.map((r, i) => (
              <motion.div
                key={r.level}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative md:w-1/2 mb-8 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                <div className={`absolute top-6 ${i % 2 === 0 ? "md:-right-3" : "md:-left-3"} hidden md:block`}>
                  <div className="w-6 h-6 rounded-full bg-skile-blue ring-4 ring-white shadow-lg shadow-skile-blue/40" />
                </div>
                <div className="bg-white rounded-3xl p-6 border border-skile-ink/5 shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-skile-blue font-bold mb-2">{r.level}</div>
                  <h3 className="font-display font-bold text-xl mb-1.5">{r.title}</h3>
                  <p className="text-sm text-skile-ink/60">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-skile-blue font-bold mb-3">— Testimonials</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl">Loved by creators.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-skile-blue-soft to-white rounded-3xl p-7 border border-skile-blue/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-skile-blue text-skile-blue" />
                  ))}
                </div>
                <p className="text-skile-ink/80 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-skile-blue to-skile-blue-dark text-white flex items-center justify-center font-display font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-skile-ink/50">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT HUB */}
      <section id="hub" className="px-6 py-28 bg-skile-paper">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-skile-blue font-bold mb-3">— Content Hub</div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl">Latest tutorials & guides.</h2>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-skile-ink/40" />
                <input
                  value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search articles…"
                  className="w-full bg-white border border-skile-ink/10 rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-skile-blue transition"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {cats.map(c => (
              <button
                key={c} onClick={() => setFilter(c)}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full transition ${
                  filter === c ? "bg-skile-blue text-white" : "bg-white text-skile-ink/70 hover:text-skile-blue border border-skile-ink/10"
                }`}
              >{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {filteredArticles.map((a, i) => (
              <motion.a
                key={a.title} href="#"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="group bg-white rounded-3xl p-6 border border-skile-ink/5 hover:border-skile-blue/30 hover:shadow-lg transition flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-skile-blue-soft text-skile-blue flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-skile-blue font-bold mb-1">{a.cat}</div>
                  <h3 className="font-display font-bold text-lg mb-1 group-hover:text-skile-blue transition">{a.title}</h3>
                  <div className="text-xs text-skile-ink/50">{a.read} read</div>
                </div>
                <ArrowRight className="w-5 h-5 text-skile-ink/30 group-hover:text-skile-blue group-hover:translate-x-1 transition" />
              </motion.a>
            ))}
            {filteredArticles.length === 0 && (
              <div className="md:col-span-2 text-center py-12 text-skile-ink/50">No articles match your search.</div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28 bg-gradient-to-br from-skile-blue to-skile-blue-dark text-white relative overflow-hidden">
        <motion.img
          src={balloon} alt=""
          className="absolute -left-10 -bottom-10 w-64 opacity-30"
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }} transition={{ duration: 7, repeat: Infinity }}
        />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] font-bold mb-3 opacity-80">— Contact</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Let's build something.</h2>
            <p className="text-white/80 max-w-xl mx-auto">Have a project, collab, or want to learn together? Drop a message.</p>
          </div>
          <form onSubmit={e => { e.preventDefault(); }} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 md:p-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-white" />
              <input required type="email" placeholder="Email address" className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-white" />
            </div>
            <select className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-white">
              <option className="text-skile-ink">Project type</option>
              <option className="text-skile-ink">AI Tutorial Collaboration</option>
              <option className="text-skile-ink">Video Editing Project</option>
              <option className="text-skile-ink">Consultation</option>
              <option className="text-skile-ink">Speaking / Workshop</option>
            </select>
            <textarea required placeholder="Tell me about it…" rows={4} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-white resize-none" />
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="bg-white text-skile-blue font-semibold px-7 py-3.5 rounded-full hover:bg-skile-ink hover:text-white transition flex items-center gap-2">
                Let's Collaborate <ArrowRight className="w-4 h-4" />
              </button>
              <button type="button" className="bg-transparent border border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition">
                Book Consultation
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-skile-ink text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={balloon} alt="" className="w-8 h-8" />
              <span className="font-display font-extrabold text-xl">Skile<span className="text-skile-blue">.in</span></span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">Learn Faster. Create Smarter. AI education & digital skills for the next generation of creators.</p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Youtube, href: "#" },
                { Icon: Instagram, href: "https://instagram.com/sirijack.s" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "https://github.com/24a21a04w5-crypto" },
                { Icon: Mail, href: "mailto:24a21a04w5@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-skile-blue hover:scale-110 transition flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#services" className="hover:text-skile-blue">Services</a></li>
              <li><a href="#work" className="hover:text-skile-blue">Portfolio</a></li>
              <li><a href="#hub" className="hover:text-skile-blue">Content Hub</a></li>
              <li><a href="#roadmap" className="hover:text-skile-blue">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/mission" className="hover:text-skile-blue">Mission</Link></li>
              <li><Link to="/career" className="hover:text-skile-blue">Careers</Link></li>
              <li><Link to="/journal" className="hover:text-skile-blue">Journal</Link></li>
              <li><a href="#contact" className="hover:text-skile-blue">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 text-xs text-white/40 flex flex-wrap items-center justify-between gap-3">
          <div>© 2026 Skile.in · Built by Siri Jack</div>
          <div>Learn Faster. Create Smarter.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
