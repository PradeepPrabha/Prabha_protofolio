import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 40px", maxWidth: "1000px", margin: "0 auto" }}>
      <FadeIn>
        <p className="section-title">04 · Research Project</p>
        <div className="accent-line" style={{ marginTop: "12px" }} />
        <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, marginBottom: "60px", fontStyle: "italic" }}>Featured <span className="shimmer-text">Work</span></h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div style={{ background: "linear-gradient(135deg,rgba(52,211,153,0.07) 0%,rgba(16,185,129,0.03) 100%)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: "16px", padding: "48px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-30px", right: "-30px", fontSize: "160px", opacity: 0.05, pointerEvents: "none" }}>🍋</div>
          <div style={{ display: "inline-block", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
            <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#34d399", textTransform: "uppercase" }}>Sustainable Environmental · Bio-Based Pest Control</span>
          </div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 400, marginBottom: "24px", lineHeight: 1.4 }}>Social Behaviour of Termites &amp; Repellent Potency Using <em style={{ color: "#86efac" }}>Citrus Fruit Peel</em></h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px", marginTop: "32px" }}>
            {[
              { icon: "🔍", text: "Identified citrus peels as source of natural insect-repellent compounds (limonene)" },
              { icon: "⚗️", text: "Compared effectiveness of natural repellents vs chemical pesticides" },
              { icon: "🐜", text: "Observed & recorded how citrus peel extracts affect termite behavior" },
              { icon: "♻️", text: "Promoted eco-friendly and low-cost pest control methods" },
            ].map((p, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "18px", borderLeft: "2px solid rgba(52,211,153,0.3)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{p.icon}</div>
                <p style={{ fontSize: "0.87rem", color: "#a7f3d0", fontWeight: 300, lineHeight: 1.6 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}