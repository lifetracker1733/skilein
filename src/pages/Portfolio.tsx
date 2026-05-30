import { Link } from "react-router-dom";
import balloonImg from "@/assets/siri-balloon.png";
import loungeImg from "@/assets/siri-lounge.png";

const projects = [
  { title: "AI TUTORIALS", color: "#F5F0E8" },
  { title: "DOCUMENTARY", color: "#F5F0E8" },
  { title: "LONG FORM", color: "#F5F0E8" },
  { title: "MOTION GFX", color: "#F5F0E8" },
  { title: "TALKING HEAD", color: "#F5F0E8" },
];

const bento = [
  { type: "color", bg: "#F4B6CE", span: "" },
  { type: "card", bg: "#0F7A4E", label: "POWER PLAY", sub: "Delivery in 10 minutes" },
  { type: "card", bg: "#B26B5C", label: "RED FORT", sub: "Search 'juices'" },
  { type: "color", bg: "#E8D5C4", img: "city" },
  { type: "card", bg: "#9BE5B8", label: "MATCH'TIME MUNCHIES", sub: "Delivery in 10 minutes" },
  { type: "color", bg: "#FBD2DD" },
  { type: "color", bg: "#C9A8E8", label: "bubbles" },
  { type: "color", bg: "#FFFFFF" },
  { type: "color", bg: "#C9C9CF", label: "serum" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-black overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Minimal top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-tight">Siri Jack</Link>
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-black/70">
          <a href="#work" className="hover:text-black">Work</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
          <Link to="/" className="hover:text-black">skile.in</Link>
        </div>
      </nav>

      {/* HERO — pink/blue gradient sky band */}
      <section className="relative w-full" style={{ height: "100vh", minHeight: 600 }}>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #6EC8F2 0%, #A8E0F5 28%, #F8C8D8 55%, #FBA5BF 80%, #F899B5 100%)",
          }}
        />
        {/* Soft cloud blur */}
        <div className="absolute inset-x-0 bottom-0 h-[40%]" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.5), transparent 70%)" }} />

        {/* Mascot balloon — animated float */}
        <div className="absolute left-[4%] top-[18%] w-[200px] md:w-[280px] animate-[float_6s_ease-in-out_infinite]">
          <img src={balloonImg} alt="Siri balloon" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* Headline */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1
            className="text-white text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Instrument Serif', 'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, textShadow: "0 4px 30px rgba(0,0,0,0.15)" }}
          >
            making things move
          </h1>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-xs uppercase tracking-[0.3em]">
          scroll ↓
        </div>
      </section>

      {/* INTRO / SAY HI */}
      <section id="about" className="px-8 py-32 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6">— Hi, I'm Siri Jack</p>
        <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.05] mb-10" style={{ fontFamily: "'Instrument Serif', serif" }}>
          AI Creator, Video Editor, and Tutorial Content Specialist transforming complex
          topics into <em className="text-[#F899B5]">engaging visual stories.</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-black/70 text-lg leading-relaxed max-w-4xl">
          <p>From AI tools and automation to content creation and productivity systems, I create tutorials that make technology simple and practical.</p>
          <p>My mission is to build a million-dollar educational brand by teaching valuable digital skills through powerful storytelling and modern content creation.</p>
        </div>
      </section>

      {/* WORK ROW — horizontal scroll tiles */}
      <section id="work" className="pb-24">
        <div className="px-8 mb-8 max-w-6xl mx-auto flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">— Selected Work</p>
          <p className="text-sm text-black/40">drag →</p>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-8 pb-4">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="shrink-0 w-[280px] md:w-[340px] aspect-[5/3] rounded-2xl bg-white border border-black/5 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-black/60 hover:bg-[#F899B5] hover:text-white transition-all cursor-pointer hover:-translate-y-2 duration-500"
                style={{ animation: `fadeUp 0.6s ${i * 0.08}s both` }}
              >
                {p.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-12">— Crafted Pieces</p>
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)", backgroundSize: "20px 20px", padding: "20px", borderRadius: "20px" }}
        >
          {/* Pink square */}
          <div className="aspect-square rounded-2xl" style={{ background: "#F4B6CE" }} />
          <div className="aspect-square rounded-2xl" />
          {/* Green delivery card */}
          <div className="aspect-square rounded-2xl p-5 flex flex-col justify-between text-white text-xs" style={{ background: "#0F7A4E" }}>
            <div>
              <div className="font-bold mb-1">HOME — C-11, Z Block</div>
              <div className="opacity-70">Delivery in 10 minutes</div>
            </div>
            <div className="bg-black/30 rounded-lg px-3 py-2 backdrop-blur">⚡ POWER PLAY</div>
          </div>

          <div className="aspect-square rounded-2xl" />
          {/* Red Fort card */}
          <div className="aspect-square rounded-2xl p-5 flex flex-col justify-between text-white text-xs" style={{ background: "#B26B5C" }}>
            <div>
              <div className="font-bold mb-1">Delivery in 10 minutes</div>
              <div className="opacity-70">HOME — 608 Sector 21B, NIT</div>
            </div>
            <div className="text-3xl">🏛️</div>
          </div>
          {/* City beige */}
          <div className="aspect-square rounded-2xl flex items-center justify-center text-5xl" style={{ background: "#E8D5C4" }}>🏙️</div>

          {/* Mint munchies */}
          <div className="aspect-square rounded-2xl p-5 flex flex-col justify-between text-black text-xs" style={{ background: "#9BE5B8" }}>
            <div>
              <div className="font-bold mb-1">10:01</div>
              <div className="opacity-70">Delivery in 10 minutes</div>
            </div>
            <div className="font-black text-xl leading-none">MATCH'TIME<br/>MUNCHIES</div>
          </div>
          {/* Pink cloud */}
          <div className="aspect-square rounded-2xl" style={{ background: "linear-gradient(180deg, #FBD2DD, #F899B5)" }} />
          {/* Purple bubbles */}
          <div className="aspect-square rounded-2xl flex items-center justify-center text-5xl" style={{ background: "#C9A8E8" }}>🫧</div>

          <div className="aspect-square rounded-2xl bg-white" />
          {/* Serum gray */}
          <div className="aspect-square rounded-2xl flex items-center justify-center text-5xl" style={{ background: "#C9C9CF" }}>💧</div>
          <div className="aspect-square rounded-2xl" />
        </div>
      </section>

      {/* SCALLOPED BOTTOM — pink with lounge mascot + marquee */}
      <section id="contact" className="relative mt-24">
        {/* Scalloped top edge */}
        <svg className="block w-full -mb-px" viewBox="0 0 1200 40" preserveAspectRatio="none" style={{ height: 40 }}>
          <path d="M0,40 Q30,0 60,40 T120,40 T180,40 T240,40 T300,40 T360,40 T420,40 T480,40 T540,40 T600,40 T660,40 T720,40 T780,40 T840,40 T900,40 T960,40 T1020,40 T1080,40 T1140,40 T1200,40 L1200,40 L0,40 Z" fill="#FBD2DD" />
        </svg>

        <div className="relative pt-20 pb-0 px-8" style={{ background: "#FBD2DD" }}>
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-4">SAY HELLO</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-black/70">
              <a href="https://github.com/24a21a04w5-crypto" target="_blank" rel="noreferrer" className="hover:text-black underline-offset-4 hover:underline">GitHub</a>
              <span className="text-black/30">→</span>
              <a href="https://instagram.com/sirijack.s" target="_blank" rel="noreferrer" className="hover:text-black underline-offset-4 hover:underline">Instagram</a>
              <span className="text-black/30">→</span>
              <a href="mailto:24a21a04w5@gmail.com" className="hover:text-black underline-offset-4 hover:underline">Email</a>
              <span className="text-black/30">→</span>
              <a href="tel:+910000000000" className="hover:text-black underline-offset-4 hover:underline">Call</a>
            </div>
          </div>

          {/* Lounge mascot bottom-left */}
          <div className="relative mt-16 flex items-end">
            <img src={loungeImg} alt="Siri lounging" className="relative z-10 w-[280px] md:w-[420px] h-auto -mb-2" />
          </div>

          {/* Big marquee text along the bottom */}
          <div className="overflow-hidden -mt-32 md:-mt-44 pb-6">
            <div className="flex gap-8 animate-[scroll-x_30s_linear_infinite] whitespace-nowrap items-center" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-none flex items-center gap-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  CRAFTING MOTION <span className="text-black/60">✦</span> TELLING STORIES <span className="text-black/60">✦</span>
                </span>
              ))}
            </div>
          </div>

          <div className="text-center py-6 text-xs text-black/50">© 2026 Siri Jack</div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Portfolio;
