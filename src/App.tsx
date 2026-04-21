import { useState, useEffect } from "react";
import ParticlesBg from "./components/ParticlesBg";
import FadeIn from "./components/FadeIn";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("About");
  const [heroAnim, setHeroAnim] = useState(false);

  useEffect(() => { setTimeout(() => setHeroAnim(true), 100); }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#0a0f0d", minHeight: "100vh", color: "#e8f5e9" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Josefin+Sans:wght@200;300;400;600&display=swap');
        @keyframes float0 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-22px) scale(1.08)} }
        @keyframes float1 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(12deg)} }
        @keyframes float2 { 0%,100%{transform:translateY(0) scale(1)} 33%{transform:translateY(-18px) scale(0.9)} 66%{transform:translateY(8px) scale(1.05)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes pulse-border { 0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,0.4)} 50%{box-shadow:0 0 0 12px rgba(52,211,153,0)} }
        @keyframes reveal { from{clip-path:inset(0 100% 0 0)} to{clip-path:inset(0 0% 0 0)} }
        .nav-link { font-family:'Josefin Sans',sans-serif; font-size:0.72rem; letter-spacing:0.2em; font-weight:300; text-transform:uppercase; color:#86efac; transition:color 0.2s; cursor:pointer; }
        .nav-link:hover, .nav-link.active { color:#34d399; }
        .skill-pill { background:rgba(52,211,153,0.08); border:1px solid rgba(52,211,153,0.2); border-radius:4px; padding:5px 14px; font-family:'Josefin Sans',sans-serif; font-size:0.75rem; font-weight:300; letter-spacing:0.08em; color:#a7f3d0; transition:all 0.2s; }
        .skill-pill:hover { background:rgba(52,211,153,0.18); border-color:#34d399; color:#fff; transform:translateY(-2px); }
        .card { background:rgba(255,255,255,0.03); border:1px solid rgba(52,211,153,0.12); border-radius:12px; transition:all 0.3s; }
        .card:hover { background:rgba(52,211,153,0.06); border-color:rgba(52,211,153,0.35); transform:translateY(-4px); }
        .accent-line { width:40px; height:2px; background:linear-gradient(90deg,#34d399,transparent); margin-bottom:24px; }
        .section-title { font-family:'Josefin Sans',sans-serif; font-size:0.65rem; letter-spacing:0.35em; text-transform:uppercase; color:#34d399; font-weight:300; }
        .shimmer-text { background:linear-gradient(90deg,#86efac,#34d399,#6ee7b7,#34d399,#86efac); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 4s linear infinite; }
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:#0a0f0d} ::-webkit-scrollbar-thumb{background:#34d399;border-radius:2px}
      `}</style>

      <Navbar active={active} scrollTo={scrollTo} />
      <Hero heroAnim={heroAnim} />
      <Skills />
      <Experience />
      <Projects />
     
      <Contact />
      <Footer />
    </div>
  );
}