import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Play, Sparkles, Video, Wand2, Workflow, Brain, Zap,
  Youtube, Instagram, Linkedin, Github, Mail, Search, Star, Check,
} from "lucide-react";
import balloon from "@/assets/siri-balloon.png";
import lounge from "@/assets/siri-lounge.png";
import logo from "@/assets/skile-logo.jpeg";

const BLUE = "#00AEEF";

const services = [
  { icon: Brain, title: "AI Tutorials", desc: "Hands-on lessons on ChatGPT, Claude, Gemini & Midjourney." },
  { icon: Video, title: "Video Editing Education", desc: "From cuts to motion graphics — Premiere, After Effects, DaVinci." },
  { icon: Sparkles, title: "Content Creation Systems", desc: "Repeatable systems to ship daily content without burnout." },
  { icon: Workflow, title: "Automation Workflows", desc: "n8n, Zapier and AI pipelines that save 10+ hours weekly." },
  { icon: Zap, title: "Productivity Training", desc: "Notion, Obsidian, second-brain frameworks for creators." },
  { icon: Wand2, title: "Technology Explained", desc: "Complex tech distilled into simple visual stories." },
];

const portfolio = [
  { tag: "AI TUTORIALS", title: "Mastering Prompt Engineering", desc: "A complete framework for ChatGPT & Claude." },
  { tag: "YOUTUBE EDU", title: "AI Tools That Replace Your Team", desc: "Top 10 stack for solo creators in 2026." },
  { tag: "VIDEO EDITING", title: "Cinematic Tutorial Workflow", desc: "How I edit 10-min videos in under 2 hours." },
  { tag: "DOCUMENTARY", title: "The Creator Economy in India", desc: "Mini-doc on the rise of skill-based creators." },
  { tag: "RESOURCES", title: "Creator OS — Notion Template", desc: "All my SOPs, scripts & dashboards." },
  { tag: "CASE STUDY", title: "0 → 10K in 90 days", desc: "Breakdown of an AI-education channel growth." },
];

const skills = {
  "AI Tools": [
    { name: "ChatGPT", value: 95 }, { name: "Claude", value: 92 }, { name: "Gemini", value: 88 },
    { name: "Midjourney", value: 90 }, { name: "Runway", value: 85 }, { name: "n8n", value: 80 },
  ],
  "Video Editing": [
    { name: "Premiere Pro", value: 94 }, { name: "After Effects", value: 88 },
    { name: "DaVinci Resolve", value: 82 }, { name: "CapCut", value: 96 },
  ],
  "Technology": [
    { name: "Automation", value: 90 }, { name: "Prompt Engineering", value: 95 }, { name: "Workflow Design", value: 88 },
  ],
};

const roadmap = [
  { level: "Beginner", desc: "Foundations of AI, content & video editing.", items: ["AI literacy", "ChatGPT basics", "Editing 101"] },
  { level: "Intermediate", desc: "Build a real publishing system.", items: ["Prompt frameworks", "Edit workflow", "Brand voice"] },
  { level: "Advanced", desc: "Automation, scale & monetization.", items: ["n8n pipelines", "Motion design", "Audience growth"] },
  { level: "Expert", desc: "Become an AI-native creator.", items: ["Custom GPTs", "AI agents", "Education brand"] },
];

const testimonials = [
  { name: "Aarav Mehta", role: "Indie Creator", quote: "Skile.in changed how I think about AI. The tutorials are insanely practical.", rating: 5 },
  { name: "Priya Sharma", role: "Freelance Editor", quote: "Siri's editing workflow saved me 15 hours a week. Worth every minute.", rating: 5 },
  { name: "Rahul Verma", role: "Startup Founder", quote: "Finally — AI education that respects your time. Clean, sharp, no fluff.", rating: 5 },
];

