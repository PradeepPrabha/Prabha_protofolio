import FadeIn from "./FadeIn";

const activities = [
  { icon: "🦟", title: "Field Visit – Kanthaloor", year: "2025", desc: "Studied biodiversity, climate, and ecological interactions within high-altitude ecosystem." },
  { icon: "🌸", title: "International Conference – Asian Pollinator Conservation", year: "2024", desc: "Attended at AIHSHEW." },
  { icon: "🏋️", title: "Aishew Captain", year: "2023", desc: "Led Kabaddi and Football teams." },
  { icon: "🏕️", title: "NSS – National Integration Camp", year: "2023", desc: "Volunteered for social impact and community service activities." },
  { icon: "🔄", title: "Rotaract Club Member", year: "2023", desc: "Member at Ahishew Club for 2 years." },
  { icon: "⚕️", title: "Medical Conference – Health", year: "2025", desc: "Attended at Snekeram Multiple Facility Hospital." },
  { icon: "🔬", title: "Zoology Department Chairperson", year: "2023–present", desc: "Led and volunteered many programs in college." },
  { icon: "📋", title: "Secretary – LIA", year: "2025", desc: "Currently serving as Secretary at LIA." },
];

export default function Activities() {
  return (
    <section id="activities" style={{ padding: "100px 40px", background: "rgba(52,211,153,0.02)", borderTop: "1px solid rgba(52,211,153,0.08)", borderBottom: "1px solid rgba(52,211,153,0.08)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <p className="section-title">05 · Activities</p>
          <div className="accent-line" style={{ marginTop: "12px" }} />
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, marginBottom: "60px", fontStyle: "italic" }}>Co &amp; Extra <span className="shimmer-text">Curricular</span></h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
          {activities.map((a, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "1.8rem" }}>{a.icon}</span>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#34d399", background: "rgba(52,211,153,0.1)", padding: "2px 8px", borderRadius: "10px" }}>{a.year}</span>
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "6px", color: "#ecfdf5" }}>{a.title}</h4>
                <p style={{ fontSize: "0.85rem", color: "#86efac", fontWeight: 300, lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", color: "#34d399", textTransform: "uppercase", marginBottom: "16px" }}>Hobbies</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
              {[["💃", "Dancing"], ["✏️", "Drawing"], ["🧵", "Handcraft"]].map(([icon, h]) => (
                <div key={h} style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "30px", padding: "10px 22px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.8rem", color: "#a7f3d0", fontWeight: 300, letterSpacing: "0.08em" }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}