const articles = [
  { cat: "AI Guides", title: "10 ChatGPT Prompts Every Creator Should Steal", read: "5 min" },
  { cat: "Editing Tips", title: "The 3-Second Rule That Doubles Retention", read: "4 min" },
  { cat: "Creator Resources", title: "Notion Setup for Solo Creators in 2026", read: "7 min" },
  { cat: "AI Guides", title: "Claude vs ChatGPT — Which Wins in 2026?", read: "6 min" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] } }),
};

const Portfolio = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const balloonY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const balloonR = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const [activeSkill, setActiveSkill] = useState<keyof typeof skills>("AI Tools");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen text-[#0B0B0B]" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#F5F5F5" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl overflow-hidden" style={{ background: BLUE }}>
              <img src={logo} alt="Skile.in" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-lg tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>skile.in</span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {["About", "Services", "Portfolio", "Skills", "Roadmap", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-black/70 hover:text-[#00AEEF] transition-colors">{l}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-full hover:scale-105 transition-transform" style={{ background: BLUE, boxShadow: `0 8px 24px -8px ${BLUE}` }}>
            Let's talk <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 70% 20%, rgba(0,174,239,0.18), transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(0,174,239,0.10), transparent 60%), #F5F5F5" }} />
        {/* grid texture */}
        <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0B0B0B 1px, transparent 1px), linear-gradient(90deg, #0B0B0B 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-[#00AEEF]/20 bg-white/60 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BLUE }} />
              AI EDUCATION • CREATOR EDUCATION • DIGITAL SKILLS
            </motion.div>
            <motion.h1
              initial="hidden" animate="show" variants={fadeUp} custom={1}
              className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight font-black"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Master <span style={{ color: BLUE }}>AI</span>, Content Creation
              <br />& Digital Skills.
            </motion.h1>
            <motion.p initial="hidden" animate="show" variants={fadeUp} custom={2} className="mt-6 text-lg md:text-xl text-black/60 max-w-xl leading-relaxed">
              Practical tutorials, creator education, AI workflows, and technology — explained simply by <strong className="text-black">Siri Jack</strong>.
            </motion.p>
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={3} className="mt-9 flex flex-wrap gap-3">
              <a href="#portfolio" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-semibold hover:scale-[1.03] transition-transform" style={{ background: BLUE, boxShadow: `0 16px 40px -12px ${BLUE}` }}>
                Explore Content <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-black/10 bg-white hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all">
                <Play className="w-4 h-4 fill-current" /> Watch Tutorials
              </a>
            </motion.div>

            {/* stats */}
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={4} className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {[
                { v: "100+", l: "Tutorials" },
                { v: "10K+", l: "Learners" },
                { v: "AI", l: "Focused" },
                { v: "Creator", l: "First" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/5 hover:border-[#00AEEF]/40 transition-all">
                  <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: "'Montserrat', sans-serif", color: BLUE }}>{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-black/50 mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mascot */}
          <motion.div
            style={{ y: balloonY, rotate: balloonR }}
            className="md:col-span-5 relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 blur-3xl -z-10 opacity-50" style={{ background: `radial-gradient(circle, ${BLUE}55, transparent 70%)` }} />
              <img src={balloon} alt="Skile.in mascot" className="w-[300px] md:w-[460px] h-auto drop-shadow-2xl" />
            </motion.div>
            {/* floating glass chips */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute top-10 left-0 hidden md:flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/70 backdrop-blur border border-white shadow-xl text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" style={{ color: BLUE }} /> AI workflow live
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1 }} className="absolute bottom-10 right-0 hidden md:flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/70 backdrop-blur border border-white shadow-xl text-xs font-semibold">
              <Check className="w-3.5 h-3.5" style={{ color: BLUE }} /> 10K+ learners
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="md:col-span-5 relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem]" style={{ background: `linear-gradient(135deg, ${BLUE}, #66D4F5)` }} />
            <img src={lounge} alt="Siri Jack" className="relative rounded-[2rem] w-full h-auto" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="md:col-span-7">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: BLUE }}>— ABOUT</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Who is <span style={{ color: BLUE }}>Siri Jack?</span>
            </h2>
            <p className="mt-6 text-lg text-black/70 leading-relaxed">
              Founder of <strong>Skile.in</strong>, helping creators, students, freelancers, and professionals learn AI, content creation, and digital skills through engaging educational content.
            </p>
            <p className="mt-4 text-base text-black/60 leading-relaxed">
              From building automation pipelines to producing cinematic tutorials, I turn complex technology into simple, visual stories that move you from idea to execution — fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["AI Educator", "Video Editor", "Content Creator", "Digital Storyteller"].map(t => (
                <span key={t} className="px-4 py-2 rounded-full text-xs font-semibold border border-black/10 bg-white">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-10 relative">
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, #F5F5F5, #EAF7FE 60%, #F5F5F5)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: BLUE }}>— WHAT I DO</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Services built for the<br/><span style={{ color: BLUE }}>AI-native creator.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-7 bg-white/70 backdrop-blur border border-black/5 hover:border-[#00AEEF]/40 transition-all overflow-hidden"
                style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: BLUE }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${BLUE}15`, color: BLUE }}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{s.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: BLUE }}>— PORTFOLIO</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Selected work & case studies.
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold inline-flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors">View all <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:border-[#00AEEF]/40 hover:shadow-2xl transition-all"
              >
                <div className="aspect-video relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BLUE}, #003F5C)` }}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%)" }} />
                  <div className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white/90 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur">{p.tag}</div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-[#00AEEF] text-[#00AEEF] translate-x-0.5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-lg mb-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>{p.title}</h3>
                  <p className="text-sm text-black/60 mb-4">{p.desc}</p>
                  <button className="text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-10 relative">
        <div className="absolute inset-0 -z-10" style={{ background: "#0B0B0B" }} />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ background: `radial-gradient(ellipse at 50% 0%, ${BLUE}, transparent 60%)` }} />
        <div className="max-w-7xl mx-auto text-white">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: BLUE }}>— TOOLKIT</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Stack & skills I teach.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {(Object.keys(skills) as Array<keyof typeof skills>).map(k => (
              <button
                key={k}
                onClick={() => setActiveSkill(k)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeSkill === k ? "text-white" : "text-white/60 border border-white/10 hover:text-white"
                }`}
                style={activeSkill === k ? { background: BLUE, boxShadow: `0 8px 24px -8px ${BLUE}` } : {}}
              >
                {k}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills[activeSkill].map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span>{s.name}</span>
                  <span style={{ color: BLUE }}>{s.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${BLUE}, #66D4F5)`, boxShadow: `0 0 20px ${BLUE}` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: BLUE }}>— LEARNING ROADMAP</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              From curious to <span style={{ color: BLUE }}>AI-native.</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 hidden md:block" style={{ background: `linear-gradient(90deg, ${BLUE}33, ${BLUE}, ${BLUE}33)` }} />
            <div className="grid md:grid-cols-4 gap-6">
              {roadmap.map((r, i) => (
                <motion.div key={r.level} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i} className="relative">
                  <div className="w-12 h-12 rounded-full mb-5 flex items-center justify-center text-white font-black relative z-10" style={{ background: BLUE, boxShadow: `0 0 0 6px white, 0 0 0 7px ${BLUE}33` }}>
                    {i + 1}
                  </div>
                  <h3 className="font-black text-xl mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{r.level}</h3>
                  <p className="text-sm text-black/60 mb-4">{r.desc}</p>
                  <ul className="space-y-1.5">
                    {r.items.map(it => (
                      <li key={it} className="text-xs flex items-center gap-2 text-black/70">
                        <Check className="w-3 h-3" style={{ color: BLUE }} /> {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-10 relative">
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, #F5F5F5, #EAF7FE)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: BLUE }}>— LOVED BY CREATORS</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              What learners say.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="rounded-3xl p-7 bg-white/70 backdrop-blur border border-white shadow-xl">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="w-4 h-4 fill-[#00AEEF] text-[#00AEEF]" />)}
                </div>
                <p className="text-black/80 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-white" style={{ background: BLUE }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-black/50">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT HUB */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: BLUE }}>— CONTENT HUB</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Latest tutorials & guides.
              </h2>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search tutorials…"
                className="pl-11 pr-5 py-3 rounded-full bg-white border border-black/10 text-sm w-72 outline-none focus:border-[#00AEEF] transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", "AI Guides", "Editing Tips", "Creator Resources"].map(c => (
              <button key={c} className="px-4 py-2 rounded-full text-xs font-semibold border border-black/10 bg-white hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all">{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase())).map((a, i) => (
              <motion.article key={a.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:border-[#00AEEF]/40 hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] relative" style={{ background: `linear-gradient(135deg, ${BLUE}22, ${BLUE}66)` }}>
                  <div className="absolute top-3 left-3 text-[10px] font-bold tracking-wider px-2 py-1 rounded-full bg-white/90 backdrop-blur" style={{ color: BLUE }}>{a.cat.toUpperCase()}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-black mb-2 leading-snug group-hover:text-[#00AEEF] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>{a.title}</h3>
                  <div className="text-xs text-black/50">{a.read} read</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #007FB0 100%)` }} />
        <motion.img
          src={balloon}
          alt=""
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 bottom-0 w-[260px] md:w-[420px] opacity-90 hidden md:block"
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white relative">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white/80">— GET IN TOUCH</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Let's build<br/>something <em>brilliant.</em>
            </h2>
            <p className="mt-5 text-white/80 text-lg max-w-md">Collaborations, consultations, brand partnerships — I'd love to hear what you're building.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:24a21a04w5@gmail.com" className="inline-flex items-center gap-2 bg-white text-[#0B0B0B] px-6 py-3.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Let's Collaborate <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:24a21a04w5@gmail.com?subject=Consultation" className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all">
                Book Consultation
              </a>
            </div>
          </div>
          <form onSubmit={e => e.preventDefault()} className="rounded-3xl p-7 bg-white/10 backdrop-blur-xl border border-white/20 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/60 outline-none focus:border-white text-sm" />
              <input placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/60 outline-none focus:border-white text-sm" />
            </div>
            <select className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white outline-none focus:border-white text-sm">
              <option className="text-black">Project type</option>
              <option className="text-black">AI Tutorial</option>
              <option className="text-black">Video Editing</option>
              <option className="text-black">Brand Partnership</option>
              <option className="text-black">Consultation</option>
            </select>
            <textarea rows={4} placeholder="Tell me about your project…" className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/60 outline-none focus:border-white text-sm resize-none" />
            <button className="w-full py-3.5 rounded-xl bg-white text-[#0B0B0B] font-bold text-sm hover:scale-[1.02] transition-transform">
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B0B0B] text-white px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden" style={{ background: BLUE }}>
                <img src={logo} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="font-black text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>skile.in</span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed text-sm">Learn Faster. Create Smarter. AI education & digital skills for the next generation of creators.</p>
            <div className="flex gap-2 mt-6">
              {[
                { I: Youtube, h: "#" },
                { I: Instagram, h: "https://instagram.com/sirijack.s" },
                { I: Linkedin, h: "#" },
                { I: Github, h: "https://github.com/24a21a04w5-crypto" },
                { I: Mail, h: "mailto:24a21a04w5@gmail.com" },
              ].map(({ I, h }, k) => (
                <a key={k} href={h} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#00AEEF] hover:border-[#00AEEF] transition-all">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-white/70">
              {["About", "Services", "Portfolio", "Roadmap", "Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[#00AEEF] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Reach out</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="mailto:24a21a04w5@gmail.com" className="hover:text-[#00AEEF]">24a21a04w5@gmail.com</a></li>
              <li><a href="https://skile.in" className="hover:text-[#00AEEF]">skile.in</a></li>
              <li>India 🇮🇳</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-3 text-xs text-white/40">
          <div>© 2026 Skile.in — Built by Siri Jack</div>
          <div>Learn Faster. Create Smarter.</div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
